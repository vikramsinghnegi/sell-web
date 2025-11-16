// Frontend helper for backend API calls
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export async function createOrder(amount) {
  const res = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}

export async function verifyPayment(payload) {
  const res = await fetch(`${BACKEND_URL}/api/payment/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export default {
  BACKEND_URL,
  createOrder,
  verifyPayment,
};
