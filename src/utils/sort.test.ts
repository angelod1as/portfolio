import type { CollectionEntry } from "astro:content";
import { describe, expect, it } from "vitest";
import { byDate, byHighlighted, byYear, splitHighlighted } from "./sort";

// The sorts only touch `data`, so the entries here carry just that.
const post = (id: string, date: string) =>
  ({ id, data: { date: new Date(date) } }) as CollectionEntry<"blog">;

const project = (id: string, from: number, to?: number, highlighted?: number) =>
  ({
    id,
    data: { year: { from, to }, highlighted },
  }) as CollectionEntry<"projects">;

const recommendation = (id: string, date: string, highlighted?: number) =>
  ({
    id,
    data: { date: new Date(date), highlighted },
  }) as CollectionEntry<"recommendations">;

const ids = (entries: { id: string }[]) => entries.map((entry) => entry.id);

describe("byDate", () => {
  it("puts the newest post first", () => {
    const posts = [
      post("old", "2021-01-01"),
      post("new", "2026-01-01"),
      post("middle", "2023-01-01"),
    ];
    expect(ids(posts.sort(byDate))).toEqual(["new", "middle", "old"]);
  });
});

describe("byYear", () => {
  it("sorts by end year, newest first", () => {
    const projects = [project("a", 2015, 2016), project("b", 2019, 2020)];
    expect(ids(projects.sort(byYear))).toEqual(["b", "a"]);
  });

  it("floats ongoing projects above finished ones", () => {
    const projects = [project("done", 2024, 2025), project("ongoing", 2019)];
    expect(ids(projects.sort(byYear))).toEqual(["ongoing", "done"]);
  });

  it("breaks a tie on the end year with the start year", () => {
    const projects = [
      project("short", 2019, 2020),
      project("long", 2015, 2020),
    ];
    expect(ids(projects.sort(byYear))).toEqual(["short", "long"]);
  });
});

describe("splitHighlighted", () => {
  const projects = [
    project("second", 2015, 2016, 2),
    project("plain-old", 2010, 2011),
    project("first", 2019, 2020, 1),
    project("plain-new", 2024, 2025),
  ];

  it("orders highlighted projects by their explicit rank, not by year", () => {
    expect(ids(splitHighlighted(projects).highlighted)).toEqual([
      "first",
      "second",
    ]);
  });

  it("leaves the rest sorted by year", () => {
    expect(ids(splitHighlighted(projects).rest)).toEqual([
      "plain-new",
      "plain-old",
    ]);
  });

  it("treats highlighted: 0 as not highlighted", () => {
    const { highlighted, rest } = splitHighlighted([
      project("zero", 2020, 2021, 0),
    ]);
    expect(ids(highlighted)).toEqual([]);
    expect(ids(rest)).toEqual(["zero"]);
  });
});

describe("byHighlighted", () => {
  it("ranks highlighted recommendations first, then the newest", () => {
    const recommendations = [
      recommendation("plain-old", "2020-01-01"),
      recommendation("second", "2019-01-01", 2),
      recommendation("plain-new", "2024-01-01"),
      recommendation("first", "2018-01-01", 1),
    ];
    expect(ids(recommendations.sort(byHighlighted))).toEqual([
      "first",
      "second",
      "plain-new",
      "plain-old",
    ]);
  });
});
