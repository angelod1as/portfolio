import { describe, expect, it } from "vitest";
import { figures } from "./figures";

const text = (value: string) => ({ type: "text", value });

const img = (title?: string) => ({
  type: "element",
  tagName: "img",
  properties: { src: "./opening.webp", alt: "A thermal printer", title },
  children: [],
});

// Markdown wraps a lone image in a paragraph; the plugin swaps that paragraph
// for a figure. The fake context just records what it was replaced with.
const visit = (children: unknown[]) => {
  const node = { type: "element", tagName: "p", properties: {}, children };
  let replacement: any = null;

  (figures.element as any).visit(
    node as any,
    {
      replaceNode: (_node: unknown, next: unknown) => {
        replacement = next;
      },
    } as any,
  );

  return replacement;
};

describe("figures", () => {
  it("turns a lone image into a figure", () => {
    const result = visit([img()]);

    expect(result.tagName).toBe("figure");
    expect(result.children).toHaveLength(1);
    expect(result.children[0].tagName).toBe("img");
  });

  it("moves the image title into a caption", () => {
    const result = visit([img("Recibo, printing")]);

    expect(result.children[1]).toEqual({
      type: "element",
      tagName: "figcaption",
      properties: { title: undefined },
      children: [text("Recibo, printing")],
    });
  });

  it("strips the title so it doesn't also render as a tooltip", () => {
    const result = visit([img("Recibo, printing")]);

    expect(result.children[0].properties.title).toBeUndefined();
    expect(result.children[0].properties.alt).toBe("A thermal printer");
  });

  it("adds no caption for an image with no title", () => {
    expect(visit([img()]).children).toHaveLength(1);
  });

  it("adds no caption for an empty title", () => {
    expect(visit([img("")]).children).toHaveLength(1);
  });

  it("ignores the whitespace markdown leaves around the image", () => {
    expect(visit([text("\n"), img(), text("  ")]).tagName).toBe("figure");
  });

  it("leaves a paragraph of prose alone", () => {
    expect(visit([text("Recibo means receipt.")])).toBeNull();
  });

  it("leaves an image that shares its paragraph with text alone", () => {
    expect(visit([img(), text("with a caption beside it")])).toBeNull();
  });

  it("leaves a paragraph of two images alone", () => {
    expect(visit([img(), img()])).toBeNull();
  });
});
