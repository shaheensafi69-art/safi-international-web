import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shaheensafi.blog';
  const currentDate = new Date();

  const blogSlugs = [
    '5g-ecommerce-impact',
    'ai-wealth-management',
    'blockchain-utility',
    'business-data-analytics',
    'coding-fintech-ai',
    'digital-luxury-branding',
    'digital-nomad-freedom',
    'entrepreneur-performance',
    'europe-tech-networking',
    'fintech-afghanistan-future',
    'fintech-app-architecture',
    'fintech-cx-design',
    'fintech-cybersecurity',
    'global-credit-transfer',
    'global-remote-team',
    'how-to-start-shopify-business',
    'leadership-eq',
    'market-risk-management',
    'mobile-payments-evolution',
    'neobanks-revolution',
    'payment-regulations-guide',
    'startup-growth-hacking',
    'super-apps-asia',
    'sustainable-investing',
    'tech-ceo-branding',
    'the-journey-of-safi',
    'the-safi-legacy',
    'trading-psychology',
    'vc-outreach-strategy',
  ];

  const mainPages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/services', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/victories', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/cv', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/privacy', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/terms', priority: 0.5, changeFreq: 'yearly' as const },
  ];

  const sitemapItems: MetadataRoute.Sitemap = [];

  // صفحات اصلی به تفکیک زبان همراه با تگ‌های چندزبانه alternates
  for (const page of mainPages) {
    const enUrl = `${baseUrl}/en${page.path}`;
    const faUrl = `${baseUrl}/fa${page.path}`;

    sitemapItems.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          en: enUrl,
          fa: faUrl,
        },
      },
    });

    sitemapItems.push({
      url: faUrl,
      lastModified: currentDate,
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          en: enUrl,
          fa: faUrl,
        },
      },
    });
  }

  // اضافه کردن تمامی مقالات بلاگ
  for (const slug of blogSlugs) {
    const enUrl = `${baseUrl}/en/blog/${slug}`;
    const faUrl = `${baseUrl}/fa/blog/${slug}`;

    sitemapItems.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: enUrl,
          fa: faUrl,
        },
      },
    });

    // اضافه کردن نسخه فارسی (مقالاتی که در هر دو زبان در دسترس هستند)
    sitemapItems.push({
      url: faUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: enUrl,
          fa: faUrl,
        },
      },
    });
  }

  return sitemapItems;
}