import React from "react";
import Link from "next/link";
import Container from "../components/common/Container";
import ScheduleMeeting from "../components/schedule-meeting/ScheduleMeeting";

const RequestDemo = () => {

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[450px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="text-[48px] text-white font-frank">Request a Demo</h1>
                        <div className="flex justify-center gap-3">
                            <Link href="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">Request a Demo</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="we-always md:py-[80px] py-12">

                <Container>
                    <div className="text-center px-4 md:px-0">
                        <h2 className="text-black text-[28px] md:text-[48px] font-frank">
                            Schedule a Demo Call, No Strings Attached!
                        </h2>
                        <p className="text-base leading-[26px] text-black font-poppins max-w-full md:max-w-[836px] m-auto mt-4 md:mt-0">
                            Demo calls are typically 15 minutes and offer a comprehensive overview of our features and benefits. Demo calls grant you access to a one month free trial.
                        </p>
                    </div>

                    <div>
                        <ScheduleMeeting />
                    </div>

                    <div className="contact-form flex flex-col md:flex-row max-w-full md:max-w-[1070px] m-auto mt-[40px] md:mt-[67px] px-4 md:px-0">
                        <div className="w-full md:w-1/2 md:pr-24">
                            <h2 className="text-black text-[24px] md:text-[35px] font-frank">
                                Contact Information
                            </h2>
                            <p className="text-base leading-[26px] text-black font-poppins max-w-full md:max-w-[836px] m-auto mt-4 md:mt-0">
                                We’d love to hear from you. Just give us a call or fill out the form here and let’s chat!
                            </p>

                            <Link href="tel:747-200-7091" className="w-full md:text-xl text-lg font-poppins flex mt-[30px] md:mt-[60px]">
                                <img src="/images/call.svg" alt="Call icon" className="mr-[20px] md:w-[46px] w-[36px]" /> (747) 200-7091
                            </Link>
                            <Link
                                href="https://maps.app.goo.gl/jQK5Za39k5DuLiAV8"
                                target="_blank"
                                className="w-full md:text-xl text-lg font-poppins flex mt-[25px] md:mt-[39px]"
                            >
                                <img src="/images/location.svg" alt="Location icon" className="mr-[20px] md:w-[46px] w-[36px]" /> 1500 Rosecrans Ave
                                <br /> Suite 500
                                <br /> Manhattan Beach, CA 90266
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 mt-8 md:mt-0">
                            <div className="form-box py-[30px] px-[20px] md:py-[40px] md:px-[30px] shadow-custom3 rounded-3xl">
                                <form action="post">
                                    <div className="form-group">
                                        <input
                                            placeholder="First Name"
                                            type="text"
                                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group mt-4 md:mt-5">
                                        <input
                                            placeholder="Last Name"
                                            type="text"
                                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group mt-4 md:mt-5">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group mt-4 md:mt-5">
                                        <select
                                            className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-14px)_center] appearance-none w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        >
                                            <option value="Sales Inquiry">Sales Inquiry</option>
                                            <option value="Support Inquiry">Support Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-4 md:mt-5">
                                        <textarea
                                            placeholder="Message"
                                            rows={3}
                                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group mt-4 md:mt-5">
                                        <button
                                            type="submit"
                                            className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[150px] md:min-w-[200px] min-h-[40px] md:min-h-[56px] leading-[40px] md:leading-[56px] inline-block text-center rounded-[50px] font-poppins"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="pb-[2rem]">
                <Container>
                    <iframe
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] md:rounded-[20px]"
                        loading="lazy"
                        src="https://maps.google.com/maps?q=1500%20Rosecrans%20Ave%20Suite%20500%20Manhattan%20Beach%2C%20CA%2090266&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near"
                        title="1500 Rosecrans Ave Suite 500 Manhattan Beach, CA 90266"
                        aria-label="1500 Rosecrans Ave Suite 500 Manhattan Beach, CA 90266"
                    ></iframe>
                </Container>
            </div>

        </>
    );
};

export default RequestDemo;