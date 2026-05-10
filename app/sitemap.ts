import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://prakhartri.me',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
