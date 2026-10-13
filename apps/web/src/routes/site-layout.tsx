import Header from "@/components/header";
import { Outlet } from "react-router";

export default function SiteLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <Outlet />
    </div>
  );
}
