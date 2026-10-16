import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Applebot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://shaheensafi.blog/sitemap.xml',
  };
}
