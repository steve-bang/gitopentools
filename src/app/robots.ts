import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //disallow: ['/private/', '/admin/'],
    },
    host: 'https://gitopentools.com',
    sitemap: 'https://gitopentools.com/sitemap.xml',
  }
} 