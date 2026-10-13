import { appName, gitConfig } from "@/lib/shared";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: appName },
    links: [
      { text: "Blog", url: "/blog" },
      { text: "Dashboard", url: "/dashboard" },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
