"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Build the full URL including query params
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      
      // Send a custom navigation event
      sendGAEvent({ 
        event: "route_change", 
        page_path: url,
        page_title: document.title 
      });
      
      console.log(`GA Tracked Route: ${url}`);
    }
  }, [pathname, searchParams]);

  return null;
}
