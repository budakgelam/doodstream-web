import type { MetadataRoute } from 'next'
 
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
