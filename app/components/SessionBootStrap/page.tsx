"use client";

import { useEffect } from "react";

// Import tokenManager dynamically inside the hook to avoid SSR issues
export default function TokenManagerBootstrap() {
  useEffect(() => {
    // Only run in browser
    import("@/utils/sessionManager").then(({ default: tokenManager }) => {
      tokenManager.start();
    });
  }, []);

  return null;
}
