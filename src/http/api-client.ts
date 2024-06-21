import { getCookie } from "cookies-next";
import { CookiesFn } from "cookies-next/lib/types";
import ky from "ky";

export const api = ky.create({
  prefixUrl: "http://192.168.20.149:8000/api/",
  hooks: {
    beforeRequest: [
      async request => {
        let cookieStore: CookiesFn | undefined;

        if (typeof window === "undefined") {
          const { cookies: serverCookies } = await import("next/headers");

          cookieStore = serverCookies;
        }
        const token = getCookie("access_token", { cookies: cookieStore });

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});
