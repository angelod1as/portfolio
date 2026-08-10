import { describe, expect, it } from "vitest";
import { formatDate, isOld } from "./date";

describe("formatDate", () => {
  it("pads day and month", () => {
    expect(formatDate(new Date("2022-05-07"))).toBe("07/05/2022");
  });

  it("shortens the year when asked", () => {
    expect(formatDate(new Date("2022-05-07"), { short: true })).toBe(
      "07/05/22",
    );
  });

  // The whole reason date.ts reads UTC: a build machine west of Greenwich
  // would otherwise render the previous day.
  it("reads the date in UTC, not local time", () => {
    expect(formatDate(new Date("2022-01-01T00:00:00Z"))).toBe("01/01/2022");
  });
});

describe("isOld", () => {
  const now = new Date("2026-08-10T00:00:00Z");

  it("is true past a year", () => {
    expect(isOld(new Date("2025-08-09T00:00:00Z"), now)).toBe(true);
  });

  it("is false inside a year", () => {
    expect(isOld(new Date("2026-08-09T00:00:00Z"), now)).toBe(false);
  });

  it("is false exactly a year out", () => {
    expect(isOld(new Date("2025-08-10T00:00:00Z"), now)).toBe(false);
  });
});
