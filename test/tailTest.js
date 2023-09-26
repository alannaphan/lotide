const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 'Lighthouse'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
