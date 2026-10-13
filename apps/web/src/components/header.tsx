import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { appName } from "@/lib/shared";
import { Link, NavLink } from "react-router";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/docs", label: "Docs", end: false },
  { to: "/blog", label: "Blog", end: false },
  { to: "/dashboard", label: "Dashboard", end: false },
] as const;

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand">
          {appName}
        </Link>
        <nav aria-label="Main navigation" className="site-nav">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={buttonVariants({ variant: "ghost" })}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="site-theme">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
