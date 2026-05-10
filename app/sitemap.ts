import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://prakhartri.me',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
