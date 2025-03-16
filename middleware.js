import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Create base Clerk middleware - only handles auth, no route protection
export default clerkMiddleware((auth, req) => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
