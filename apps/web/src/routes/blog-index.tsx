import { formatDate } from "@/lib/date";
import { blog, blogSource } from "@/lib/source";
import { Link } from "react-router";

import type { Route } from "./+types/blog-index";

export function loader() {
  return {
    posts: blogSource
      .getPages()
      .map((page) => {
        const post = blog.getPage(page.path);
        if (!post) throw new Error(`Unknown blog post: ${page.path}`);

        return {
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
          url: page.url,
        };
      })
      .sort((left, right) => right.date.localeCompare(left.date)),
  };
}

export function meta() {
  return [
    { title: "Blog | React Router application" },
    { name: "description", content: "Articles from the unified React Router template" },
  ];
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <h1 className="page-heading">Blog</h1>
      <p className="page-description">Typed MDX posts, rendered to static HTML.</p>
      <div className="blog-list">
        {loaderData.posts.map((post) => (
          <article key={post.url} className="blog-entry">
            <div className="blog-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author ? ` · ${post.author}` : null}
            </div>
            <h2 className="blog-title">
              <Link className="hover:underline" to={post.url}>
                {post.title}
              </Link>
            </h2>
            <p className="page-description">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
