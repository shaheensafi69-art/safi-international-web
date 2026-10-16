import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // مسیرهای سیستمی و فایل‌های استاتیک نباید ریدایرکت شوند
  if (
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/ads.txt' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // چک کردن اینکه آیا لوکال در مسیر وجود ندارد
  // استفاده از (locale: string) برای رفع ابهام تایپ‌اسکریپت
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: string) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // اگر لوکال نبود، مستقیماً به نسخه انگلیسی ریدایرکت کن
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/en${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // مچر پیشرفته برای استثنا کردن مسیرهای سیستمی، فایل‌های استاتیک و سئو
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ads.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)',
  ],
};