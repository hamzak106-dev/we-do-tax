"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const GeneralInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = 'service_6dqeuz2';
      const templateId = 'template_l3wi7eq';
      const publicKey = 'nUIEheYWHjb9lkd-T';

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
      <h2 className="text-3xl font-extrabold text-center text-black mb-2">
        GENERAL INQUIRY
      </h2>
      <p className="text-center text-black mb-4">
        Please complete this form, and a member of our team will follow up as
        soon as possible.
      </p>
      <div className="text-center mb-8">
        <p className="text-lg font-semibold text-[#0B3D91] mb-2">
          Or call us directly at:
        </p>
        <a 
          href="tel:+18884547996" 
          className="text-2xl font-bold text-[#ffc107] hover:text-yellow-400 transition-colors"
        >
          (888) 454-7996
        </a>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">
              Which services are you interested in?
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
            >
              <option value="">Select a service</option>
              <option value="Individual Tax filing">
                Individual Tax filing
              </option>
              <option value="Business Tax filing">Business Tax filing</option>
              <option value="Bookkeeping">Bookkeeping</option>
              <option value="Outsourced Accounting Role (Controller, CFO)">
                Outsourced Accounting Role (Controller, CFO)
              </option>
              <option value="Consulting ($400/hr or $200/half hour)">
                Consulting ($400/hr or $200/half hour)
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="font-semibold mb-1">How can we help?</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-black"
            rows={4}
            placeholder="Add more information here"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Thank you! Your message has been sent successfully. We&apos;ll get
            back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Sorry, there was an error sending your message. Please try again or
            contact us directly.
          </div>
        )}

        <div className="flex justify-start mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#1F5893] text-white font-semibold py-2 px-8 rounded text-lg shadow transition-all duration-200 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#1a4a7a]"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInquiryForm;
