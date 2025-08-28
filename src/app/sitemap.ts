
import { PROJECT_INFO } from '@/project';
import { MetadataRoute } from 'next'

export interface RouteMap {
  path: string;
  date: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const staticRoutes: RouteMap[] = [
    {
      path: '',
      date: new Date('2025-05-01'),
    },
    {
      path: 'tools/text/converter',
      date: new Date('2025-05-01'),
    }
  ]

  const routes: RouteMap[] = [
    ...staticRoutes,
  ]

  // Add your static routes
  return routes.map((route) => ({
    url: `https://${PROJECT_INFO.domain}/${route.path}`,
    lastModified: route.date,
    priority: route.path === '' ? 1 : 0.8,
  }))

} 