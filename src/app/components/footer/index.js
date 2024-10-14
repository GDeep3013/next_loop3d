'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import Container from "../common/Container";
import InputField from "../common/InputField";

const Footer = () => {

  const pathname = usePathname();

  const [feedbackSessions, setFeedbackSessions] = useState(0);
  const [leadershipImprovement, setLeadershipImprovement] = useState(0);
  const [employeeRetention, setEmployeeRetention] = useState(0);

  const animateValue = (start, end, duration) => {
    const range = end - start;
    let current = start;
    const increment = range / (duration / 10);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
     // setValue(Math.floor(current));
    }, 10);
  };



  const isActive = (path) => pathname === path;

  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    animateValue(0, 500, 5000, setFeedbackSessions); // 500k in 2 seconds
    animateValue(0, 97, 5000, setLeadershipImprovement); // +97% in 2 seconds
    animateValue(0, 8, 5000, setEmployeeRetention); // +8% in 2 seconds
  }, []);


  const marginTop = (pathname == '/start-survey') ? 'mt-[31rem] md:mt-[41rem] lg:mt-[23rem]' : 'mt-[200px]';
  const disbleContent = (pathname == '/services') ? 'hidden' : '';
  const marginBox = (pathname == '/about' || pathname === '/home' || pathname === '/lead-dashboard') ? '!mt-[0]' : '';

  return (
    <footer className="bg-[#174A6D] text-white font-poppins">
      {/* <div className={`${marginTop} ${disbleContent} ${marginBox}`}>
        <Container className="py-14 relative">
          <div className="real absolute bottom-0 left-0 right-0 mx-[20px] md:mx-[40px] bg-[#7ABCDB] py-8 rounded-[6px] bg-[url('/images/footer/footer_lines_bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="px-[20px] md:px-[50px] mb-4 flex flex-col justify-between items-center text-center md:text-left">
              <h3 className="text-[34px] md:text-[48px] font-frank mb-2 text-center">
                Real Insights Mean Real Results
              </h3>
              <div className="flex flex-col lg:flex-row w-full justify-center xl:justify-around space-y-8 xl:space-x-8">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[34px] md:text-[48px] font-frank">
                    {feedbackSessions.toLocaleString()}k
                  </span>
                  <p className="w-[220px] mx-auto text-center text-[16px] frank-poppins">
                    Feedback sessions conducted worldwide
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[34px] md:text-[48px] font-frank">
                    +{leadershipImprovement}%
                  </span>
                  <p className="w-[220px] mx-auto text-center text-[16px] frank-poppins">
                    Improved leadership capabilities
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[34px] md:text-[48px] font-frank">
                    +{employeeRetention}%
                  </span>
                  <p className="w-[210px] mx-auto text-center text-[16px] frank-poppins">
                    Higher employee retention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div> */}
      <Container className="py-14">
        {/* mobile display */}
        <div className="flex flex-col items-center xl:hidden pr-3 mb-3">
          <img
            className="h-[77px] mx-auto lg:mx-[0px]"
            src="/images/header/logoheader.svg"
            alt="Logo"
          />
          <p className="text-center text-[16px] mt-2 leading-[30px] md:w-[500px]">
            We are dedicated to transforming the 360 feedback process using
            AI-driven technology to provide personalized, actionable insights
            for businesses of all sizes.
          </p>
        </div>
        {/* mobile display end */}
        <div className="grid grid-cols-1 lg:grid-cols-[26%,37%,37%] xl:grid-cols-[25%,20%,25%,30%]">
          <div className="hidden xl:block pr-3 text-center lg:text-left">
            <img
              className="h-[77px] mx-auto lg:mx-[0px]"
              src="/images/header/logoheader.svg"
              alt="Logo"
            />
            <p className="text-[16px] mt-2 leading-[30px]">
              We are dedicated to transforming the 360 feedback process using
              AI-driven technology to provide personalized, actionable insights
              for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#">
                <img
                  className="w-[42px] h-[42px]"
                  src="/images/header/facebook_icon.svg"
                  alt="Logo"
                />
              </Link>
              <Link href="#">
                <img
                  className="w-[42px] h-[42px]"
                  src="/images/header/instagram_icon.svg"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          <div className="xl:px-12 mt-6 text-center lg:text-left">
            <h4 className="text-[25px] font-frank mb-2">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/home"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/home') ? 'text-custom-color2' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/about') ? 'text-custom-color2' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/services') ? 'text-custom-color2' : ''}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/contact') ? 'text-custom-color2' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/terms-of-service') ? 'text-custom-color2' : ''}`}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-[16px] leading-[30px] ${isActive('/privacy-policy') ? 'text-custom-color2' : ''}`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center lg:text-left">
            <h4 className="text-[25px] font-frank mb-2">Store Information</h4>
            <div className="flex space-x-2 justify-center lg:justify-start items-center mb-4">
              <Link href="#">
                <img
                  className="w-6 h-6"
                  src="/images/footer/location_icon.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-[16px] frank-poppins leading-[30px]">
                1234B 62nd st N, dummy address
              </p>
            </div>
            <div className="flex space-x-2 justify-center lg:justify-start items-center mb-4">
              <Link href="#">
                <img
                  className="w-6 h-6"
                  src="/images/footer/email_icon.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-[16px] frank-poppins leading-[30px]">
                support@dummy.com
              </p>
            </div>

            <div className="flex space-x-2 justify-center lg:justify-start items-center mb-4">
              <Link href="#">
                <img
                  className="w-6 h-6"
                  src="/images/footer/phone_icon.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-[16px] frank-poppins leading-[30px]">
                (000) 000-0000
              </p>
            </div>
          </div>

          <div className="mt-6 text-center lg:text-left">
            <h4 className="text-[25px] font-frank mb-2">Join our Newsletter</h4>
            <p className="text-[16px] mb-4 frank-poppins leading-[30px] w-[320px] xl:w-auto mx-auto">
              Our email are designed to elevate and inspire your daily mental
              health rituals.
            </p>
            <div className="lg:flex gap-2 mt-4 lg:mt-10">
              <InputField
                labelClass="text-white"
                className="rounded-full px-8 placeholder-[#C3C3C3] mx-auto !w-[280px] lg:!w-[230px]"
                label=""
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Please enter your email"
              />
              <button
                type="submit"
                className="!mx-auto mt-4 lg:mt-0 min-w-[138px] min-h-[56px] items-center bg-[#7ABCDB] flex justify-center px-[20px] text-[16px] rounded-full text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="py-4 border-t-[1px] border-white">
        <Container className="">
          <div className="flex flex-col md:flex-row justify-between items-center text-[16px]">
            <p className="text-[16px] frank-poppins leading-[30px]">
              Copyright © 2024 Loop3D
            </p>
            <div className="flex space-x-5">
              <Link className="frank-poppins" href="/refund-policy"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <p className="text-[16px] frank-poppins leading-[30px]">
                  Refund Policy
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
