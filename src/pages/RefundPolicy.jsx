import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="p-10 max-w-5xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl mt-10 font-bold mb-6">Refund Policy</h1>

        <p className="text-gray-700 mb-6">
          At <strong>PDF Academy</strong>, we aim to provide high-quality digital notes,
          interview kits, cheat sheets, and learning materials. Since these products
          are delivered instantly after payment, we follow a transparent and fair
          refund process.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Digital Product Refunds</h2>
        <p className="text-gray-700 mb-4">
          All our products are digital and delivered via email or instant download.
          Due to the nature of downloadable content, <strong>we do not offer refunds</strong> once
          the file has been delivered.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Incorrect or Broken File</h2>
        <p className="text-gray-700 mb-4">
          If your PDF file is:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Not opening</li>
          <li>Incomplete</li>
          <li>Corrupted</li>
          <li>Wrong product delivered</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Then you are eligible for a **free replacement**. We will resend the correct
          file within 24 hours after verification.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Duplicate Payments</h2>
        <p className="text-gray-700 mb-4">
          If you accidentally made **double or multiple payments**, we will provide a
          full refund for the extra amount after confirming the transaction ID.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Failed Payments</h2>
        <p className="text-gray-700 mb-4">
          If money was deducted but you did not receive your product, your payment
          will be:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Automatically refunded by your bank/payment gateway</li>
          <li>Or we will manually send the PDF after confirmation</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Eligibility for Refund</h2>
        <p className="text-gray-700 mb-4">
          A refund is provided only in valid cases such as:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Duplicate payment</li>
          <li>Wrong PDF sent by us</li>
          <li>Payment deducted but PDF not received</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Refund requests must be made within <strong>48 hours of purchase</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact for Support</h2>
        <p className="text-gray-700 mb-2">
          For refund or support, contact us:
        </p>

        <p className="text-gray-700 mb-4">
          📩 <strong>Email:</strong> support@pdfacademy.com  
        </p>

        <p className="text-gray-700">
          We aim to reply to all queries within <strong>12–24 hours</strong>.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default RefundPolicy;
