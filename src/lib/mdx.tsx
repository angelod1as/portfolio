import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
// import { FileData, FrontMatter } from "#types/types";

// const contentDir = join(process.cwd(), "src", "content");

// type Fields = keyof FrontMatter | "content";

// const getContent = (
//   slug: string,
//   fields: Array<Fields> = [],
//   dir: string
// ): FileData => {
//   const realSlug = slug.replace(/\.mdx$/, "");
//   const fullPath = join(dir, `${realSlug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents) as unknown as FileData;

//   const items: FileData = {
//     data: data,
//     content: fields.includes("content") ? content : "",
//   };

//   return items;
// };

// export function getProjects(locale: string, fields: Fields[] = []) {
//   const dir = join(contentDir, locale, "projects");
//   const slugs = fs.readdirSync(dir);
//   const projects = slugs.map((slug) => getContent(slug, fields, dir));
//   return projects;
// }

// export function getAbout(locale: string, fields: Fields[] = []) {
//   const dir = join(contentDir, locale, "about");
//   const slugs = fs.readdirSync(dir);
//   const [about, contact] = slugs.map((slug) => getContent(slug, fields, dir));
//   return [about, contact];
// }
