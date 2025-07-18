import React from "react";

const GeneralInquiryForm = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
    <h2 className="text-3xl font-extrabold text-center text-black mb-2">
      GENERAL INQURY
    </h2>
    <p className="text-center text-black mb-8">
      Please complete this form, and a member of our team will follow up as soon
      as possible.
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Name</label>
          <input
            type="text"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Email Address</label>
          <input
            type="email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Phone Number (Optional)</label>
          <input
            type="tel"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            Which services are you interested in?
          </label>
          <select
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
            multiple
            size={5}
          >
            <option>Individual Tax filing</option>
            <option>Business Tax filing</option>
            <option>Bookkeeping</option>
            <option>Outsourced Accounting Role (Controller, CFO)</option>
            <option>Consulting ($400/hr or $200/half hour)</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <label className="font-semibold mb-1">How can we help?</label>
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
          rows={4}
          placeholder="Add more information here"
        />
      </div>
      <div className="flex justify-start mt-2">
        <button
          type="submit"
          className="bg-[#1F5893]   text-white font-semibold py-2 px-8 rounded text-lg shadow transition-all duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
);

export default GeneralInquiryForm;
