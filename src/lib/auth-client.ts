import { createAuthClient } from "better-auth/react";
// NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1

// http://localhost:5000/api/v1/auth/login
/* export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",

  basePath: "/api/auth",

  fetchOptions: {
    credentials: "include",
  },
}); */

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
