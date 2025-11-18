import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { loadRazorpayScript } from "../utils/razorpay";

const CheckoutPopup = ({ plan, close }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_API_URL || "";
  const RZP_KEY = import.meta.env.VITE_RAZORPAY_KEY || "";

  const isValidEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const handlePay = async () => {
    if (!email) return alert("Email is required!");
    if (!isValidEmail(email)) return alert("Enter a valid email!");

    setLoading(true);

    try {
      console.log("Creating order...");

      if (!BACKEND_URL) {
        alert("Backend URL not configured. Set VITE_API_URL in .env");
        setLoading(false);
        return;
      }

      const orderRes = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(plan.price) }),
      });

      if (!orderRes.ok) {
        const text = await orderRes.text().catch(() => "");
        console.error("Order creation failed status:", orderRes.status, text);
        alert("Order creation failed — backend issue.");
        setLoading(false);
        return;
      }

      const orderData = await orderRes.json().catch((e) => {
        console.error("Invalid JSON from order endpoint:", e);
        return null;
      });
      console.log("ORDER RESPONSE:", orderData);

      if (!orderData || !orderData.success) {
        console.error("Order response invalid:", orderData);
        alert("Order creation failed — backend issue.");
        setLoading(false);
        return;
      }

      if (!orderData.order || !orderData.order.id) {
        console.error("Order object missing or invalid:", orderData.order);
        alert("Order missing ID — backend issue.");
        setLoading(false);
        return;
      }

      // Ensure Razorpay SDK available (try loading dynamically)
      if (!window.Razorpay) {
        try {
          await loadRazorpayScript();
        } catch (err) {
          console.error("Razorpay script load failed:", err);
          alert("Razorpay SDK failed to load. Check internet.");
          setLoading(false);
          return;
        }
      }

      const options = {
        key: RZP_KEY,
        amount: orderData.order.amount,
        currency: "INR",
        name: "PDF Store",
        description: plan.name,
        order_id: orderData.order.id,

        handler: async function (response) {
          console.log("Payment success raw response:", response);

          try {
            const verifyRes = await fetch(`${BACKEND_URL}/api/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email,
                name: name || "Customer",
                pdfFile: plan.pdfFile,
              }),
            });
            if (!verifyRes.ok) {
              const text = await verifyRes.text().catch(() => "");
              console.error("Verify failed status:", verifyRes.status, text);
              alert("Payment verification failed — backend error.");
              return;
            }

            const verifyData = await verifyRes.json();
            console.log("VERIFY RESPONSE:", verifyData);

            if (verifyData.success) {
              alert("🎉 Payment Successful! Check your email.");
              close();
            } else {
              alert("Payment verification failed.");
            }
          } catch (err) {
            console.error("Verify error:", err);
            alert("Verification failed — check console.");
          }
        },

        prefill: {
          name: name || "",
          email: email || "",
        },

        theme: { color: "#6b46c1" },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
        alert("Payment failed — check console.");
      });

      rzp.open();
    } catch (err) {
      console.error("handlePay error:", err);
      alert("Something went wrong — check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden relative">

        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl hover:opacity-70"
          onClick={close}
        >
          <IoClose />
        </button>

        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <h2 className="text-2xl font-bold">✨ Complete Your Purchase</h2>
          <p className="text-sm opacity-90">
            You are buying: <b>{plan.name}</b>
          </p>

          <div className="mt-4 bg-white bg-opacity-20 p-4 rounded-xl text-black">
            <p className="text-lg font-bold text-center">₹{plan.price}</p>
             
          </div>
          
        </div>

        {/* Form */}
        <div className="p-6 space-y-5 bg-white">
         
          <div>
          <label className="font-semibold text-sm">Email *</label>

            <div className="relative mt-1">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                className="w-full pl-12 pr-4 py-3 border rounded-xl"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-sm">Name (optional)</label>
            <div className="relative mt-1">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 border rounded-xl"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={loading}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
          >
            {loading ? "Processing..." : `Pay ₹${plan.price}`}
          </button>

          <p className="text-center text-xs text-gray-500">
            🔒 100% secure payment via Razorpay
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopup;
