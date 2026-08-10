import { describe, expect, it } from "vitest";
import { formatCardDate } from "./format-date";

describe("formatCardDate", () => {
  it("marks a project with no end year as ongoing", () => {
    expect(formatCardDate(2024)).toBe("2024 → current");
  });

  it("collapses a single-year project to the year", () => {
    expect(formatCardDate(2021, 2021)).toBe(2021);
  });

  it("renders a range", () => {
    expect(formatCardDate(2017, 2019)).toBe("2017 → 2019");
  });
});
