import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { HREF_HEADER_KEY } from '@/shared/config/keys'

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set(HREF_HEADER_KEY, request.nextUrl.href)
  return NextResponse.next({ headers })
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
