export const externalLinks = (site: string) => ({
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node: any, ctx: any) {
      const href = String(node.properties?.href ?? "");
      if (!/^https?:\/\//.test(href)) return;
      if (href.startsWith(site)) return;

      ctx.setProperty(node, "className", ["external-link"]);
      ctx.setProperty(node, "rel", ["noopener", "noreferrer"]);
      ctx.setProperty(node, "target", "_blank");
      ctx.appendChild(node, {
        type: "element",
        tagName: "span",
        properties: {},
        children: [{ type: "text", value: " ➹" }],
      });
    },
  },
});
