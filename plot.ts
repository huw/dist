import * as d3 from "d3";
import { density1d } from "fast-kde";
import * as Plot from "@observablehq/plot";
import type { Plot as PlotType } from "@observablehq/plot";

export default function plot(
  sample: number[],
): ((HTMLElement | SVGSVGElement) & PlotType) & { value: number[] } {
  const density = [...density1d(sample)];

  const nearestQuantilesInDensity = [0.05, 0.5, 0.95]
    .map((p) => d3.quantile(sample, p))
    .map((q) => ({
      i: d3.bisectCenter(
        density.map((d) => d.x),
        q!,
      ),
      q,
    }))
    .map(({ q, i }) => ({ x: q, y: density[i].y }));

  const plot = Plot.plot({
    y: { ticks: 0, label: "Density Estimate" },
    x: { label: "Value" },
    height: 196,
    width: 384,
    marks: [
      Plot.areaY(density, { x: "x", y: "y", fillOpacity: 0.1 }),
      Plot.lineY(density, { x: "x", y: "y" }),
      Plot.ruleY([0]),
      Plot.ruleX(nearestQuantilesInDensity, {
        x: "x",
        y2: "y",
        strokeDasharray: "5, 3",
      }),
      Plot.axisX(),
      Plot.axisX(
        nearestQuantilesInDensity.map(({ x }) => x),
        { textStroke: "#fff", textStrokeWidth: 5 },
      ),
      Plot.crosshairX(density, { x: "x", y: "y" }),
    ],
  });

  plot.addEventListener("input", (e) => e.stopImmediatePropagation());

  return Object.assign((new HTMLDivElement()).appendChild(plot), {
    value: sample,
  });
}
