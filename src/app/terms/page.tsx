export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Terms of Service</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using the services provided by Track Pro Movers™, a Track Pro Services company, 
          you agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">2. Services</h2>
        <p className="mb-4">
          Track Pro Movers™ provides residential and commercial moving services, packing, and related logistics. 
          All quotes provided online are estimates and subject to change based on actual inventory and access conditions.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">3. User Responsibilities</h2>
        <p className="mb-4">
          You agree to provide accurate information when requesting quotes or booking services and to ensure 
          that your premises are ready and accessible for our team on the scheduled service date.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">4. Liability</h2>
        <p className="mb-4">
          While we take the utmost care with your belongings, Track Pro Services is fully insured and licensed. 
          Our liability for loss or damage is outlined in our formal moving contract provided at the time of booking.
        </p>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding these terms, please reach out to info@trackpromovers.com.
        </p>
      </div>
    </div>
  );
}
