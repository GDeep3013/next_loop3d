import React from "react";
import Link from 'next/link';

import Container from "../components/common/Container";

const About = () => {

    return (
        <>
            <div className="about-banner relative bg-[url('/images/about-banner.webp')] bg-repeat bg-center lg:h-custom-height max-[1024px]:min-h-[470px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="lg:text-[70px] text-5xl text-white font-frank">About Us</h1>
                        <div className="flex justify-center gap-3">
                            <Link href="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">About Us</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="about-us xl:py-[80px] py-12">
                <Container>
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/2 w-full pr-[85px] text-center lg:text-left max-[1023px]:pr-0">
                            <h2 className="text-black xl:text-[48px] text-3xl font-frank">About Us</h2>
                            <p className="text-base leading-[26px] text-black font-poppins mt-3">We are dedicated to transforming the 360 feedback process using AI-driven technology to provide personalized, actionable insights for businesses of all sizes. Not only does AI help generate personalized reports almost instantaneously, but we also utilize the essence of artificial intelligence to create ongoing feedback loops with the ongoing feedback from each individual survey. That means the our AI will learn more and more about each employee after each iteration, being able to provide better and better customized feedback each time.</p>
                        </div>
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-5">
                            <img src="/images/about.webp" alt="about us" />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-custom-bg xl:pt-[80px]  pb-[2rem] pt-12 ">
                <Container className="relative">
                    <div className="absolute bg-black w-[1px] left-[50%] translate-x-[-50%] h-full hidden md:inline-block"></div>
                    <div className="flex md:flex-nowrap flex-wrap relative flex-col-reverse md:flex-row items-center">
                        <div className="w-full max-w-[620px] relative md:pt-[22px] pt-12">
                            <div className="bg-white xl:py-[95px] xl:px-[70px] p-10 md:text-left text-center">
                                <h2 className="text-black xl:text-[48px] text-[25px] font-frank">Our Mission</h2>
                                <p className="xl:text-base text-sm leading-[26px] text-black font-poppins">To revolutionize employee feedback by making it concise, relevant, and impactful.</p>
                            </div>
                            <div className="absolute right-[-18px] top-[50%] translate-y-[-50%] rotate-[45deg] bg-white w-9 h-9 hidden md:inline-block"></div>
                        </div>
                        <div className="w-full max-w-[203px] text-center relative">
                            <span className="w-[50px] h-[50px] rounded-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] t bg-custom-color hidden md:inline-block"></span>
                        </div>
                        <div className="w-full max-w-[620px]">
                            <img src="/images/mission.webp" alt="Misson image" />
                        </div>
                    </div>
                    <div className="md:flex md:pt-[97px] pt-12 items-center">
                        <div className="w-full max-w-[620px] m-auto md:m-0">
                            <img src="/images/vision.webp" alt="Misson image" />
                        </div>

                        <div className="w-full max-w-[203px] text-center relative">
                            <span className="w-[50px] h-[50px] rounded-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] t bg-custom-color hidden md:inline-block"></span>
                        </div>

                        <div className="w-full max-w-[620px] relative m-auto md:m-0 md:pt-[0] pt-12">
                            <div className="bg-white xl:py-[95px] xl:px-[70px] p-10 md:text-left text-center">
                                <h2 className="text-black xl:text-[48px] text-[25px] font-frank">Our Vision</h2>
                                <p className="xl:text-base text-sm leading-[26px] text-black font-poppins">To create a work environment where feedback is a powerful tool for growth and development.</p>
                            </div>
                            <div className="absolute left-[-18px] top-[50%] translate-y-[-50%] rotate-[45deg] bg-white w-9 h-9 hidden md:inline-block"></div>
                        </div>

                    </div>
                </Container>
            </div>

        </>
    );
};

export default About;