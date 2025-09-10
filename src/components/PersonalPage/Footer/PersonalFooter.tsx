import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const PersonalFooter = () => {
  return (
    <footer className="bg-[#232825] text-white pt-8 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">We Do Tax, LLC</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-[#60C130] text-lg">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-lg">
                  2 GOLD STREET, NEW YORK, NY 10038
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#60C130] text-lg">
                  <FaPhoneAlt />
                </span>
                <span className="text-lg">
                  SUBMIT ONLINE FORM TO CONTACT US
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#60C130] text-lg">
                  <FaEnvelope />
                </span>
                <span className="text-lg">INFO@WEDOTAX.COM</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-2 border-b-4 border-[#60C130] inline-block pb-1">
              Navigation
            </h3>
            <ul className="space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-[#60C130] text-lg">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60C130] text-lg">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60C130] text-lg">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60C130] text-lg">
                  RESOURCES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#60C130] text-lg">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-2 border-b-4 border-[#60C130] inline-block pb-1">
              Locations
            </h3>
            <ul className="space-y-1 mt-2">
              <li className="text-lg">NEW YORK CITY</li>
              <li className="text-lg">WEST PALM BEACH</li>
              <li className="mt-4">
                <a href="#" className="hover:text-[#60C130] text-lg">
                  READ OUR REVIEWS ON GOOGLE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#232825] text-center text-white text-lg py-2 border-t border-gray-700">
        &copy; We Do Tax, LLC
      </div>
    </footer>
  );
};

export default PersonalFooter;
