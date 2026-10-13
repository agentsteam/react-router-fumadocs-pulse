import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex min-h-48 items-center justify-center" role="status">
      <Loader2 className="size-5 animate-spin" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
