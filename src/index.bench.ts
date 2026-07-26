import { bench, describe } from "vitest";

describe("sort", () => {
  bench("normal", () => {

  });

  bench("reverse", () => {
    const x = [1, 5, 4, 2, 3];
    x.toReversed().sort((a, b) => a - b);
  });
});
