import { buttonVariants } from "@/components/ui/button";
import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";

export function meta() {
  return [{ title: "Not Found | hyperapp-build-ssg-app" }];
}

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 flex-col items-center justify-center p-4 text-center"
      >
        <h1 className="page-heading">Not found</h1>
        <p className="mt-2 text-muted-foreground">This page could not be found.</p>
        <Link className={buttonVariants({ className: "return-home mt-5" })} to="/">
          Back home
        </Link>
      </main>
    </HomeLayout>
  );
}
