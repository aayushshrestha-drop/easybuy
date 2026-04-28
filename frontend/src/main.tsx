
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Declare Pi globally to avoid TypeScript errors
  declare global {
    interface Window {
      Pi: any;
    }
  }

  // Authenticate user with Pi SDK
  const authenticatePiUser = async () => {
    try {
      if (window.Pi) {
        const scopes = ['username', 'payments'];
        
        // Read more about this callback in the Pi Network Developer Documentation
        function onIncompletePaymentFound(payment: any) {
          console.log("Incomplete payment found", payment);
        }

        const authResults = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
        console.log("Pi Authentication successful:", authResults);
      } else {
        console.warn("Pi SDK not found. Make sure you are running in the Pi Browser.");
      }
    } catch (err) {
      console.error("Pi Authentication failed:", err);
    }
  };

  authenticatePiUser();

  createRoot(document.getElementById("root")!).render(<App />);
  