import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.pathname = "/auth/sign-in";

  cookies().delete("access_token");

  console.log("Signing out...");
  return NextResponse.redirect(redirectUrl);
}
