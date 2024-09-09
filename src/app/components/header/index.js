"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Container from '../common/Container';

const Header = () => {
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        setTopbarVisible(currentScrollY <= lastScrollY); // Scrolling up
      } else {
        setIsScrolled(false);
        setTopbarVisible(true); // Always show topbar when near the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const bgColor = ['/start-survey', '/terms-of-service', '/lead-dashboard', '/feedback-survey', '/register'].includes(pathname)
    ? 'bg-custom-color max-[767px]:bg-white'
    : 'bg-[transparent] max-[767px]:bg-white';

  return (
    <div>
      {/* Topbar */}
      <div className="bg-[#7ABCDB]">
        <Container>
          <div
            className={`flex justify-between items-center py-4 transition-transform duration-300 ease-in-out ${topbarVisible ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="flex space-x-4">
              {/* Social Icons (replace with your SVGs or FontAwesome Icons) */}
              <Link href="#">
                <img
                  className="w-6 h-6"
                  src="/images/header/facebook_icon.svg"
                  alt="Facebook"
                />
              </Link>
              <Link href="#">
                <img
                  className="w-6 h-6"
                  src="/images/header/instagram_icon.svg"
                  alt="Instagram"
                />
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <Link href="#">
                <img
                  className="w-5 h-5"
                  src="/images/header/message_icon.svg"
                  alt="Message"
                />
              </Link>
              <Link href="/contact" className="text-white text-[16px] font-poppins">
                Get in touch with us
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/* Header */}
      <div
        className={`absolute left-0 group right-0 transition-all duration-300 ease-in-out z-10 hover:bg-white hover:text-custom-color ${isScrolled
          ? "bg-white text-gray-900 shadow-md !fixed w-full top-0"
          : `${bgColor} text-white`
          }`}
      >

        <Container>
          <div className="flex justify-between items-center py-[12px]">
            {/* Logo */}
            <Link href="/home">
              <img
                className={`h-[30px] ${isScrolled ? '' : 'max-[767px]:hidden group-hover:hidden'}`}
                src="/images/header/loop3d-logo.webp"
                alt="Logo"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <img
                className={`h-[30px] ${isScrolled ? '' : 'md:hidden group-hover:inline-block'}`}
                src="/images/header/loop3d-logo.webp"
                alt="Logo"
              />
            </Link>

            {/* Nav links */}
            <nav
              className={`${menuOpen ? "block" : "hidden"} lg:flex space-x-8 absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent max-[991px]:py-[20px]`}
            >
              {['/home', '/about', '/services', '/contact'].map((path) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative inline-block mx-4 py-2 lg:py-0 text-[16px] font-poppins
                    ${isActive(path) ? (isScrolled ? 'text-custom-color after:scale-x-100 after:bg-[#174a6d]' : 'text-white after:scale-x-100 after:bg-white') : (isScrolled ? 'text-custom-color' : 'text-white')}
                    hover:text-custom-color group-hover:text-custom-color after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#7ABCDB] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(.58,.3,.005,1)] hover:after:scale-x-100 max-[991px]:w-full max-[991px]:ml-[32px]`}
                >
                  {path === '/home' ? 'Home' : path === '/about' ? 'About Us' : path === '/services' ? 'Services' : 'Contact Us'}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4 items-center">
              {/* Mobile menu button */}
              <button
                className="flex justify-center items-center w-[39px] h-[39px] lg:hidden text-white focus:outline-none bg-[#7ABCDB] p-1 rounded-[3px]"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              {/* Request a Demo button hidden on mobile */}
              <div className="hidden sm:block">
                <Link href="/contact" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] max-[767px]:min-w-[200px] min-h-[56px] max-[767px]:min-h-[46px] leading-[56px] max-[767px]:leading-[46px] inline-block text-center rounded-[50px] font-poppins">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </Container>

      </div>
    </div>
  );
};

export default Header;