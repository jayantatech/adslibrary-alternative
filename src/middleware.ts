// // old and working code

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import axios from "axios";
// import api from "./lib/api";

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;
//   const refreshToken = request.cookies.get("refresh_token")?.value;

//   console.log("accessToken", accessToken, "refreshToken", refreshToken);

//   // Check if the route is login or register
//   const isAuthRoute =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/register" ||
//     request.nextUrl.pathname === "/email-verification-request";

//   // If user has both tokens and tries to access login or register, redirect to /panel/myAds
//   if (isAuthRoute && accessToken && refreshToken) {
//     return NextResponse.redirect(new URL("/panel/myAds", request.url));
//   }

//   // Check if the route starts with /panel/
//   const isPanelRoute = request.nextUrl.pathname.startsWith("/panel/");

//   // If it's not a panel route, allow the request to continue
//   if (!isPanelRoute) {
//     return NextResponse.next();
//   }

//   // If we have both tokens, allow the request to continue
//   if (accessToken && refreshToken) {
//     return NextResponse.next();
//   }

//   // If we have a refresh token but no access token, try to refresh
//   if (!accessToken && refreshToken) {
//     try {
//       const response = await api.post("/auth/refresh-token", {
//         refresh_token: refreshToken,
//       });

//       if (response.status === 200) {
//         const newResponse = NextResponse.next();

//         // Handle Set-Cookie header, which could be a string or an array
//         const setCookieHeader = response.headers["set-cookie"];
//         if (setCookieHeader) {
//           if (Array.isArray(setCookieHeader)) {
//             setCookieHeader.forEach((cookie) => {
//               newResponse.headers.append("Set-Cookie", cookie);
//             });
//           } else {
//             newResponse.headers.set("Set-Cookie", setCookieHeader);
//           }
//         }

//         return newResponse;
//       } else {
//         // If refresh failed, redirect to login
//         return NextResponse.redirect(new URL("/login", request.url));
//       }
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // If we don't have any tokens, redirect to login
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: [
//     "/panel/:path*", // This will match any route that starts with /panel/
//     "/login",
//     "/register",
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };

// // //new

//new and working code
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import api from "./lib/api";

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;
//   const refreshToken = request.cookies.get("refresh_token")?.value;

//   // console.log("accessToken", accessToken, "refreshToken", refreshToken);

//   // Check if the route is login or register
//   const isAuthRoute =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/register" ||
//     request.nextUrl.pathname === "/email-verification-request";

//   // If user has both tokens and tries to access login or register, redirect to /panel/myAds
//   if (isAuthRoute && accessToken && refreshToken) {
//     return NextResponse.redirect(new URL("/panel/myAds", request.url));
//   }

//   // Check if the route starts with /panel/
//   const isPanelRoute = request.nextUrl.pathname.startsWith("/panel/");

//   // If it's not a panel route, allow the request to continue
//   if (!isPanelRoute) {
//     return NextResponse.next();
//   }

//   // If we have both tokens, allow the request to continue
//   if (accessToken && refreshToken) {
//     return NextResponse.next();
//   }

//   // If we have a refresh token but no access token, try to refresh
//   if (!accessToken && refreshToken) {
//     try {
//       const response = await api.post("auth/refresh-token", {
//         refresh_token: refreshToken,
//       });

//       if (response.status === 200) {
//         const newResponse = NextResponse.next();

//         // Handle Set-Cookie header, which could be a string or an array
//         const setCookieHeader = response.headers["set-cookie"];
//         if (setCookieHeader) {
//           if (Array.isArray(setCookieHeader)) {
//             setCookieHeader.forEach((cookie) => {
//               newResponse.headers.append("Set-Cookie", cookie);
//             });
//           } else {
//             newResponse.headers.set("Set-Cookie", setCookieHeader);
//           }
//         }

//         return newResponse;
//       } else {
//         // If refresh failed, redirect to login
//         return NextResponse.redirect(new URL("/login", request.url));
//       }
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // If we don't have any tokens, redirect to login
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: [
//     "/panel/:path*", // This will match any route that starts with /panel/
//     "/login",
//     "/register",
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import api from "./lib/api";

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;
//   const refreshToken = request.cookies.get("refresh_token")?.value;

//   // Highlight: New check for home page
//   const isHomePage = request.nextUrl.pathname === "/";

//   // Check if the route is login or register
//   const isAuthRoute =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/register" ||
//     request.nextUrl.pathname === "/email-verification-request";

//   // If user has both tokens and tries to access login or register, redirect to /panel/myAds
//   if (isAuthRoute && accessToken && refreshToken) {
//     return NextResponse.redirect(new URL("/panel/myAds", request.url));
//   }

//   // Highlight: New logic for home page
//   if (isHomePage && refreshToken) {
//     try {
//       const response = await api.post("auth/refresh-token", {
//         refresh_token: refreshToken,
//       });

//       if (response.status === 200) {
//         const newResponse = NextResponse.next();

//         // Handle Set-Cookie header, which could be a string or an array
//         const setCookieHeader = response.headers["set-cookie"];
//         if (setCookieHeader) {
//           if (Array.isArray(setCookieHeader)) {
//             setCookieHeader.forEach((cookie) => {
//               newResponse.headers.append("Set-Cookie", cookie);
//             });
//           } else {
//             newResponse.headers.set("Set-Cookie", setCookieHeader);
//           }
//         }

//         return newResponse;
//       }
//     } catch (error) {
//       console.error("Error refreshing token on home page:", error);
//     }
//     // Continue to the home page regardless of the refresh result
//     return NextResponse.next();
//   }

//   // Check if the route starts with /panel/
//   const isPanelRoute = request.nextUrl.pathname.startsWith("/panel/");

//   // If it's not a panel route, allow the request to continue
//   if (!isPanelRoute) {
//     return NextResponse.next();
//   }

//   // If we have both tokens, allow the request to continue
//   if (accessToken && refreshToken) {
//     return NextResponse.next();
//   }

//   // If we have a refresh token but no access token, try to refresh
//   if (!accessToken && refreshToken) {
//     try {
//       const response = await api.post("auth/refresh-token", {
//         refresh_token: refreshToken,
//       });

//       if (response.status === 200) {
//         const newResponse = NextResponse.next();

//         // Handle Set-Cookie header, which could be a string or an array
//         const setCookieHeader = response.headers["set-cookie"];
//         if (setCookieHeader) {
//           if (Array.isArray(setCookieHeader)) {
//             setCookieHeader.forEach((cookie) => {
//               newResponse.headers.append("Set-Cookie", cookie);
//             });
//           } else {
//             newResponse.headers.set("Set-Cookie", setCookieHeader);
//           }
//         }

//         return newResponse;
//       } else {
//         // If refresh failed, redirect to login
//         return NextResponse.redirect(new URL("/login", request.url));
//       }
//     } catch (error) {
//       console.error("Error refreshing token:", error);
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   // If we don't have any tokens, redirect to login
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: [
//     "/panel/:path*", // This will match any route that starts with /panel/
//     "/login",
//     "/register",
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import api from "./lib/api";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // Check if the route is login or register
  const isAuthRoute =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register" ||
    request.nextUrl.pathname === "/email-verification-request";

  // If user has both tokens and tries to access login or register, redirect to /panel/myAds
  if (isAuthRoute && accessToken && refreshToken) {
    return NextResponse.redirect(new URL("/panel/myAds", request.url));
  }

  // Check if the route starts with /panel/
  const isPanelRoute = request.nextUrl.pathname.startsWith("/panel/");

  // If we have a refresh token but no access token, try to refresh for all routes
  if (!accessToken && refreshToken) {
    try {
      const response = await api.post("auth/refresh-token", {
        refresh_token: refreshToken,
      });

      if (response.status === 200) {
        const newResponse = NextResponse.next();

        // Handle Set-Cookie header, which could be a string or an array
        const setCookieHeader = response.headers["set-cookie"];
        if (setCookieHeader) {
          if (Array.isArray(setCookieHeader)) {
            setCookieHeader.forEach((cookie) => {
              newResponse.headers.append("Set-Cookie", cookie);
            });
          } else {
            newResponse.headers.set("Set-Cookie", setCookieHeader);
          }
        }

        return newResponse;
      } else if (isPanelRoute) {
        // If refresh failed and it's a panel route, redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      if (isPanelRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  // For panel routes, if we don't have any tokens, redirect to login
  if (isPanelRoute && !accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // For all other routes, allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/panel/:path*", // This will match any route that starts with /panel/
    "/login",
    "/register",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
