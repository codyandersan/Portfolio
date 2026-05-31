import { MetadataRoute } from 'next'
import { getAllPostsMeta } from '@/lib/mdx'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPostsMeta()

  const blogRoutes = posts.map((post) => ({
    url: `https://prakhartri.me/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }))

  const staticRoutes = [
    {
      url: 'https://prakhartri.me',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://prakhartri.me/blog',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return [...staticRoutes, ...blogRoutes]
}
