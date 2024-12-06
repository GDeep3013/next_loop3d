'use client'
import React, { useState } from "react";
import Link from "next/link";
import Container from "../components/common/Container";

const Pricing = () => {

    const [singleQuantity, setSingleQuantity] = useState(1);
    const [unlimitedQuantity, setUnlimitedQuantity] = useState(1);

    const handleDecrease = (type) => {
        if (type === "single" && singleQuantity > 1) {
            setSingleQuantity(singleQuantity - 1);
        } else if (type === "unlimited" && unlimitedQuantity > 1) {
            setUnlimitedQuantity(unlimitedQuantity - 1);
        }
    };

    const handleIncrease = (type) => {
        if (type === "single") {
            setSingleQuantity(singleQuantity + 1);
        } else if (type === "unlimited") {
            setUnlimitedQuantity(unlimitedQuantity + 1);
        }
    };

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[350px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="text-[48px] text-white font-frank">Pricing</h1>
                        <div className="flex justify-center gap-3">
                            <Link href="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">Pricing</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="we-always md:py-[80px] max-w-[1200px] m-auto py-12">
                <Container>
                    <h2 className="text-black text-[28px] md:text-[48px] font-frank">
                        Pricing
                    </h2>
                    <p className="text-base leading-[26px] text-black font-poppins max-w-full mt-4 mb-4">
                        Ready to get started with our A.I. powered 360 feedback? Simply enter the number of employees you would like to signup and then click “Add to Cart”. Not sure how many employees to start with? You can always start with 1 and then add more later.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
                        {/* Single 360 Review Card */}
                        <div className="bg-gray-800 text-white rounded-lg shadow-md flex-1">
                            <h2 className="text-2xl font-semibold rounded-t-lg text-center bg-[#222222] py-[14px] px-[18px]">Single 360 Review</h2>
                            <div className="text-center py-[14px] px-[18px] bg-[#2e2e2e]">
                                <p className="text-7xl font-normal">$499</p>
                                <p className="text-blue-300 mt-2">One Time</p>
                                <p className="text-sm text-gray-400 mt-3">Per Employee</p>
                            </div>
                            <ul className="text-gray-300 bg-[#f5f5f5] text-center">
                                <li className="flex text-black items-center font-poppins gap-2 py-3 border-b border-[#d3d3d3] justify-center">
                                    <span className="text-black">&#10003;</span> 360-Feedback Reviews/Quarter: x1
                                </li>
                                <li className="flex text-black items-center font-poppins gap-2 py-3 border-b border-[#d3d3d3] justify-center">
                                    <span className="text-black">&#10007;</span> A.I. Development Coach: Not Available
                                </li>
                                <li className="flex text-black items-center font-poppins gap-2 py-3 justify-center">
                                    <span className="text-black">&#10007;</span> Development Planning Tool: Not Available
                                </li>
                            </ul>
                            <div className="flex items-center justify-center bg-white py-3">
                                <p className="text-black text-lg mr-3 font-poppins">Quantity:</p>
                                <button
                                    className="bg-custom-color2 font-poppins text-white px-5 py-2 text-lg"
                                    onClick={() => handleDecrease("single")}
                                >
                                    -
                                </button>
                                <span className="text-center font-poppins text-black border-t border-b border-[#ccc] min-w-[60px] pt-[9px] pb-[9px]">{singleQuantity}</span>
                                <button
                                    className="bg-custom-color2 font-poppins text-white px-5 py-2 text-lg"
                                    onClick={() => handleIncrease("single")}
                                >
                                    +
                                </button>
                            </div>
                            <button className="w-full font-poppins bg-custom-color2 hover:bg-custom-color text-xl text-white py-4 rounded-b-lg">
                                Add to Cart
                            </button>
                        </div>
                        {/* Unlimited Card */}
                        <div className="bg-gray-800 text-white rounded-lg shadow-md flex-1">
                            <h2 className="text-2xl font-semibold rounded-t-lg text-center bg-[#222222] py-[14px] px-[18px] relative">Unlimited
                                <img src="images/rpt_recommended.png" alt="rpt_recommended" className="absolute top-3 right-3"/>
                            </h2>
                            <div className="text-center py-[14px] px-[18px] bg-[#2e2e2e]">
                                <p className="text-7xl font-normal">$199</p>
                                <p className="text-blue-300 mt-2">Per Month/Employee</p>
                                <p className="text-sm text-gray-400 mt-3">*3-Month Minimum Commitment Required</p>
                            </div>
                            <ul className="text-gray-300 bg-[#f5f5f5] text-center">
                                <li className="flex text-black items-center font-poppins gap-2 py-3 border-b border-[#d3d3d3] justify-center">
                                    <span className="text-black">&#10003;</span> 360-Feedback Reviews/Quarter: x1
                                </li>
                                <li className="flex text-black items-center font-poppins gap-2 py-3 border-b border-[#d3d3d3] justify-center">
                                    <span className="text-black">&#10007;</span> A.I. Development Coach: Not Available
                                </li>
                                <li className="flex text-black items-center font-poppins gap-2 py-3 justify-center">
                                    <span className="text-black">&#10007;</span> Development Planning Tool: Not Available
                                </li>
                            </ul>
                            <div className="flex items-center justify-center bg-white py-3">
                                <p className="text-black text-lg mr-3 font-poppins">Quantity:</p>
                                <button
                                    className="bg-custom-color2 font-poppins text-white px-5 py-2 text-lg"
                                    onClick={() => handleDecrease("single")}
                                >
                                    -
                                </button>
                                <span className="text-center font-poppins text-black border-t border-b border-[#ccc] min-w-[60px] pt-[9px] pb-[9px]">{singleQuantity}</span>
                                <button
                                    className="bg-custom-color2 font-poppins text-white px-5 py-2 text-lg"
                                    onClick={() => handleIncrease("single")}
                                >
                                    +
                                </button>
                            </div>
                            <button className="w-full font-poppins bg-custom-color2 hover:bg-custom-color text-xl text-white py-4 rounded-b-lg">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <p className="text-base leading-[26px] text-black font-poppins max-w-full mt-4 mb-4 text-center">Does your organization have more than 100 employees? Give us a call or reach out via our <Link href="/contact" className="text-custom-color2"> contact form</Link> for bulk discount pricing.</p>

                    <div className="py-10 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex">
                                <div className="risk-free-content w-full pr-5">
                                    <h2 className="text-5xl font-frank text-gray-800 mb-4">Risk-free 30 day money back guarantee</h2>
                                    <p className="text-gray-600 mb-6">
                                        We guarantee that you’ll absolutely love LOOP3D, and if for some reason you decide later that it’s not a fit for you or your organization,
                                        then we’ll happily cancel your account without any penalties and refund your account. No questions asked.
                                    </p>
                                </div>
                                <div className="risk-free-img w-full max-w-[300px]">
                                    <div className="flex justify-center items-center space-x-6">
                                        <img src="images/MoneyBackGuarantee.png" alt="Money Back Guarantee Badge" className="max-w-full" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-base leading-[26px] text-black font-poppins max-w-full my-7 text-center">
                                Want to learn more before signing up? Schedule a demo call, and we’re happy to show you how everything works!
                            </p>
                            <div className="text-center">
                            <Link href="/request-demo" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] max-[767px]:min-w-[200px] min-h-[56px] max-[767px]:min-h-[46px] leading-[56px] max-[767px]:leading-[46px] inline-block text-center rounded-[50px] font-poppins m-auto">Schedule Demo Call</Link>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>

        </>
    );
};

export default Pricing;