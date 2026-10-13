import { getLLMText, source } from "@/lib/source";

export async function loader() {
  const pages = await Promise.all(source.getPages().map(getLLMText));
  return new Response(pages.join("\n\n"));
}
