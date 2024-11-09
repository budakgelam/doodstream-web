import type { MetadataRoute } from 'next'

const serverUrl = 'https://hijabcolmek-dsf.pages.dev/'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '${serverUrl}',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: '${serverUrl}/v/${video.file_code}',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }, 
  ]
}
