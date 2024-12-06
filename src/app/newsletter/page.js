'use client'
import React, { useState, useEffect } from "react";
import  Link  from "next/link";
import Container from "../components/common/Container";
import InputField from "../components/common/InputField";

const Newsletter = () => {

    const [email, setEmail] = useState("");

    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[350px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="text-[48px] text-white font-frank">Newsletter</h1>
                        <div className="flex justify-center gap-3">
                            <Link href="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">Newsletter</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="we-always md:py-[80px] max-w-[1100px] m-auto py-12">
                <Container>
                    <div className="px-4 md:px-0">
                        <h2 className="text-black text-[28px] md:text-[48px] font-frank">
                        Newsletter
                        </h2>
                        <p className="text-base leading-[26px] text-black font-poppins max-w-full mt-4 mb-4">
                        Signup for our weekly newsletter and receive the latest trends in not only 360-degree feedback, but all things related to performance, talent, and organizational development. Plus, we include bonus tips and tricks to help you excel within your organization as an organizational leader.
                        </p>

                        <form>
              <InputField
                className="px-4 py-1 placeholder-[#000] mx-auto !w-full min-h-[46px]"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Please enter your email"
              />
              <button
                type="submit"
                className="mt-4 min-w-[138px] min-h-[40px] items-center bg-[#7ABCDB] flex justify-center px-[20px] text-[16px] rounded-full text-white"
              >
                Submit
              </button>
              </form>

                    </div>


                </Container>
            </div>

        </>
    );
};

export default Newsletter;