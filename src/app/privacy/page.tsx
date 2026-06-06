export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Track Pro Movers™. This Privacy Policy explains how Track Pro Services ("we," "us," or "our") 
          collects, uses, and discloses your information when you use our website and moving services.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as your name, email address, phone number, 
          and details about your move when you request a quote or book our services.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to process your 
          transactions, and to communicate with you about your move and our services.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share your information with third-party service 
          providers who assist us in operating our website or conducting our business, as long as those parties 
          agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at info@trackpromovers.com.
        </p>
      </div>
    </div>
  );
}
