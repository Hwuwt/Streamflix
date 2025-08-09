import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();

  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set(
    'Permissions-Policy',
    [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'xr-spatial-tracking=()',
      'fullscreen=(self)',
    ].join(', ')
  );
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "frame-src https://vidsrc.to https://*.vidsrc.*",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  return res;
}

// Optional: limit this middleware to only run on watch pages
export const config = {
  matcher: ['/watch/:path*'],
};
