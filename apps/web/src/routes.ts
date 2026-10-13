import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("blog", "routes/blog-index.tsx"),
    route("blog/*", "routes/blog-post.tsx"),
    route("dashboard/*", "routes/dashboard.tsx"),
  ]),
  route("docs/*", "routes/docs.tsx"),
  route("_search", "routes/search.ts"),
  route("llms.txt", "llms/index.ts"),
  route("llms-full.txt", "llms/full.ts"),
  route("llms.mdx/docs/*", "llms/mdx.ts"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
