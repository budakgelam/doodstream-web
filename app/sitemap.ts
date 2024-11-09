const rootUrl = "http://localhost:3000"

const blogPosts = blogPostEntries.map((entry: TransformedEntry) => ({
      url: `${rootUrl}/v/${entry.id}`,
      lastModified: entry.updatedAt,
    }))

const routes = ["/", "/v"].map((route) => ({
      url: `${rootUrl}${route}`,
      lastModified: new Date().toISOString(),
    }));

return [...routes, ...blogPosts];
