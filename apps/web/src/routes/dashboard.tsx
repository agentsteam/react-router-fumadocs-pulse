import { Card } from "@/components/ui/card";
export function meta() {
  return [{ title: "Dashboard | React Router template" }];
}

export default function Dashboard() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell">
      <Card className="dashboard-intro">
        <h1 className="page-heading">Dashboard</h1>
        <p className="page-description">
          CSR route served through React Router's generic SPA fallback.
        </p>
      </Card>
    </main>
  );
}
