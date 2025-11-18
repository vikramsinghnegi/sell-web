// Frontend helper for backend API calls
const API_URL = import.meta.env.VITE_API_URL || "https://sell-2.vercel.app";

export async function createOrder(amount) {
  const res = await fetch(`${API_URL}/api/payment/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}

export async function verifyPayment(payload) {
  const res = await fetch(`${API_URL}/api/payment/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }),
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export default {
  API_URL,
  createOrder,
  verifyPayment,
  getProducts,
};
