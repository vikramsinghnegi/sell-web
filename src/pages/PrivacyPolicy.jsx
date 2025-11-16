// src/pages/PrivacyPolicy.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="p-10 max-w-5xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl mt-10 font-bold mb-6">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <strong>PDF Academy</strong>. Your privacy is extremely
          important to us. This Privacy Policy explains how we collect, use,
          store, and safeguard your personal information when you access or
          purchase our digital notes, PDFs, and educational content.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-2">
          We collect only the minimum required information to process your order
          and provide you with a smooth experience:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Your Name</li>
          <li>Email Address (used for instant delivery)</li>
          <li>Phone Number (optional for support)</li>
          <li>
            Payment Details (processed securely by payment partners, NOT stored
            by us)
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-2">We use your data to:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Deliver the PDFs and digital notes you purchase</li>
          <li>Send payment confirmations and download links</li>
          <li>Improve our content and website performance</li>
          <li>Provide customer support and handle queries</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3. Payment & Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          Payments are handled through <strong>secured payment gateways</strong>{" "}
          like Razorpay/UPI. Your banking details are <strong>never</strong>{" "}
          stored on our servers. All transactions are encrypted for safety.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4. Sharing of Information
        </h2>
        <p className="text-gray-700 mb-4">
          We respect your privacy. We <strong>never sell or share</strong> your
          personal information with any third party except:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Trusted payment partners (for processing payments only)</li>
          <li>Legal authorities (only if legally required)</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          5. Delivery of Digital Products
        </h2>
        <p className="text-gray-700 mb-4">
          After successful payment, your PDF/digital notes are delivered
          instantly via:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Email</li>
          <li>Instant download link</li>
          <li>Google Drive access (if applicable)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          You get <strong>lifetime access</strong> to all purchased content.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6. Data Storage & Protection
        </h2>
        <p className="text-gray-700 mb-4">
          We use industry-standard security practices to ensure your personal
          data is safe. Only authorized team members can access essential
          information required for support.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          7. Cookies & Analytics
        </h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to enhance your experience, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Improving website loading speed</li>
          <li>Saving preferences (like theme, login)</li>
          <li>Understanding website performance (anonymous analytics)</li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Your Rights</h2>
        <p className="text-gray-700 mb-2">You may request the following:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Deletion of your personal data</li>
          <li>Correction of inaccurate information</li>
          <li>A copy of the data we store about you</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9. Updates to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this policy from time to time. All updates will be
          posted here with a revised date.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          10. Contact Information
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions, concerns, or requests related to this
          Privacy Policy, contact us anytime:
        </p>

        <p className="text-gray-700 mb-4">
          📩 Email: <strong>support@pdfacademy.in</strong> <br />
          📞 Support Timings: <strong>Mon–Sat, 10 AM – 6 PM</strong>
        </p>

        <p className="text-gray-700 font-semibold">
          Thank you for trusting PDF Academy with your learning journey.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
