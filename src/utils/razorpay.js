// Small helper to check Razorpay availability
export function isRazorpayAvailable() {
  return typeof window !== "undefined" && !!window.Razorpay;
}

export function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (isRazorpayAvailable()) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Razorpay script failed to load"));
    document.body.appendChild(script);
  });
}
