import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shaheensafi.blog';
  const currentDate = new Date();

  const routes = [
    '',
    '/en',
    '/fa',
    '/en/about',
    '/fa/about',
    '/en/services',
    '/fa/services',
    '/en/victories',
    '/fa/victories',
    '/en/cv',
    '/fa/cv',
    '/en/blog',
    '/fa/blog',
    '/en/privacy',
    '/fa/privacy',
    '/en/terms',
    '/fa/terms',
    '/en/blog/the-safi-legacy',
    '/fa/blog/the-safi-legacy',
    '/en/blog/fintech-afghanistan-future',
    '/fa/blog/fintech-afghanistan-future',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route.includes('/blog') ? 'weekly' : route.includes('/privacy') || route.includes('/terms') ? 'monthly' : 'daily',
    priority: route === '' || route === '/en' || route === '/fa' ? 1.0 : route.includes('/privacy') || route.includes('/terms') ? 0.9 : 0.8,
  }));
}