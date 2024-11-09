import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: '/v/${video.file_code',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
