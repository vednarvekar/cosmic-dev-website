import { useEffect } from 'react';
import { site } from '@/data/site';

type PageMeta = {
  title?: string; // full <title>; defaults to the site title
  description?: string;
  path?: string; // canonical path, e.g. "/"
  noindex?: boolean; // keep thin or error pages out of search results
};

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

/** Keeps <title>, description, canonical, Open Graph and robots in sync with the current page. */
export function usePageMeta({ title = site.title, description = site.description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    if (path !== undefined) {
      const url = new URL(path, site.url).toString();
      setMeta('property', 'og:url', url);
      const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonical) canonical.href = url;
    }
  }, [title, description, path, noindex]);
}
