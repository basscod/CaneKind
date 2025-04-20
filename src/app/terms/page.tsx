import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import Link from 'next/link';

const TermsPage = () => {
  const lastUpdatedDate = "October 26, 2024"; // Update this date
  const companyName = "CaneKind";
  const websiteUrl = "https://www.canekind.co.uk"; // Replace with actual URL if different
  const contactEmail = "hello@canekind.co.uk";
  const contactPageUrl = "/contact"; // Assuming a contact page exists
  const governingLawCountry = "United Kingdom";
  const companyAddress = {
    line1: "123 Juice Street",
    city: "London",
    zip: "WC2N 5DU", // Example Postcode
    country: "United Kingdom"
  };

  return (
    <PageLayout>
      {/* Full-width background wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] to-white">
        {/* Container for content */}
        <div className="container mx-auto px-4 py-24 pt-32 md:pt-40">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-sugarcane-brown mb-16">Terms & Conditions</h1>
          <div className="max-w-4xl mx-auto space-y-8 glass-card bg-white/15 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-lg border border-white/20 text-text-primary leading-relaxed">
            <p className="italic text-sm text-text-secondary">Last updated: {lastUpdatedDate}</p>

            <p>Welcome to CaneKind! Please read these Terms and Conditions ("Terms") carefully before using the <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sugarcane-yellow hover:underline">{websiteUrl}</a> website (the "Service") operated by <strong>{companyName}</strong> ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, customers, and others who access or use the Service.</p>

            <p><strong>By accessing or using the Service, including purchasing products, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</strong></p>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">1. Use of the Service</h2>
              <p>You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our Service.</p>
              <p>You must be at least 18 years old to purchase products from this Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">2. Accounts</h2>
              <p>If you create an account on our Service, you must provide information that is accurate, complete, and current. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.</p>
              <p>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">3. Products and Orders</h2>
              <p>All orders placed through the Service are subject to acceptance and availability. We reserve the right to refuse or cancel an order for any reason, including limitations on quantities available for purchase, inaccuracies, or errors in product or pricing information, or problems identified by our credit and fraud avoidance department.</p>
              <p>Product prices and descriptions are subject to change without notice. We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
              <p>Risk of loss and title for items purchased pass to you upon our delivery to the carrier.</p>
              {/* Add specific sections about Returns/Refunds if applicable */}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">4. Intellectual Property</h2>
              <p>The Service and its original content (including text, graphics, logos, images, as well as the compilation thereof), features, and functionality are and will remain the exclusive property of {companyName} and its licensors. The Service is protected by copyright, trademark, and other laws of the {governingLawCountry} and foreign countries.</p>
              <p>Our trademarks (including the CaneKind name and logo) and trade dress may not be used in connection with any product or service without the prior written consent of {companyName}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">5. Links To Other Web Sites</h2>
              <p>Our Service may contain links to third-party websites or services that are not owned or controlled by {companyName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
              <p>You acknowledge and agree that {companyName} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">6. Termination</h2>
              <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
              <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">7. Limitation Of Liability</h2>
              <p>In no event shall {companyName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service, any conduct or content of any third party on the Service, any content obtained from the Service, or unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">8. Disclaimer</h2>
              <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
              <p>{companyName} does not warrant that the Service will function uninterrupted, secure, or available at any particular time or location; that any errors or defects will be corrected; or that the results of using the Service will meet your requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">9. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of {governingLawCountry}, without regard to its conflict of law provisions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">10. Changes</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>By email: <a href={`mailto:${contactEmail}`} className="text-sugarcane-yellow hover:underline">{contactEmail}</a></li>
                <li>By visiting our Contact page: <Link href={contactPageUrl} className="text-sugarcane-yellow hover:underline">{websiteUrl}{contactPageUrl}</Link></li>
                <li>By mail: {companyAddress.line1}, {companyAddress.city}, {companyAddress.zip}, {companyAddress.country}</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsPage; 