import { cookies } from "next/headers";

export default async function AuthCheck() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  const isAuthenticated = !!accessToken && !!refreshToken;

  return { isAuthenticated, accessToken, refreshToken };
}
