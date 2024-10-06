export { default as dist } from "./dist.ts";
export { default as mixture } from "./mixture.ts";
export {
  default as truncate,
  truncateLeft,
  truncateRight,
} from "./truncate.ts";
export {
  betaMeanSampleSize,
  betaMeanStdev,
  default as beta,
} from "./distribution/beta.ts";
export { default as exponential } from "./distribution/exponential.ts";
export { default as gamma } from "./distribution/gamma.ts";
export {
  default as lognormal,
  lognormalInterval,
  lognormalInterval as to,
} from "./distribution/lognormal.ts";
export { default as normal, normalInterval } from "./distribution/normal.ts";
export { default as uniform } from "./distribution/uniform.ts";
