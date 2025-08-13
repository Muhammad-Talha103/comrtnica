import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/", "/registracija"];
const USER_ROUTES = [
  "/moj-racun",
  "/moji-prispevki",
  "/obletnice",
  "/pregled",
  "/pregled2",
  "/user-accounts-dashboard",
  "/potrditev-objave",
];
const FLORIST_ROUTES = ["spletna-stran", "nasi_podatki"];
const FUNERAL_ROUTES = ["spletna-stran", "nasi_podatki"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const role = request.cookies.get("role")?.value;
  const slugKey = request.cookies.get("slugKey")?.value;

  const pathParts = pathname.split("/").filter(Boolean);
  const lastSegment = pathParts.at(-1);
  const isRoleBasedRoute =
    pathname.startsWith("/c/") ||
    pathname.startsWith("/p/") ||
    pathname.startsWith("/u/");

  if (request.cookies.get("attempting-refresh")?.value === "true") {
    // Allow the request through without redirecting
    return NextResponse.next();
  }

  // If no access token but refresh token exists, attempt refresh
  if (!accessToken && refreshToken) {
    const response = NextResponse.redirect(new URL(pathname, request.url));
    response.cookies.set("attempting-refresh", "true");
    return response;
  }

  if (isRoleBasedRoute && accessToken && role && slugKey)
    return NextResponse.next();

  if (pathname === "/registracija" && accessToken && role && slugKey) {
    if (role === "Florist")
      return NextResponse.redirect(new URL(`/c/${slugKey}/menu`, request.url));
    if (role === "Funeral")
      return NextResponse.redirect(new URL(`/p/${slugKey}/menu`, request.url));
    if (role === "User")
      return NextResponse.redirect(
        new URL(`/u/${slugKey}/moj-racun`, request.url)
      );
    if (role === "SUPERADMIN")
      return NextResponse.redirect(new URL("/admin/obituaries", request.url));
  }

  if (PUBLIC_ROUTES.includes(pathname)) return NextResponse.next();
  if (!accessToken)
    return NextResponse.redirect(new URL("/registracija", request.url));

  if (pathname.startsWith("/admin") && role !== "SUPERADMIN") {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  if (USER_ROUTES.includes(pathname) && role !== "User") {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  if (
    role === "Florist" &&
    FLORIST_ROUTES.includes(lastSegment!) &&
    slugKey &&
    !isRoleBasedRoute
  ) {
    return NextResponse.redirect(
      new URL(`/c/${slugKey}/${lastSegment}`, request.url)
    );
  }

  if (
    role === "Funeral" &&
    FUNERAL_ROUTES.includes(lastSegment!) &&
    slugKey &&
    !isRoleBasedRoute
  ) {
    return NextResponse.redirect(
      new URL(`/p/${slugKey}/${lastSegment}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/registracija",
    "/moj-racun",
    "/moji-prispevki",
    "/obletnice",
    "/pregled",
    "/pregled2",
    "/user-accounts-dashboard",
    "/potrditev-objave",
    "/admin/:path*",
    "/c/:slug/:page*",
    "/p/:slug/:page*",
    "/u/:slug/:page*",
  ],
};
