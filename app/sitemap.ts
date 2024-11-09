import type { MetadataRoute } from 'next'
 import { BASE_URL } from '@/app/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '${BASE_URL}',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: '${BASE_URL}/v/${video.file_code',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
