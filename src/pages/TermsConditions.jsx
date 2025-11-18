import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <>
      <Navbar />

      <main className="p-10 max-w-5xl mx-auto min-h-[70vh]">
        <h1 className="text-3xl mt-10 font-bold mb-6">Terms & Conditions</h1>

        <p className="text-gray-700 mb-6">
          Welcome to <strong>PDF Academy</strong>. By accessing our website and purchasing
          our digital products, you agree to follow the terms listed below. These
          conditions ensure a fair and secure experience for both users and our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By using our website, you confirm that you have read, understood, and agree
          to these Terms & Conditions. If you do not agree, you should stop using the
          website immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Digital Products</h2>
        <p className="text-gray-700 mb-4">
          All products offered on our website are digital files, including PDFs, notes,
          question banks, interview kits, and learning materials. Since these are
          downloadable goods, no physical delivery is involved.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. License & Usage Rights</h2>
        <p className="text-gray-700 mb-4">
          When you purchase a product, you receive a personal, non-transferable,
          single-user license. You are not allowed to:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Resell or distribute the PDFs</li>
          <li>Share them publicly or privately</li>
          <li>Upload them to social media or third-party websites</li>
          <li>Use the content for commercial purposes</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Violation of usage rights may lead to cancellation of access and legal action.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
        <p className="text-gray-700 mb-4">
          All payments made on our website are final. You agree to provide accurate
          billing information during checkout. Once payment is completed, the digital
          product will be delivered instantly to your email or download page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Policy</h2>
        <p className="text-gray-700 mb-4">
          Refunds are only applicable in special cases such as duplicate payments,
          wrong files delivered, or technical issues where the product cannot be
          accessed. For detailed terms, refer to our Refund Policy page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          You agree to use our website legally and responsibly. You must not:
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Attempt to hack or damage the website</li>
          <li>Engage in unauthorized sharing of purchased files</li>
          <li>Misrepresent your identity during purchase</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All product content, branding, graphics, text, and PDFs belong to PDF Academy.
          Unauthorized reproduction is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications to Service</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update, modify, or remove products, prices, or features
          without prior notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          PDF Academy is not responsible for damages caused by misuse of our products,
          unauthorized sharing, or technical issues unrelated to our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
        <p className="text-gray-700 mb-2">
          For any questions or support, reach out to us:
        </p>

        <p className="text-gray-700 mb-4">
          📩 <strong>Email:</strong> support@pdfacademy.com
        </p>

        <p className="text-gray-700">
          We aim to reply within 12–24 hours.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default TermsConditions;
