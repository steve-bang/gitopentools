
import { defaultSEO } from '@/lib/seo.config';
import { LINK_MAP } from '@/linkMap';
import { MetadataRoute } from 'next'

export interface RouteMap {
  path: string;
  date: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {

  const staticRoutes: RouteMap[] = [
    {
      path: '',
      date: new Date('2025-05-01'),
    },
    {
      path: LINK_MAP.tools.textConverter,
      date: new Date('2025-05-01'),
    },
    {
      path: LINK_MAP.tools.textEscape,
      date: new Date('2025-05-01'),
    },
    {
      path: LINK_MAP.tools.formatters.json,
      date: new Date('2025-08-29'),
    },
    {
      path: LINK_MAP.tools.formatters.sql,
      date: new Date('2025-08-31'),
    },
    {
      path: LINK_MAP.tools.testers.regex,
      date: new Date('2026-01-09'),
    },
    {
      path: LINK_MAP.tools.testers.urlChecker,
      date: new Date('2026-01-09'),
    },
    {
      path: LINK_MAP.tools.generators.password,
      date: new Date('2026-01-10'),
    },
    {
      path: LINK_MAP.tools.generators.uuid,
      date: new Date('2026-01-10'),
    },

  ]

  const routes: RouteMap[] = [
    ...staticRoutes,
  ]

  // Add your static routes
  return routes.map((route) => ({
    url: `${defaultSEO.baseUrl}${route.path}`,
    lastModified: route.date,
    changeFrequency: 'yearly',
    priority: route.path === '' ? 1 : 0.8,
  }))

} 