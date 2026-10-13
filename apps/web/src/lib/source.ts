import { blogRoute, docsContentRoute, docsRoute } from "@/lib/shared";
import { loader } from "fumadocs-core/source";
import { pageSchema } from "fumadocs-core/source/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    async: true,
    postprocess: { includeProcessedMarkdown: true },
  },
});

export const blog = defineDocs({
  dir: "content/blog",
  docs: {
    async: true,
    schema: pageSchema.extend({
      date: z.iso.date(),
      author: z.string(),
    }),
  },
});

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: docsRoute,
});

export const blogSource = loader({
  source: blog.toFumadocsSource(),
  baseUrl: blogRoute,
});

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];
  return {
    segments,
    url: "/" + [page.locale, ...docsContentRoute.split("/"), ...segments].filter(Boolean).join("/"),
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const document = docs.getPage(page.path);
  if (!document) throw new Error(`Unknown docs page: ${page.path}`);

  const processed = await document.getText("processed");
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}
