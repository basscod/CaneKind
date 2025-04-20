import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const lastUpdatedDate = "October 26, 2024"; // Update this date
  const companyName = "CaneKind";
  const websiteUrl = "https://www.canekind.co.uk"; // Replace with actual URL if different
  const contactEmail = "hello@canekind.co.uk";
  const companyAddress = {
    line1: "123 Juice Street",
    line2: "", // Optional
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-sugarcane-brown mb-16">Privacy Policy</h1>
          <div className="max-w-4xl mx-auto space-y-8 glass-card bg-white/15 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-lg border border-white/20 text-text-primary leading-relaxed">
            <p className="italic text-sm text-text-secondary">Last updated: {lastUpdatedDate}</p>

            <p>This privacy notice for <strong>{companyName}</strong> ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Visit our website at <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sugarcane-yellow hover:underline">{websiteUrl}</a>, or any website of ours that links to this privacy notice</li>
              <li>Purchase our products or interact with our online store</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.</p>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">1. What Information Do We Collect?</h2>
              <p className="mb-2"><strong>Personal Information You Disclose to Us:</strong> We collect personal information that you voluntarily provide to us when you register on the Services, place an order, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <p className="mb-2">The personal information we collect may include the following: Names, phone numbers, email addresses, mailing/delivery addresses, usernames, passwords, contact preferences, billing addresses, and payment information (such as debit/credit card numbers, handled securely by our payment processors).</p>
              <p><strong>Information Automatically Collected:</strong> We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser/device characteristics, operating system, language preferences, referring URLs, country, location, and information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">2. How Do We Use Your Information?</h2>
              <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. We use the information we collect or receive:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>To facilitate account creation and management.</li>
                <li>To fulfill and manage your orders, payments, returns, and exchanges.</li>
                <li>To deliver and facilitate delivery of services (like juice subscriptions if offered).</li>
                <li>To send administrative information, such as updates on orders or changes to our terms and policies.</li>
                <li>To request feedback or post testimonials (with your explicit consent).</li>
                <li>To send you marketing and promotional communications (if you opt-in).</li>
                <li>To deliver targeted advertising (based on general location or interests, if applicable).</li>
                <li>To protect our Services (e.g., fraud monitoring).</li>
                <li>To enforce our Terms & Conditions.</li>
                <li>To respond to user inquiries and offer customer support.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">3. Will Your Information Be Shared With Anyone?</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              <p>Specifically, we may need to process your data or share your personal information with third parties in the following situations:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Payment Processors:</strong> To securely process your payments (e.g., Stripe, PayPal).</li>
                  <li><strong>Delivery Partners:</strong> To fulfill your orders.</li>
                  <li><strong>Marketing Platforms:</strong> To send marketing communications if you opt-in (e.g., email marketing services).</li>
                  <li><strong>Analytics Providers:</strong> To understand how our Services are used (e.g., Google Analytics).</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">4. Do We Use Cookies and Other Tracking Technologies?</h2>
              <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. These help us operate our website, understand user preferences, analyze traffic, and potentially for marketing purposes. You can usually manage cookie preferences through your browser settings. For more detailed information, please see our Cookie Policy [Link to Cookie Policy if available, otherwise remove or create one].</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">5. How Long Do We Keep Your Information?</h2>
              <p>We keep your personal information only for as long as necessary for the purposes set out in this privacy notice (e.g., to provide the Services, manage your account, comply with legal obligations), unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">6. How Do We Keep Your Information Safe?</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">7. What Are Your Privacy Rights?</h2>
              <p>Based on the laws of the United Kingdom and potentially the EU (GDPR), you have rights regarding your personal information. These may include the right to:</p>
               <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Request access to and obtain a copy of your personal information.</li>
                  <li>Request correction of inaccurate information or completion of incomplete information.</li>
                  <li>Request erasure of your personal information under certain conditions.</li>
                  <li>Restrict the processing of your personal information under certain conditions.</li>
                  <li>Object to the processing of your personal information under certain conditions.</li>
                  <li>Request data portability (receive your data in a structured, commonly used format).</li>
                  <li>Withdraw consent at any time where we rely on consent to process your information.</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us using the details below. You also have the right to lodge a complaint with the UK's Information Commissioner's Office (ICO).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">8. Controls for Do-Not-Track Features</h2>
              <p>Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. We do not currently respond to DNT browser signals as no uniform standard for responding has been adopted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">9. Do We Make Updates to This Notice?</h2>
              <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this privacy notice frequently.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sugarcane-brown mb-3">10. How Can You Contact Us About This Notice?</h2>
              <p>If you have questions or comments about this notice, you may email us at <a href={`mailto:${contactEmail}`} className="text-sugarcane-yellow hover:underline">{contactEmail}</a> or by post to:</p>
              <address className="not-italic mt-2">
                {companyName}<br />
                {companyAddress.line1}<br />
                {companyAddress.line2 && <>{companyAddress.line2}<br /></>}
                {companyAddress.city}, {companyAddress.zip}<br />
                {companyAddress.country}
              </address>
            </section>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage; 