import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, LayoutDashboard, Newspaper } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "hyperapp-build-ssg-app" },
    { name: "description", content: "React Router and Fumadocs static application" },
  ];
}

const cards = [
  {
    to: "/docs",
    title: "Documentation",
    text: "Static Fumadocs pages with search and LLM exports.",
    icon: BookOpen,
  },
  {
    to: "/blog",
    title: "Blog",
    text: "A typed MDX collection with static index and article pages.",
    icon: Newspaper,
  },
  {
    to: "/dashboard",
    title: "Dashboard",
    text: "A generic client-rendered route for interactive application UI.",
    icon: LayoutDashboard,
  },
] as const;

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-shell">
      <section className="home-intro" aria-label="Introduction">
        <div>
          <p className="home-kicker">One web app, multiple rendering modes</p>
          <h1 className="home-title">React Router and Fumadocs in one Bun workspace.</h1>
          <p className="home-description">
            Public content ships as static HTML. Dashboard routes hydrate from a focused CSR
            fallback.
          </p>
          <div className="home-actions">
            <Link to="/docs" data-slot="button" className={buttonVariants()}>
              Read docs <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/blog" data-slot="button" className={buttonVariants({ variant: "outline" })}>
              Browse blog <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <Card className="code-panel" role="figure" aria-label="Rendering model">
          <div className="code-caption">Rendering model</div>
          <pre>
            <code>{`export const rendering = {
  docs: "ssg",
  dashboard: "csr",
};`}</code>
          </pre>
        </Card>
      </section>
      <div className="destination-grid">
        {cards.map(({ to, title, text, icon: Icon }) => (
          <Link key={to} to={to} className="destination-link">
            <Card className="destination">
              <Icon size={22} strokeWidth={1.5} className="destination-icon" aria-hidden="true" />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <ArrowRight size={18} className="destination-arrow" aria-hidden="true" />
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
