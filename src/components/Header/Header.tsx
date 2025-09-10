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
    <div className="flex flex-col space-y-4 bg-[#0B3D91]">
      <Link
        href="/"
        className="flex items-center text-[19px] font-bold !text-white"
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaHome className="mr-2" /> HOME
      </Link>
      <Dropdown
        menu={{
          items: servicesItems,
          className: "!text-[19px] !font-bold !text-white",
        }}
        placement="bottom"
        className="!text-[19px] !font-bold "
      >
        <Button
          type="text"
          className="flex items-center !justify-start  !text-white !p-0 h-auto"
        >
          SERVICES{" "}
          <DownOutlined className="!text-[19px] !text-white !font-bold ml-1" />
        </Button>
      </Dropdown>
      <Dropdown
        menu={{
          items: resourcesItems,
          className: "!text-[19px] !font-bold !text-white",
        }}
        placement="bottom"
        className="!text-[19px] !font-bold"
      >
        <Button
          type="text"
          className="flex items-center !justify-start !text-white !p-0 h-auto"
        >
          RESOURCES{" "}
          <DownOutlined className="!text-[19px] !text-white !font-bold ml-1" />
        </Button>
      </Dropdown>
      <Link
        href="/about"
        className="text-[19px] font-bold !text-white"
        onClick={() => setMobileMenuOpen(false)}
      >
        ABOUT US
      </Link>
      <Link
        href="/Contact-us"
        className="text-[19px] font-bold !text-white"
        onClick={() => setMobileMenuOpen(false)}
      >
        CONTACT
      </Link>
    </div>
  );

  return (
    <div className="bg-[#0B3D91] sticky top-0 z-50 shadow-md">
      <header className="flex items-center justify-between  px-9 py-4 bg-[#0B3D91]  max-w-[1440px] m-auto">
        {/* Logo */}
        <Link href={"/"} className="flex items-center space-x-2">
          {/* <span className="text-2xl font-bold text-[#60C130]">up</span>
        <span className="text-2xl font-bold text-black">side</span>
        <span className="text-xs text-black tracking-widest mt-3 ml-1">
          T A X
        </span> */}
          {/* <img
          src="https://cdn.prod.website-files.com/63c9c3eb953a2a58faec188a/63cb12b2ada3657558b6bb13_upside-tax-logo-alt-p-500.png"
          alt="upside tax logo"
          className="w-35"
        /> */}
          <svg
            width="auto"
            height="50"
            viewBox="0 0 347 81"
            className="looka-1j8o68f"
          >
            <defs id="SvgjsDefs13174"></defs>
            <g
              id="SvgjsG13175"
              // featurekey="rootContainer"
              transform="matrix(1,0,0,1,0,0)"
              fill="transparent"
            >
              <rect width="347" height="81" rx="10"></rect>
            </g>
            <g
              id="SvgjsG13176"
              // featurekey="UqkkrJ-0"
              transform="matrix(0.9183673469387755,0,0,0.9183673469387755,23.081632653061224,-2.479591836734695)"
              fill="#ffc107"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M97.01,42.87l-5.04,0.6l-6.48,13.32L75.38,34.84l-5.39,1.06l-1.99-3.96l-5.66,1.43l-17.42,22L16.09,12.5L5.75,19.32    l34.98,47.91l3.32-4.43l-0.01-0.01l3.01-4l0.7,0.01l5.47,8.3l15.03-22.28L68.2,44.7l3.37-4.79l0,0l0.11-0.17L85.06,67.5l0.48-0.03    l2.55-5.58l2.44,5.09L99,47.58L97.01,42.87z M7.3,20.37l9.2-6.31l0.13,0.18l-9.2,6.31L7.3,20.37z M8.26,21.68l9.09-6.41l0.15,0.2    l-9.09,6.41L8.26,21.68z M9.22,22.98l8.95-6.48l0.16,0.22L9.38,23.2L9.22,22.98z M10.17,24.29l8.91-6.43l0.18,0.24l-8.91,6.43    L10.17,24.29z M11.13,25.6l8.75-6.54l0.19,0.27l-8.75,6.54L11.13,25.6z M12.08,26.9l8.77-6.39l0.21,0.29l-8.77,6.39L12.08,26.9z     M13.04,28.21l8.56-6.57l0.23,0.31l-8.56,6.57L13.04,28.21z M14,29.52l8.46-6.6l0.24,0.33l-8.46,6.6L14,29.52z M14.95,30.83    l8.25-6.79l0.26,0.36l-8.25,6.79L14.95,30.83z M15.91,32.13l8.2-6.75l0.28,0.38l-8.2,6.75L15.91,32.13z M16.87,33.44L25,26.73    l0.29,0.4l-8.14,6.71L16.87,33.44z M17.82,34.75l7.94-6.91l0.29,0.44l-7.92,6.9L17.82,34.75z M18.78,36.05l7.92-6.8l0.32,0.44    l-7.92,6.8L18.78,36.05z M19.73,37.36l7.84-6.83l0.32,0.48l-7.82,6.81L19.73,37.36z M20.69,38.67l7.78-6.8l0.34,0.5l-7.76,6.78    L20.69,38.67z M21.65,39.97l7.72-6.77l0.35,0.53l-7.7,6.75L21.65,39.97z M22.6,41.28l7.5-6.97l0.37,0.55l-7.48,6.95L22.6,41.28z     M23.56,42.59l7.4-7l0.38,0.57l-7.38,6.98L23.56,42.59z M24.51,43.9l7.35-6.96l0.4,0.6l-7.32,6.94L24.51,43.9z M25.47,45.2    l7.24-7.01l0.42,0.62l-7.21,6.99L25.47,45.2z M26.43,46.51l7.19-6.96l0.43,0.64l-7.17,6.94L26.43,46.51z M27.38,47.82l7.07-7.01    l0.45,0.66l-7.05,6.99L27.38,47.82z M28.34,49.12l6.89-7.17l0.46,0.69l-6.87,7.14L28.34,49.12z M29.29,50.43l6.85-7.14L36.62,44    l-6.82,7.12L29.29,50.43z M30.25,51.74l6.76-7.12l0.49,0.73l-6.73,7.1L30.25,51.74z M31.21,53.05l6.67-7.14l0.51,0.76l-6.64,7.11    L31.21,53.05z M32.16,54.35l6.59-7.14l0.52,0.78l-6.56,7.12L32.16,54.35z M33.12,55.66l6.47-7.2l0.54,0.8l-6.44,7.17L33.12,55.66z     M34.08,56.97l6.36-7.25l0.55,0.83l-6.33,7.22L34.08,56.97z M35.03,58.27l6.25-7.29l0.57,0.85l-6.22,7.26L35.03,58.27z     M35.99,59.58l6.21-7.23l0.58,0.87l-6.18,7.21L35.99,59.58z M36.94,60.89l6.15-7.2l0.6,0.89l-6.12,7.18L36.94,60.89z M37.9,62.2    l6.13-7.11l0.55,0.82l-6.03,7.18L37.9,62.2z M38.86,63.5l6.07-7.09l0.55,0.82l-5.95,7.18L38.86,63.5z M40.49,65.95l-0.68-1.14    l5.93-7.17l0.65,0.96L40.49,65.95z M47.75,58.41l-0.73,0l-1.81-2.71l17.31-22.11l5-1.2L47.75,58.41z M71.12,39.65l-8.8,12.84    l8.67-13l-1.51-2.64l1.72,2.72L71.12,39.65z M70.11,36.17l4.91-0.99l-3.14,4.04L70.11,36.17z M72.1,39.62l3.2-4.3l0.05,0.11    l-3.2,4.3L72.1,39.62z M72.45,40.33l3.08-4.53l0.06,0.12l-3.08,4.53L72.45,40.33z M72.83,41.12l3.04-4.58l0.06,0.14l-3.04,4.58    L72.83,41.12z M73.21,41.92l3.02-4.6l0.07,0.15l-3.02,4.6L73.21,41.92z M73.59,42.71l3.04-4.53l0.08,0.16l-3.04,4.53L73.59,42.71z     M73.98,43.51l2.99-4.62l0.08,0.18l-2.99,4.62L73.98,43.51z M74.36,44.3l2.97-4.64l0.09,0.19l-2.97,4.64L74.36,44.3z M74.74,45.1    l2.99-4.57l0.1,0.2l-2.99,4.57L74.74,45.1z M75.12,45.89l2.96-4.61l0.1,0.22l-2.96,4.61L75.12,45.89z M75.51,46.69l2.92-4.67    l0.11,0.23l-2.92,4.67L75.51,46.69z M75.89,47.48l2.89-4.7l0.12,0.24L76,47.72L75.89,47.48z M76.27,48.28l2.91-4.66l0.11,0.26    l-2.9,4.66L76.27,48.28z M76.65,49.07l2.87-4.71l0.13,0.27l-2.87,4.71L76.65,49.07z M77.03,49.87l2.84-4.76L80,45.39l-2.83,4.76    L77.03,49.87z M77.42,50.66l2.82-4.78l0.13,0.3l-2.81,4.77L77.42,50.66z M77.8,51.46l2.83-4.73l0.14,0.32l-2.82,4.73L77.8,51.46z     M78.18,52.25l2.83-4.7l0.14,0.33l-2.82,4.69L78.18,52.25z M78.56,53.05l2.79-4.77l0.15,0.34l-2.78,4.76L78.56,53.05z     M78.95,53.84l2.74-4.85l0.16,0.36l-2.73,4.84L78.95,53.84z M79.33,54.63l2.71-4.89l0.16,0.37L79.5,55L79.33,54.63z M79.71,55.43    l2.69-4.92l0.17,0.39l-2.67,4.92L79.71,55.43z M80.09,56.22l2.67-4.94l0.17,0.4l-2.65,4.93L80.09,56.22z M80.47,57.02l2.66-4.94    l0.18,0.41l-2.64,4.93L80.47,57.02z M80.86,57.81l2.65-4.93l0.19,0.43l-2.64,4.92L80.86,57.81z M81.24,58.61l2.63-4.95l0.19,0.44    l-2.61,4.94L81.24,58.61z M81.62,59.4l2.63-4.93l0.2,0.45l-2.61,4.92L81.62,59.4z M82,60.2l2.58-5.02l0.2,0.47l-2.56,5.01L82,60.2    z M82.39,60.99l2.57-5.01l0.21,0.48l-2.55,5L82.39,60.99z M82.77,61.79l2.59-4.95l0.22,0.5L83,62.28L82.77,61.79z M83.15,62.58    l2.53-5.04l0.22,0.51l-2.51,5.03L83.15,62.58z M83.53,63.38l2.51-5.06l0.23,0.52l-2.5,5.05L83.53,63.38z M83.91,64.17l2.51-5.03    l0.23,0.54l-2.5,5.02L83.91,64.17z M84.3,64.97l2.58-4.87l0.21,0.49l-2.53,4.92L84.3,64.97z M84.95,66.32l-0.27-0.55l2.52-4.96    l0.21,0.49L84.95,66.32z M85.33,67.13l-0.27-0.57l2.44-5.12l0.25,0.58L85.33,67.13z M87.93,61.5l-2.13-4.54l6.3-13.16l4.45-0.55    L87.93,61.5z"></path>
                  <polygon points="1,22.47 35,67.07 40.5,67.38 5.45,19.48   "></polygon>
                  <polygon points="79.78,67.14 84.91,67.5 71.57,39.91 68.26,44.82   "></polygon>
                  <polygon points="44.1,62.86 47.33,66.92 53.13,67.23 47.58,58.8 47.06,58.79 44.05,62.8   "></polygon>
                  <polygon points="85.91,66.72 90.48,67.11 88.07,62.02   "></polygon>
                </g>
              </g>
            </g>
            <g
              id="SvgjsG13177"
              // featurekey="nameLeftFeature-0"
              transform="matrix(2.4824164065138685,0,0,2.4824164065138685,109.46611516377789,8.866830833867317)"
              fill="#ffc107"
            >
              <path d="M10.01 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M18.222684375 20 l0 -14.111 l5.1074 0 c4.502 0 6.7285 2.832 6.7285 7.0508 c0 4.2285 -2.2266 7.0605 -6.7285 7.0605 l-5.1074 0 z M21.152384375 17.4121 l2.0313 0 c2.5977 0 3.7891 -1.6211 3.7891 -4.4727 s-1.1914 -4.4727 -3.7891 -4.4727 l-2.0313 0 l0 8.9453 z M39.0527625 20.19531 c-4.1504 0 -7.2168 -2.832 -7.2168 -7.2559 c0 -4.4336 3.0664 -7.2461 7.2168 -7.2461 c4.1406 0 7.207 2.8125 7.207 7.2461 c0 4.4238 -3.0664 7.2559 -7.207 7.2559 z M39.0527625 17.5098 c2.4316 0 4.2969 -1.709 4.2969 -4.5703 c0 -2.8516 -1.8652 -4.5508 -4.2969 -4.5508 s-4.2969 1.6992 -4.2969 4.5508 c0 2.8613 1.8652 4.5703 4.2969 4.5703 z"></path>
            </g>
            <g
              id="SvgjsG13178"
              // featurekey="nameRightFeature-0"
              transform="matrix(1.9565219825067082,0,0,1.9565219825067082,227.99999906705762,17.913042565599845)"
              fill="#ffffff"
            >
              <path d="M4.6000000000000005 5.800000000000001 l0 -1.8 l6 0 l0 1.8 l-2 0 l0 14.2 l-2 0 l0 -14.2 l-2 0 z M11.8 20 l0 -8.4 c0 -5.58 0 -7.78 3 -7.78 s3 2.2 3 7.78 l0 8.4 l-2 0 l0 -4.6 l-2 0 l0 4.6 l-2 0 z M13.8 13.8 l2 0 l0 -2.2 c0 -5.2 0 -6.18 -1 -6.18 s-1 0.98 -1 6.18 l0 2.2 z M19.2 20 l2 -8.04 l-1.8 -7.96 l2 0 l0.8 5.6 l0.2 0 l0.8 -5.6 l2 0 l-1.8 7.42 l2 8.58 l-2 0 l-1 -5.66 l-0.2 0 l-1 5.66 l-2 0 z M26.8 20 l0 -16 l4.6 0 l0 1.6 l-2.6 0 l0 5.2 l2.2 0 l0 1.6 l-2.2 0 l0 5.6 l2.6 0 l0 2 l-4.6 0 z M32.8 14.120000000000001 l2.02 0 c0.04 2.58 0.24 3.08 0.96 3.08 c0.98 0 0.98 -0.82 0.98 -3 c0 -2.2 -3.96 -1.34 -3.96 -4.6 c0 -2.3 0 -4.42 2.32 -4.76 l-0.12 -2.24 l1.6 0 l-0.12 2.24 c1.66 0.26 2.16 1.56 2.28 4.24 l-2 0 c-0.08 -2.18 -0.32 -2.68 -0.96 -2.68 c-0.98 0 -0.98 1.08 -0.98 3.2 c0 2.1 3.98 1 3.98 4.6 c0 2.48 0 4.5 -2.1 4.92 l0.1 1.88 l-1.6 0 l0.1 -1.82 c-1.92 -0.2 -2.38 -1.62 -2.5 -5.06 z"></path>
            </g>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-[18px] font-semibold text-white">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="relative group px-2 py-1">
              {label}
              <span className="absolute bottom-0 left-2 w-0 h-[2px] bg-[#ffc107] transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
          {/* <Dropdown
          menu={{
            items: servicesItems,
            className: "!text-[19px] !font-bold ",
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
            className: "!text-[19px] !font-bold ",
          }}
          placement="bottom"
          className="!text-[19px] !font-bold"
        >
          <Button
            type="text"
            className="flex items-center !text-[19px] !font-bold "
          >
            RESOURCES <DownOutlined className="!text-[19px] !font-bold ml-1" />
          </Button>
        </Dropdown> */}
          {/* <Link href="/about" className="text-[19px] font-bold ">
          ABOUT US
        </Link>
        <Link href="/Contact-us" className="text-[19px] font-bold ">
          CONTACT
        </Link> */}
          <div className="hidden md:flex flex-col items-center">
            <Link href="/Contact-us">
              <button className="!bg-[#ffc107] p-[10px] rounded-[10px] text-lg border-none h-[40px] cursor-pointer !flex !items-center !justify-center hover:!bg-yellow-400  text-black !font-bold">
                Start Filling Now
              </button>
            </Link>
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
            <MenuOutlined className="text-2xl !text-white" />
          </Button>
        </div>

        {/* Desktop Quote Button - Hidden on mobile */}

        {/* Mobile Drawer */}
        <Drawer
          title={
            <div className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold text-[#60C130]">up</span>
              <span className="text-2xl font-bold text-black">side</span>
              <span className="text-xs text-black tracking-widest mt-3 ml-1">
                T A X
              </span> */}
              <svg
                width="auto"
                height="50"
                viewBox="0 0 347 81"
                className="looka-1j8o68f"
              >
                <defs id="SvgjsDefs13174"></defs>
                <g
                  id="SvgjsG13175"
                  // featurekey="rootContainer"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="transparent"
                >
                  <rect width="347" height="81" rx="10"></rect>
                </g>
                <g
                  id="SvgjsG13176"
                  // featurekey="UqkkrJ-0"
                  transform="matrix(0.9183673469387755,0,0,0.9183673469387755,23.081632653061224,-2.479591836734695)"
                  fill="#ffc107"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M97.01,42.87l-5.04,0.6l-6.48,13.32L75.38,34.84l-5.39,1.06l-1.99-3.96l-5.66,1.43l-17.42,22L16.09,12.5L5.75,19.32    l34.98,47.91l3.32-4.43l-0.01-0.01l3.01-4l0.7,0.01l5.47,8.3l15.03-22.28L68.2,44.7l3.37-4.79l0,0l0.11-0.17L85.06,67.5l0.48-0.03    l2.55-5.58l2.44,5.09L99,47.58L97.01,42.87z M7.3,20.37l9.2-6.31l0.13,0.18l-9.2,6.31L7.3,20.37z M8.26,21.68l9.09-6.41l0.15,0.2    l-9.09,6.41L8.26,21.68z M9.22,22.98l8.95-6.48l0.16,0.22L9.38,23.2L9.22,22.98z M10.17,24.29l8.91-6.43l0.18,0.24l-8.91,6.43    L10.17,24.29z M11.13,25.6l8.75-6.54l0.19,0.27l-8.75,6.54L11.13,25.6z M12.08,26.9l8.77-6.39l0.21,0.29l-8.77,6.39L12.08,26.9z     M13.04,28.21l8.56-6.57l0.23,0.31l-8.56,6.57L13.04,28.21z M14,29.52l8.46-6.6l0.24,0.33l-8.46,6.6L14,29.52z M14.95,30.83    l8.25-6.79l0.26,0.36l-8.25,6.79L14.95,30.83z M15.91,32.13l8.2-6.75l0.28,0.38l-8.2,6.75L15.91,32.13z M16.87,33.44L25,26.73    l0.29,0.4l-8.14,6.71L16.87,33.44z M17.82,34.75l7.94-6.91l0.29,0.44l-7.92,6.9L17.82,34.75z M18.78,36.05l7.92-6.8l0.32,0.44    l-7.92,6.8L18.78,36.05z M19.73,37.36l7.84-6.83l0.32,0.48l-7.82,6.81L19.73,37.36z M20.69,38.67l7.78-6.8l0.34,0.5l-7.76,6.78    L20.69,38.67z M21.65,39.97l7.72-6.77l0.35,0.53l-7.7,6.75L21.65,39.97z M22.6,41.28l7.5-6.97l0.37,0.55l-7.48,6.95L22.6,41.28z     M23.56,42.59l7.4-7l0.38,0.57l-7.38,6.98L23.56,42.59z M24.51,43.9l7.35-6.96l0.4,0.6l-7.32,6.94L24.51,43.9z M25.47,45.2    l7.24-7.01l0.42,0.62l-7.21,6.99L25.47,45.2z M26.43,46.51l7.19-6.96l0.43,0.64l-7.17,6.94L26.43,46.51z M27.38,47.82l7.07-7.01    l0.45,0.66l-7.05,6.99L27.38,47.82z M28.34,49.12l6.89-7.17l0.46,0.69l-6.87,7.14L28.34,49.12z M29.29,50.43l6.85-7.14L36.62,44    l-6.82,7.12L29.29,50.43z M30.25,51.74l6.76-7.12l0.49,0.73l-6.73,7.1L30.25,51.74z M31.21,53.05l6.67-7.14l0.51,0.76l-6.64,7.11    L31.21,53.05z M32.16,54.35l6.59-7.14l0.52,0.78l-6.56,7.12L32.16,54.35z M33.12,55.66l6.47-7.2l0.54,0.8l-6.44,7.17L33.12,55.66z     M34.08,56.97l6.36-7.25l0.55,0.83l-6.33,7.22L34.08,56.97z M35.03,58.27l6.25-7.29l0.57,0.85l-6.22,7.26L35.03,58.27z     M35.99,59.58l6.21-7.23l0.58,0.87l-6.18,7.21L35.99,59.58z M36.94,60.89l6.15-7.2l0.6,0.89l-6.12,7.18L36.94,60.89z M37.9,62.2    l6.13-7.11l0.55,0.82l-6.03,7.18L37.9,62.2z M38.86,63.5l6.07-7.09l0.55,0.82l-5.95,7.18L38.86,63.5z M40.49,65.95l-0.68-1.14    l5.93-7.17l0.65,0.96L40.49,65.95z M47.75,58.41l-0.73,0l-1.81-2.71l17.31-22.11l5-1.2L47.75,58.41z M71.12,39.65l-8.8,12.84    l8.67-13l-1.51-2.64l1.72,2.72L71.12,39.65z M70.11,36.17l4.91-0.99l-3.14,4.04L70.11,36.17z M72.1,39.62l3.2-4.3l0.05,0.11    l-3.2,4.3L72.1,39.62z M72.45,40.33l3.08-4.53l0.06,0.12l-3.08,4.53L72.45,40.33z M72.83,41.12l3.04-4.58l0.06,0.14l-3.04,4.58    L72.83,41.12z M73.21,41.92l3.02-4.6l0.07,0.15l-3.02,4.6L73.21,41.92z M73.59,42.71l3.04-4.53l0.08,0.16l-3.04,4.53L73.59,42.71z     M73.98,43.51l2.99-4.62l0.08,0.18l-2.99,4.62L73.98,43.51z M74.36,44.3l2.97-4.64l0.09,0.19l-2.97,4.64L74.36,44.3z M74.74,45.1    l2.99-4.57l0.1,0.2l-2.99,4.57L74.74,45.1z M75.12,45.89l2.96-4.61l0.1,0.22l-2.96,4.61L75.12,45.89z M75.51,46.69l2.92-4.67    l0.11,0.23l-2.92,4.67L75.51,46.69z M75.89,47.48l2.89-4.7l0.12,0.24L76,47.72L75.89,47.48z M76.27,48.28l2.91-4.66l0.11,0.26    l-2.9,4.66L76.27,48.28z M76.65,49.07l2.87-4.71l0.13,0.27l-2.87,4.71L76.65,49.07z M77.03,49.87l2.84-4.76L80,45.39l-2.83,4.76    L77.03,49.87z M77.42,50.66l2.82-4.78l0.13,0.3l-2.81,4.77L77.42,50.66z M77.8,51.46l2.83-4.73l0.14,0.32l-2.82,4.73L77.8,51.46z     M78.18,52.25l2.83-4.7l0.14,0.33l-2.82,4.69L78.18,52.25z M78.56,53.05l2.79-4.77l0.15,0.34l-2.78,4.76L78.56,53.05z     M78.95,53.84l2.74-4.85l0.16,0.36l-2.73,4.84L78.95,53.84z M79.33,54.63l2.71-4.89l0.16,0.37L79.5,55L79.33,54.63z M79.71,55.43    l2.69-4.92l0.17,0.39l-2.67,4.92L79.71,55.43z M80.09,56.22l2.67-4.94l0.17,0.4l-2.65,4.93L80.09,56.22z M80.47,57.02l2.66-4.94    l0.18,0.41l-2.64,4.93L80.47,57.02z M80.86,57.81l2.65-4.93l0.19,0.43l-2.64,4.92L80.86,57.81z M81.24,58.61l2.63-4.95l0.19,0.44    l-2.61,4.94L81.24,58.61z M81.62,59.4l2.63-4.93l0.2,0.45l-2.61,4.92L81.62,59.4z M82,60.2l2.58-5.02l0.2,0.47l-2.56,5.01L82,60.2    z M82.39,60.99l2.57-5.01l0.21,0.48l-2.55,5L82.39,60.99z M82.77,61.79l2.59-4.95l0.22,0.5L83,62.28L82.77,61.79z M83.15,62.58    l2.53-5.04l0.22,0.51l-2.51,5.03L83.15,62.58z M83.53,63.38l2.51-5.06l0.23,0.52l-2.5,5.05L83.53,63.38z M83.91,64.17l2.51-5.03    l0.23,0.54l-2.5,5.02L83.91,64.17z M84.3,64.97l2.58-4.87l0.21,0.49l-2.53,4.92L84.3,64.97z M84.95,66.32l-0.27-0.55l2.52-4.96    l0.21,0.49L84.95,66.32z M85.33,67.13l-0.27-0.57l2.44-5.12l0.25,0.58L85.33,67.13z M87.93,61.5l-2.13-4.54l6.3-13.16l4.45-0.55    L87.93,61.5z"></path>
                      <polygon points="1,22.47 35,67.07 40.5,67.38 5.45,19.48   "></polygon>
                      <polygon points="79.78,67.14 84.91,67.5 71.57,39.91 68.26,44.82   "></polygon>
                      <polygon points="44.1,62.86 47.33,66.92 53.13,67.23 47.58,58.8 47.06,58.79 44.05,62.8   "></polygon>
                      <polygon points="85.91,66.72 90.48,67.11 88.07,62.02   "></polygon>
                    </g>
                  </g>
                </g>
                <g
                  id="SvgjsG13177"
                  // featurekey="nameLeftFeature-0"
                  transform="matrix(2.4824164065138685,0,0,2.4824164065138685,109.46611516377789,8.866830833867317)"
                  fill="#ffc107"
                >
                  <path d="M10.01 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M18.222684375 20 l0 -14.111 l5.1074 0 c4.502 0 6.7285 2.832 6.7285 7.0508 c0 4.2285 -2.2266 7.0605 -6.7285 7.0605 l-5.1074 0 z M21.152384375 17.4121 l2.0313 0 c2.5977 0 3.7891 -1.6211 3.7891 -4.4727 s-1.1914 -4.4727 -3.7891 -4.4727 l-2.0313 0 l0 8.9453 z M39.0527625 20.19531 c-4.1504 0 -7.2168 -2.832 -7.2168 -7.2559 c0 -4.4336 3.0664 -7.2461 7.2168 -7.2461 c4.1406 0 7.207 2.8125 7.207 7.2461 c0 4.4238 -3.0664 7.2559 -7.207 7.2559 z M39.0527625 17.5098 c2.4316 0 4.2969 -1.709 4.2969 -4.5703 c0 -2.8516 -1.8652 -4.5508 -4.2969 -4.5508 s-4.2969 1.6992 -4.2969 4.5508 c0 2.8613 1.8652 4.5703 4.2969 4.5703 z"></path>
                </g>
                <g
                  id="SvgjsG13178"
                  // featurekey="nameRightFeature-0"
                  transform="matrix(1.9565219825067082,0,0,1.9565219825067082,227.99999906705762,17.913042565599845)"
                  fill="#ffffff"
                >
                  <path d="M4.6000000000000005 5.800000000000001 l0 -1.8 l6 0 l0 1.8 l-2 0 l0 14.2 l-2 0 l0 -14.2 l-2 0 z M11.8 20 l0 -8.4 c0 -5.58 0 -7.78 3 -7.78 s3 2.2 3 7.78 l0 8.4 l-2 0 l0 -4.6 l-2 0 l0 4.6 l-2 0 z M13.8 13.8 l2 0 l0 -2.2 c0 -5.2 0 -6.18 -1 -6.18 s-1 0.98 -1 6.18 l0 2.2 z M19.2 20 l2 -8.04 l-1.8 -7.96 l2 0 l0.8 5.6 l0.2 0 l0.8 -5.6 l2 0 l-1.8 7.42 l2 8.58 l-2 0 l-1 -5.66 l-0.2 0 l-1 5.66 l-2 0 z M26.8 20 l0 -16 l4.6 0 l0 1.6 l-2.6 0 l0 5.2 l2.2 0 l0 1.6 l-2.2 0 l0 5.6 l2.6 0 l0 2 l-4.6 0 z M32.8 14.120000000000001 l2.02 0 c0.04 2.58 0.24 3.08 0.96 3.08 c0.98 0 0.98 -0.82 0.98 -3 c0 -2.2 -3.96 -1.34 -3.96 -4.6 c0 -2.3 0 -4.42 2.32 -4.76 l-0.12 -2.24 l1.6 0 l-0.12 2.24 c1.66 0.26 2.16 1.56 2.28 4.24 l-2 0 c-0.08 -2.18 -0.32 -2.68 -0.96 -2.68 c-0.98 0 -0.98 1.08 -0.98 3.2 c0 2.1 3.98 1 3.98 4.6 c0 2.48 0 4.5 -2.1 4.92 l0.1 1.88 l-1.6 0 l0.1 -1.82 c-1.92 -0.2 -2.38 -1.62 -2.5 -5.06 z"></path>
                </g>
              </svg>
            </div>
          }
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          className="md:hidden !bg-[#0B3D91]"
          closeIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="white"

              
            >
              <path
                d="M11 0.7H13V23.3H11z"
                transform="rotate(-45.001 12 12)"
              ></path>
              <path
                d="M0.7 11H23.3V13H0.7z"
                transform="rotate(-45.001 12 12)"
              ></path>
            </svg>
          }
        >
          <MobileMenu />
          {/* Mobile Quote Button */}
          <div className="mt-8">
            <Link href="/Contact-us">
              <Button
                type="primary"
                className="!bg-[#ffc107] !text-black  text-sm font-semibold w-full"
                size="large"
              >
                REQUEST A QUOTE
              </Button>
            </Link>
            {/* <div className="text-center mt-2">
            <span className="text-xs text-gray-600">*</span>
            <span className="text-[15px] text-gray-600 ml-1">
              Fast Response
            </span>
          </div> */}
          </div>
        </Drawer>
      </header>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" }, // ✅ now links to homepage anchor
  { label: "Services", href: "/#services" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/Contact-us" },
];
