import type { MetadataRoute } from 'next'
import { connectToDatabase } from '@/app/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '${process.env.NEXT_WEBSITE_URL}',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: '${process.env.NEXT_WEBSITE_URL}/v/${item.slug}',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: '${process.env.NEXT_WEBSITE_URL}/c/${item.slug}',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
