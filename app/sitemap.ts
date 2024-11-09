import type { MetadataRoute } from 'next'

const serverUrl = 'http://localhost:3000'

export default async function sitemap(): MetadataRoute.Sitemap {
  const { docs: pages } = await fetch(`${serverUrl}/api/pages?limit=0`).then((res) => res.json())

  const { docs: posts } = await fetch(`${serverUrl}/api/posts?limit=0`).then((res) =>
    res.json(),
  )

  const sitemap: MetadataRoute.Sitemap = []

  for (const page of pages) {
    sitemap.push({
      changeFrequency: 'daily',
      lastModified: page.updatedAt,
      priority: 1,
      url: `${serverUrl}/${page.slug === 'home' ? '' : page.slug}`,
    })
  }

  for (const post of posts) {
    sitemap.push({
      changeFrequency: 'daily',
      lastModified: post.updatedAt,
      priority: 1,
      url: `${serverUrl}/v/${post.slug}`,
    })
  }

  return sitemap
}
