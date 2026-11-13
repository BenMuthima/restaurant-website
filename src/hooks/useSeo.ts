import { useEffect } from "react";
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Ember & Oak`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  }, [title, description]);
}
