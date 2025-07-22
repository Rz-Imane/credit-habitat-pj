import { useEffect } from "react";

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

const CRISP_WEBSITE_ID = "f28fd795-cc03-49a1-af5b-97ec81018b88"; // Assure-toi d'utiliser le bon ID ici

const CrispChat = () => {
  useEffect(() => {
    if (window.$crisp) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default CrispChat;
