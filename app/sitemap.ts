import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hijabcolmek-dsf.pages.dev/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hijabcolmek-dsf.pages.dev/v/${video.file_code}',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }, 
  ]
}
