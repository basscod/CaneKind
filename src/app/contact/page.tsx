"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // Mock API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-24 px-6 mt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-sugarcane-yellow">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Office</h3>
                  <p className="text-gray-300">123 Green Lane</p>
                  <p className="text-gray-300">London, UK</p>
                  <p className="text-gray-300">SW1A 1AA</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Contact Details</h3>
                  <p className="text-gray-300">
                    <span className="font-medium">Email:</span> info@canekind.com
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium">Phone:</span> +44 20 1234 5678
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-sugarcane-yellow hover:bg-sugarcane-yellow/90 text-black font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sugarcane-yellow"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sugarcane-yellow"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sugarcane-yellow"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Wholesale">Wholesale Opportunities</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-black/20 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sugarcane-yellow"
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="p-3 bg-red-900/50 border border-red-800 rounded-lg">
                      <p className="text-red-200 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sugarcane-yellow hover:bg-sugarcane-yellow/90 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-sugarcane-yellow">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">How can I purchase CaneKind products?</h3>
                <p className="text-gray-300">
                  Our products are available through our online store and at select retail partners across the UK.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-300">
                  Currently, we only ship within the UK. We're working on expanding our delivery options to other countries.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Are your products suitable for vegans?</h3>
                <p className="text-gray-300">
                  Yes, all CaneKind products are 100% plant-based and suitable for vegans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 