import type { HastPluginDefinition } from "satteri";

export const figures: HastPluginDefinition = {
  name: "figures",
  element: {
    filter: ["p"],
    visit(node, ctx) {
      const kids = (node.children ?? []).filter(
        (c) => !(c.type === "text" && c.value.trim() === ""),
      );
      if (kids.length !== 1) return;
      const only = kids[0];
      if (only.type !== "element" || only.tagName !== "img") return;

      const title = only.properties?.title;
      const children = [
        { ...only, properties: { ...only.properties, title: undefined } },
      ];
      if (typeof title === "string" && title.length > 0) {
        children.push({
          type: "element",
          tagName: "figcaption",
          properties: {
            title: undefined,
          },
          children: [{ type: "text", value: title }],
        });
      }

      ctx.replaceNode(node, {
        type: "element",
        tagName: "figure",
        properties: {},
        children,
      });
    },
  },
};
