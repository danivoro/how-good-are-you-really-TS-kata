import betterThanAverage from "./better-than-average";

test("codewars tests", () => {
  expect(betterThanAverage([2, 3], 5)).toBe(true);
  expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true);
  expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toBe(
    true
  );
  expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toBe(false);
  expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toBe(false);
});

test("my own tests", () => {
  expect(betterThanAverage([0, 0, 0], 4)).toBe(true);
  expect(betterThanAverage([4, 4, 4], 4)).toBe(false);
  expect(betterThanAverage([5, 4, 4], 4)).toBe(false);
});
