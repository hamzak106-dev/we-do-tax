/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Dropdown, Button, Drawer } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/Personal">Personal</Link>,
    },
    {
      key: "2",
      label: <Link href="/Freelancer">Freelancer</Link>,
    },
    {
      key: "3",
      label: <Link href="/Business">Business</Link>,
    },
    {
      key: "4",
      label: <Link href="/Fractional-cfo">Fractional CFO</Link>,
    },
    {
      key: "5",
      label: <Link href="/Family-offices">Family Offices</Link>,
    },
  ];

  const resourcesItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/Resources#worksheets">Worksheets</Link>,
    },
    {
      key: "2",
      label: <Link href="/Resources#faq">FAQ</Link>,
    },
    {
      key: "3",
      label: <Link href="/Resources#articles">Articles</Link>,
    },
  ];

  const MobileMenu = () => (
    <div className="flex flex-col space-y-4">
      <Link
        href="/"
        className="flex items-center text-[19px] font-bold !text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaHome className="mr-2" /> HOME
      </Link>
      <Dropdown
        menu={{
          items: servicesItems,
          className: "!text-[19px] !font-bold !text-black",
        }}
        placement="bottom"
        className="!text-[19px] !font-bold"
      >
        <Button type="text" className="flex items-center p-0 h-auto">
          SERVICES <DownOutlined className="!text-[19px] !font-bold ml-1" />
        </Button>
      </Dropdown>
      <Dropdown
        menu={{
          items: resourcesItems,
          className: "!text-[19px] !font-bold !text-black",
        }}
        placement="bottom"
        className="!text-[19px] !font-bold"
      >
        <Button type="text" className="flex items-center p-0 h-auto">
          RESOURCES <DownOutlined className="!text-[19px] !font-bold ml-1" />
        </Button>
      </Dropdown>
      <Link
        href="/about"
        className="text-[19px] font-bold !text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        ABOUT US
      </Link>
      <Link
        href="/Contact-us"
        className="text-[19px] font-bold !text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        CONTACT
      </Link>
    </div>
  );

  return (
    <header className="flex items-center justify-between sticky top-0 z-50   px-18 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <span className="text-2xl font-bold text-[#60C130]">up</span>
        <span className="text-2xl font-bold text-black">side</span>
        <span className="text-xs text-black tracking-widest mt-3 ml-1">
          T A X
        </span> */}
        <img
          src="https://cdn.prod.website-files.com/63c9c3eb953a2a58faec188a/63cb12b2ada3657558b6bb13_upside-tax-logo-alt-p-500.png"
          alt="upside tax logo"
          className="w-35"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-[19px] font-bold text-black">
        <Link href="/" className="flex items-center !text-black">
          <FaHome className="mr-1" /> HOME
        </Link>
        <Dropdown
          menu={{
            items: servicesItems,
            className: "!text-[19px] !font-bold !text-black",
          }}
          placement="bottom"
          className="!text-[19px] !font-bold"
        >
          <Button type="text" className="flex items-center">
            SERVICES <DownOutlined className="!text-[19px] !font-bold ml-1" />
          </Button>
        </Dropdown>
        <Dropdown
          menu={{
            items: resourcesItems,
            className: "!text-[19px] !font-bold !text-black",
          }}
          placement="bottom"
          className="!text-[19px] !font-bold"
        >
          <Button
            type="text"
            className="flex items-center !text-[19px] !font-bold !text-black"
          >
            RESOURCES <DownOutlined className="!text-[19px] !font-bold ml-1" />
          </Button>
        </Dropdown>
        <Link href="/about" className="text-[19px] font-bold !text-black">
          ABOUT US
        </Link>
        <Link href="/Contact-us" className="text-[19px] font-bold !text-black">
          CONTACT
        </Link>
        <div className="hidden md:flex flex-col items-center">
          <Button
            type="primary"
            className="!bg-[#60C130] hover:!bg-[#4ea326] text-white text-sm !font-bold"
            size="large"
          >
            REQUEST A QUOTE
          </Button>
          {/* <span className="text-xs text-gray-600 mt-1">*</span>
        <span className="text-[15px] -mt-1 text-gray-600">Fast Response</span> */}
        </div>
      </nav>

      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="md:hidden">
        <Button
          type="text"
          className="flex items-center"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuOutlined className="text-2xl" />
        </Button>
      </div>

      {/* Desktop Quote Button - Hidden on mobile */}

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#60C130]">up</span>
            <span className="text-2xl font-bold text-black">side</span>
            <span className="text-xs text-black tracking-widest mt-3 ml-1">
              T A X
            </span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="md:hidden"
      >
        <MobileMenu />
        {/* Mobile Quote Button */}
        <div className="mt-8">
          <Button
            type="primary"
            className="!bg-[#60C130] hover:!bg-[#4ea326] text-white text-sm font-semibold w-full"
            size="large"
          >
            REQUEST A QUOTE
          </Button>
          {/* <div className="text-center mt-2">
            <span className="text-xs text-gray-600">*</span>
            <span className="text-[15px] text-gray-600 ml-1">
              Fast Response
            </span>
          </div> */}
        </div>
      </Drawer>
    </header>
  );
}
