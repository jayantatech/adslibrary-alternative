import { cookies } from "next/headers";
import ExtAuthClient from "./ExtAuthClient";

async function getTokens() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  return { accessToken, refreshToken };
}

export default async function ExtAuth() {
  const { accessToken, refreshToken } = await getTokens();

  return (
    <ExtAuthClient accessToken={accessToken} refreshToken={refreshToken} />
  );
}
