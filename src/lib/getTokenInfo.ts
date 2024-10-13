// import jwt from "jsonwebtoken";
// import { NextRequest } from "next/server";
// export default async function getTokenInfo(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;

import { NextApiRequest, NextApiResponse } from "next";

//   if (!accessToken) return null;

//   return jwt.decode(accessToken);
// }

// import cookies from "js-cookie";
// import nookies from "nookies";
// import api from "./api";

// const getJWTToken = () => {
//   const token = cookies.get("refresh_token"); // Get all cookies
//   // const token = cookies.access_token; // Get the access token  console.log("token backend", token);
//   console.log("token frontend", token);
//   // const tokenData = api.post("/auth/user-data");
// };

// export default getJWTToken;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const cookies = req.cookies.access_token;
  console.log("cookies frontend", cookies);

  res.status(200).json({ message: "Hello from Next.js!" });
}
