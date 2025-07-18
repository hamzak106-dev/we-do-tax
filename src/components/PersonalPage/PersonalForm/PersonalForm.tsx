import React from "react";

const PersonalForm = ({ title }: { title: string }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 px-2"
      id="quote-form"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
          {title} FILING QUOTE REQUEST FORM
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Please complete this form, and a member of our team will follow up as
          soon as possible - usually within 1 business day.
        </p>
      </div>
      <form className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-black mb-1">Your Name</label>
            <input
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60C130]"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email Address</label>
            <input
              type="email"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60C130]"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60C130]"
              placeholder=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="font-semibold mb-1 block">
                Filing Status (Single, Married)
              </label>
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]">
                <option>Select one...</option>
                <option>Single</option>
                <option>Married</option>
                <option>Head of Household</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Estimated Income Level
              </label>
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]">
                <option>Select one...</option>
                <option>Under $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $200,000</option>
                <option>Over $200,000</option>
              </select>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Did you move in the last tax year?
              </label>
              <span className="text-[13px] text-gray-600 block mb-1">
                Provide dates, states, and source of income below in the text
                box. If income in multiple states, spell it out please.
              </span>
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]">
                <option>Select one...</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="font-semibold mb-1 block">How Many W2s?</label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["None", "One", "Two", "Three", "Four or more"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="w2s"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                How many brokerage houses do you invest with?{" "}
                <span className="font-normal">(Do not count 401k)</span>
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["None", "1-2", "3-5", "6+"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="brokerage"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Do you own primary residence real estate?
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Yes", "Yes, as part of a co-op", "No"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="primaryRealEstate"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Do you own or part-own any businesses and receive a Form K1?
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Yes", "No"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="k1"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Do you own rental real estate? How many units?
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Yes, 1", "Yes, 2-3", "Yes, 4+", "No"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="rentalUnits"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="font-semibold mb-1 block">
                Do you have dependents?
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {[
                  "Yes, with childcare expenses",
                  "Yes, without childcare expenses",
                  "No",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="dependents"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                What city/state do you live in?
              </label>
              <select className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]">
                <option>Please select</option>
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                What&apos;s your employment status?
              </label>
              <span className="text-[13px] text-gray-600 block mb-1">
                Mark Self-employed or Both if you receive 1099 or freelance
                income (even if small)
              </span>
              <div className="flex flex-wrap gap-4 mt-1">
                {[
                  "W2 Employee",
                  "Self-Employed",
                  "Both W2 and Self employed.",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="employment"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Is your W-2 from your state of residence, or does it list a
                different state?
              </label>
              <span className="text-[13px] text-gray-600 block mb-1">
                You can check this in Box 15 of your W-2. Remote work does not
                change this. Please provide details in the text box below.
              </span>
              <div className="flex flex-wrap gap-4 mt-1">
                {[
                  "State of residence",
                  "Different state",
                  "Both resident and different state",
                  "I don&apos;t know which state I have to file in",
                  "Not Applicable",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="w2state"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Did you take distributions from a retirement account or do Back
                Door Roth IRA Conversion? (IRA, 401k, pension, etc)
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Yes", "No"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="retirement"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1 block">
                Do you have foreign bank accounts with over a $10,000 balance on
                any day in the tax year?
              </label>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Yes", "No"].map((item) => (
                  <label key={item} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="foreignBank"
                      className="accent-[#60C130]"
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="font-semibold mb-1 block">
              If you receive K1s, please explain what type here
            </label>
            <textarea
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]"
              placeholder="Real estate, investment fund, share of employer, etc"
              rows={2}
            ></textarea>
          </div>
          <div>
            <label className="font-semibold mb-1 block">
              Please let us know about any other detail related to above, tax
              forms or income received, general questions, or concerns here - we
              can email or call with a quote and next steps shortly. Indicate if
              this is for the most recent tax filing or a quote for next year.
            </label>
            <textarea
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#60C130]"
              placeholder="Add more information here"
              rows={2}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-start mt-4">
          <button
            type="submit"
            className="bg-[#60C130] hover:bg-[#4ea326] text-white font-semibold py-2 px-8 rounded text-lg shadow transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
