import type { Config } from "@react-router/dev/config";
import { glob } from "node:fs/promises";
import { createGetUrl, getSlugs } from "fumadocs-core/source";

const getDocsUrl = createGetUrl("/docs");
const getBlogUrl = createGetUrl("/blog");

export default {
  appDirectory: "src",
  ssr: false,
  routeDiscovery: { mode: "initial" },
  async prerender({ getStaticPaths }) {
    const paths = getStaticPaths().filter(
      (path) => path !== "/dashboard" && !path.startsWith("/dashboard/"),
    );
    for await (const entry of glob("**/*.mdx", { cwd: "content/docs" })) {
      const slugs = getSlugs(entry);
      paths.push(getDocsUrl(slugs), `/llms.mdx/docs/${[...slugs, "content.md"].join("/")}`);
    }
    for await (const entry of glob("**/*.mdx", { cwd: "content/blog" })) {
      paths.push(getBlogUrl(getSlugs(entry)));
    }
    return [...new Set(paths)];
  },
} satisfies Config;
