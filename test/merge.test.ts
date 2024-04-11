import { test, expect } from "@playwright/test";
import { merge } from "../src/merge";

test.describe("Merge Functionality", () => {
  test("should merge three sorted collections", async () => {
    const collection1 = [1, 3, 5];
    const collection2 = [6, 4, 2];
    const collection3 = [7, 8, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

});
