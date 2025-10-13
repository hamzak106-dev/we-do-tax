"use client";

import { FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131815] text-white text-sm">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-b from-white to-transparent text-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222] mb-2">
          LET&apos;S WORK TOGETHER
        </h2>
        <p className="text-gray-800 text-lg mb-4">
          Get in touch with us and send some basic info about your tax
          situation.
        </p>
        <div className="inline-block">
          <Link href="/Contact-us">
            <span className="bg-[#ffc107]   text-black font-bold py-3 px-6 rounded-md inline-block text-lg">
              REQUEST A QUOTE
            </span>
          </Link>
          <p className="text-lg mt-1 italic text-black">
            Response within 24 hours!
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-700">
        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">WeDoTaxes, LLC</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start  gap-3">
              <FaMapPin className="text-[#ffc107] mt-1" size={18} />
              <span>Silver Spring, Maryland, MD 20901</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-[#ffc107] mt-1" size={18} />
              <span>
                <a href="tel:+18884547996" className="hover:text-[#ffc107] transition-colors">
                  (888) 454-7996
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#ffc107] mt-1" size={18} />
              <span>
                <a href="mailto:info@wedotaxes.com">info@wedotaxes.com</a>
              </span>
            </li>
          </ul>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#ffc107] inline-block pr-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link href="/" className="hover:text-[#ffc107]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ffc107]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ffc107]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-[#ffc107]">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ffc107]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Locations</h3>
          <ul className="space-y-2 text-lg">
            <li>New York City</li>
            <li>West Palm Beach</li>
            <li>
              <Link
                href="https://www.google.com/search?q=WeDoTaxes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffc107] block"
              >
                Read our reviews on Google
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 text-lg text-gray-400 border-t border-gray-700">
        © WeDoTax, LLC
      </div>
    </footer>
  );
}
