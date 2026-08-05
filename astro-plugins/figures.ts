export const figures = {
  name: "figures",
  element: {
    filter: ["p"],
    visit(node: any, ctx: any) {
      const kids = (node.children ?? []).filter(
        (c: any) => !(c.type === "text" && c.value.trim() === ""),
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
          properties: {},
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
