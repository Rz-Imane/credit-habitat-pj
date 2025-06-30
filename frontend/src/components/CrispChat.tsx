import { useEffect } from "react";

// (Optional) Add this at the top of your file for TypeScript:
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

const CRISP_WEBSITE_ID = "00cadc53-0fe1-4aed-ac60-4e6353a948a0";

const CrispChat = () => {
  useEffect(() => {
    // Only inject once
    if (window.$crisp) return;
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script); // just like the HTML script
  }, []);
  return null;
};

export default CrispChat;
