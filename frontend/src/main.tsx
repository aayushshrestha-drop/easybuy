
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { authenticatePi } from "./app/utils/pi-sdk.ts";

  // Declare Pi globally to avoid TypeScript errors
  declare global {
    interface Window {
      Pi: any;
    }
  }

  // Authenticate user with Pi SDK
  const authenticatePiUser = async () => {
    try {
      const authResults = await authenticatePi();
      if (authResults) {
        console.log("Pi Authentication successful:", authResults);
        alert(`Authenticated as ${authResults.user.username}`);
      }
    } catch (err: any) {
      console.error("Pi Authentication failed:", err);
      alert("Auth Error: " + (err?.message || JSON.stringify(err)));
    }
  };

  authenticatePiUser();

  createRoot(document.getElementById("root")!).render(<App />);
  