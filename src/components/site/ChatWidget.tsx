import { useEffect } from "react";

/**
 * Tawk.to live chat widget placeholder.
 * Replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID with real values from tawk.to.
 * Can be swapped for Chatbase or a custom AI bot later.
 */
const TAWK_PROPERTY_ID = ""; // e.g. "60a1b2c3d4e5f6..."
const TAWK_WIDGET_ID = "default";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      toggle?: () => void;
    };
  }
}

/** Open Tawk.to chat if loaded, else fall back to WhatsApp. */
export const openLiveChat = () => {
  if (typeof window === "undefined") return;
  if (window.Tawk_API?.maximize) {
    try {
      window.Tawk_API.maximize();
      return;
    } catch {
      /* fallthrough */
    }
  }
  // Fallback while Tawk.to is not configured yet
  window.open(
    "https://wa.me/8801885361052?text=Hi%20Nitrox%20Chat%2C%20I%20have%20a%20quick%20question.",
    "_blank",
    "noopener,noreferrer",
  );
};

export const ChatWidget = () => {
  useEffect(() => {
    if (!TAWK_PROPERTY_ID) return; // skip until configured
    if (document.getElementById("tawk-script")) return;
    const s = document.createElement("script");
    s.id = "tawk-script";
    s.async = true;
    s.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.body.appendChild(s);
  }, []);
  return null;
};