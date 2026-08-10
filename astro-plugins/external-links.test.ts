import { describe, expect, it } from "vitest";
import { externalLinks } from "./external-links";

const SITE = "https://www.angelodias.com.br";

// Stands in for satteri's visitor context: the plugin only ever sets
// properties and appends children, so the fake just does that to the node.
const ctx = {
  setProperty: (node: any, key: string, value: unknown) => {
    node.properties[key] = value;
  },
  appendChild: (node: any, child: unknown) => {
    node.children.push(child);
  },
} as any;

const visit = (href: string) => {
  const node = {
    type: "element",
    tagName: "a",
    properties: { href },
    children: [],
  };
  (externalLinks(SITE).element as any).visit(node as any, ctx);
  return node;
};

describe("externalLinks", () => {
  it("marks a link to another domain", () => {
    const node = visit("https://astro.build");

    expect(node.properties).toMatchObject({
      className: ["external-link"],
      rel: ["noopener", "noreferrer"],
      target: "_blank",
    });
  });

  it("appends the arrow so the mark survives without CSS", () => {
    const node = visit("https://astro.build");

    expect(node.children).toEqual([
      {
        type: "element",
        tagName: "span",
        properties: {},
        children: [{ type: "text", value: " ➹" }],
      },
    ]);
  });

  it("leaves relative links alone", () => {
    expect(visit("/projects/recibo").properties).toEqual({
      href: "/projects/recibo",
    });
  });

  it("leaves anchors and mailto alone", () => {
    expect(visit("#concept").properties).toEqual({ href: "#concept" });
    expect(visit("mailto:oiangelodias@gmail.com").properties).toEqual({
      href: "mailto:oiangelodias@gmail.com",
    });
  });

  it("leaves absolute links back to this site alone", () => {
    expect(visit(`${SITE}/blog/`).properties).toEqual({
      href: `${SITE}/blog/`,
    });
  });

  it("treats a link with no href as internal", () => {
    const node = {
      type: "element",
      tagName: "a",
      properties: {},
      children: [],
    };
    (externalLinks(SITE).element as any).visit(node as any, ctx);
    expect(node.children).toEqual([]);
  });
});
