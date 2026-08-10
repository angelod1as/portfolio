// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import { initFilters } from "./filters";

// Mirrors what Filters.astro renders on the projects page: one filter bar over
// two sections, each item tagged with the facets it belongs to.
const markup = `
  <form class="filters" data-target=".projects" hidden>
    <fieldset>
      <legend>What</legend>
      <label><input type="checkbox" name="what" value="coding" />coding</label>
      <label><input type="checkbox" name="what" value="writing" />writing</label>
    </fieldset>
    <fieldset>
      <legend>Type</legend>
      <label><input type="checkbox" name="type" value="personal" />personal</label>
      <label><input type="checkbox" name="type" value="professional" />professional</label>
    </fieldset>
    <p class="count"></p>
  </form>

  <section id="highlighted">
    <h2>Highlighted</h2>
    <ul class="projects">
      <li id="recibo" data-what="coding" data-type="personal">Recibo</li>
    </ul>
  </section>

  <section id="other">
    <h2>Other projects</h2>
    <ul class="projects">
      <li id="huk" data-what="coding" data-type="professional">HUK</li>
      <li id="zines" data-what="writing" data-type="personal">Zines</li>
    </ul>
  </section>
`;

const box = (name: string, value: string) =>
  document.querySelector<HTMLInputElement>(
    `input[name="${name}"][value="${value}"]`,
  )!;

const check = (name: string, value: string, checked = true) => {
  const input = box(name, value);
  input.checked = checked;
  input.dispatchEvent(new Event("change", { bubbles: true }));
};

const visible = () =>
  [...document.querySelectorAll<HTMLElement>(".projects > li")]
    .filter((item) => !item.hidden)
    .map((item) => item.id);

const count = () => document.querySelector(".count")!.textContent;
const form = () => document.querySelector<HTMLFormElement>(".filters")!;
const section = (id: string) => document.getElementById(id) as HTMLElement;

const render = (search = "") => {
  document.body.innerHTML = markup;
  history.replaceState(null, "", `/projects/${search}`);
  initFilters();
};

beforeEach(() => {
  history.replaceState(null, "", "/projects/");
});

describe("filtering", () => {
  it("reveals the controls, which are hidden for no-JS visitors", () => {
    render();
    expect(form().hidden).toBe(false);
  });

  it("shows everything when nothing is checked", () => {
    render();
    expect(visible()).toEqual(["recibo", "huk", "zines"]);
    expect(count()).toBe("3 of 3");
  });

  it("filters down to one facet value", () => {
    render();
    check("what", "writing");
    expect(visible()).toEqual(["zines"]);
    expect(count()).toBe("1 of 3");
  });

  it("ORs values inside a facet", () => {
    render();
    check("type", "personal");
    check("type", "professional");
    expect(visible()).toEqual(["recibo", "huk", "zines"]);
  });

  it("ANDs across facets", () => {
    render();
    check("what", "coding");
    check("type", "personal");
    expect(visible()).toEqual(["recibo"]);
  });

  it("says so when nothing matches", () => {
    render();
    check("what", "writing");
    check("type", "professional");
    expect(visible()).toEqual([]);
    expect(count()).toBe("Nothing matches these filters.");
  });

  it("hides a section whose items are all filtered out", () => {
    render();
    check("type", "professional");
    expect(section("highlighted").hidden).toBe(true);
    expect(section("other").hidden).toBe(false);
  });

  it("brings a hidden section back when the filter is cleared", () => {
    render();
    check("type", "professional");
    check("type", "professional", false);
    expect(section("highlighted").hidden).toBe(false);
  });
});

describe("URL state", () => {
  it("writes checked facets to the query string", () => {
    render();
    check("what", "coding");
    check("type", "personal");
    expect(location.search).toBe("?what=coding&type=personal");
  });

  it("repeats the key for several values in one facet", () => {
    render();
    check("what", "coding");
    check("what", "writing");
    expect(location.search).toBe("?what=coding&what=writing");
  });

  it("drops the query string entirely once nothing is checked", () => {
    render();
    check("what", "coding");
    check("what", "coding", false);
    expect(location.search).toBe("");
    expect(location.pathname).toBe("/projects/");
  });

  it("replaces history instead of pushing, so Back leaves the page", () => {
    render();
    const before = history.length;
    check("what", "coding");
    check("type", "personal");
    expect(history.length).toBe(before);
  });

  it("restores checkboxes and the list from a shared URL", () => {
    render("?what=writing");
    expect(box("what", "writing").checked).toBe(true);
    expect(box("what", "coding").checked).toBe(false);
    expect(visible()).toEqual(["zines"]);
  });

  it("restores several values in one facet", () => {
    render("?type=personal&type=professional&what=coding");
    expect(box("type", "personal").checked).toBe(true);
    expect(box("type", "professional").checked).toBe(true);
    expect(visible()).toEqual(["recibo", "huk"]);
  });

  it("ignores values in the URL that no longer exist", () => {
    render("?what=tarot");
    expect(visible()).toEqual(["recibo", "huk", "zines"]);
  });
});
