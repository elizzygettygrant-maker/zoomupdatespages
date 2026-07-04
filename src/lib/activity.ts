import { supabase } from "@/integrations/supabase/client";

export async function logActivity(event: string, details?: Record<string, unknown>) {
  try {
    await supabase.functions.invoke("log-activity", {
      body: {
        event,
        details: {
          ...details,
          url: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          platform: typeof navigator !== "undefined" ? navigator.platform : "",
          language: typeof navigator !== "undefined" ? navigator.language : "",
          screen:
            typeof window !== "undefined"
              ? `${window.screen.width}x${window.screen.height}`
              : "",
        },
      },
    });
  } catch (e) {
    // silent
    console.debug("logActivity failed", e);
  }
}

export function isWindows(): boolean {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  // Exclude Windows Phone (mobile)
  if (/Windows Phone/i.test(ua)) return false;
  return /Windows NT/i.test(ua) || /Win32|Win64|WinCE/i.test(platform);
}
