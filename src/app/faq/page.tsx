import React from 'react';
import { PageLayout } from '@/components/layout/page-layout';

const FAQPage = () => {
  const faqs = [
    {
      question: "What makes CaneKind sugarcane juice special?",
      answer: "Our juice is cold-pressed from 100% natural, premium sugarcane, often sourced sustainably. We focus on preserving the raw nutritional benefits and offer exciting, natural flavor infusions. No added sugars or preservatives!",
    },
    {
      question: "What are the health benefits of sugarcane juice?",
      answer: "Fresh sugarcane juice is a natural source of energy, packed with electrolytes, antioxidants, vitamins, and minerals. It can aid hydration, boost immunity, and provide a natural sweetness without the downsides of refined sugar.",
    },
    {
      question: "How long does the juice stay fresh?",
      answer: "Because we don't use preservatives, our cold-pressed juice is best enjoyed within 3-5 days of purchase when kept properly refrigerated. Always check the date on the bottle.",
    },
    {
      question: "Do you offer different flavors or blends?",
      answer: "Yes! We offer a variety of natural infusions like ginger, lemon, mint, and passion fruit alongside our classic pure sugarcane juice. Check our Products page for the latest offerings.",
    },
    {
      question: "Can I customize my juice blend?",
      answer: "Currently, we offer pre-defined blends. However, we are exploring options for customization. Stay tuned or visit our 'Craft Your Own' section if available!",
    },
    {
      question: "Where do you source your sugarcane?",
      answer: "We strive to source our sugarcane from sustainable farms known for high-quality produce. Specific sourcing details may vary based on seasonal availability.",
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes, we offer local delivery within London. Please visit our ordering or delivery information page for specific zones, fees, and delivery times.",
    },
    {
      question: "Is your packaging eco-friendly?",
      answer: "We are committed to sustainability and use recyclable materials for our bottles and packaging wherever possible.",
    },
  ];

  return (
    <PageLayout>
      {/* Full-width background wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] to-white">
        {/* Container for content */}
        <div className="container mx-auto px-4 py-24 pt-32 md:pt-40">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-sugarcane-brown mb-16">Frequently Asked Questions</h1>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card bg-white/15 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg border border-white/20 hover:border-sugarcane-yellow/50 transition-colors duration-300">
                <h2 className="text-xl md:text-2xl font-semibold text-sugarcane-brown mb-3">{faq.question}</h2>
                <p className="text-text-primary text-base md:text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage; 