
export const initPiSDK = async () => {
  if (window.Pi) {
    try {
      await window.Pi.init({ version: "2.0", sandbox: true });
      console.log("Pi SDK Initialized successfully");
      return true;
    } catch (err: any) {
      if (err?.message?.includes("already initialized")) {
        console.log("Pi SDK was already initialized");
        return true;
      }
      console.error("Pi SDK Initialization failed:", err);
      return false;
    }
  }
  return false;
};

export const authenticatePi = async () => {
  if (!window.Pi) return null;
  
  await initPiSDK();
  
  const scopes = ['username', 'payments'];
  function onIncompletePaymentFound(payment: any) {
    console.log("Incomplete payment found", payment);
  }

  return await window.Pi.authenticate(scopes, onIncompletePaymentFound);
};
