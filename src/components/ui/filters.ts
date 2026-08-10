// Filter functionality
// This _vanilla_ code is kinda complicated for anyone React-addicted (me)
// I hope it's readable enough
//
// Lives in its own module rather than inline in Filters.astro so the tests can
// drive it against a real DOM.
export const initFilters = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLFormElement>(".filters").forEach((form) => {
    const target = form.dataset.target;
    const lists = target ? root.querySelectorAll(target) : [];

    // A page can carry several lists under one filter bar. Group them so a
    // section whose items are all filtered out can hide its heading too.
    const groups = [...lists].map((list) => ({
      section: list.closest("section"),
      items: [...list.querySelectorAll<HTMLElement>(":scope > li")],
    }));
    const items = groups.flatMap((group) => group.items);
    if (items.length === 0) return;

    const boxes = form.querySelectorAll<HTMLInputElement>(
      "input[type=checkbox]",
    );
    const count = form.querySelector<HTMLElement>(".count");

    // Checked boxes grouped by facet: "cat" -> ["tech", "agile"]
    const selected = () => {
      const map = new Map<string, string[]>();
      boxes.forEach((box) => {
        if (!box.checked) return;
        map.set(box.name, [...(map.get(box.name) ?? []), box.value]);
      });
      return map;
    };

    const apply = () => {
      const active = selected();
      let shown = 0;

      items.forEach((item) => {
        // OR within a facet, AND across facets.
        // No sense to AND withing a facet (most posts are single category)
        const match = [...active].every(([facet, values]) => {
          const own = (item.dataset[facet] ?? "").split(" ");
          return values.some((value) => own.includes(value));
        });

        item.hidden = !match;
        if (match) shown++;
      });

      groups.forEach((group) => {
        if (group.section) {
          group.section.hidden = group.items.every((item) => item.hidden);
        }
      });

      if (count) {
        count.textContent =
          shown === 0
            ? "Nothing matches these filters."
            : `${shown} of ${items.length}`;
      }
    };

    // replaceState keeps "Back" from stepping through every click.
    // The filters are visual, not navigation
    const sync = () => {
      const params = new URLSearchParams();
      selected().forEach((values, facet) => {
        values.forEach((value) => params.append(facet, value));
      });
      const query = params.toString();
      history.replaceState(null, "", query ? `?${query}` : location.pathname);
    };

    // Restore state from a shared URL before the first paint of the controls.
    const params = new URLSearchParams(location.search);
    boxes.forEach((box) => {
      box.checked = params.getAll(box.name).includes(box.value);
    });

    form.addEventListener("change", () => {
      apply();
      sync();
    });

    apply();
    form.hidden = false;
  });
};
