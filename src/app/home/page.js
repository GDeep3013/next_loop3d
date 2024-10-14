import Image from "next/image";

import React from "react";
import Container from "../components/common/Container";
import PartnerSlider from "../components/common/PartnerSlider/index.jsx";
import BannerVideo from "../components/common/BannerVideo";


const Home = () => {

    return (
        <>
            <div className="hero-banner bg-[url('/images/banner-bg.webp')] bg-repeat lg:h-[calc(100vh-56px)] flex items-center bg-center bg-cover relative">
                <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div>
                <Container className="relative z-[1] px-4 py-8 lg:py-16">
                    <div className="xl:flex items-center">
                        <div className="xl:w-1/2 w-full">
                            <div className="banner-text max-w-[90%] mx-auto xl:mx-0 xl:pt-0 pt-12">
                                <h1 className="text-4xl xl:text-5xl 2xl:text-7xl text-white font-frank xl:leading-[90px] leading-[45px] text-center xl:text-left xl:max-w-none max-w-[405px] mx-auto xl:mx-0">
                                    Revolutionize Your 360 Feedback Process with AI
                                </h1>
                                <div className="banner-buttons mt-8 flex flex-col gap-4 items-center xl:flex-row xl:gap-8 xl:justify-start xl:mt-12">
                                    <a
                                        href="/contact"
                                        className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[212px] h-[56px] flex items-center justify-center leading-[56px] rounded-full font-poppins"
                                    >
                                        Request a Demo
                                    </a>
                                    <a
                                        href="/services"
                                        className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[212px] h-[56px] flex items-center justify-center leading-[56px] rounded-full font-poppins"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/2 w-full text-center xl:text-right mt-8 xl:mt-0">
                            <BannerVideo />
                        </div>
                    </div>
                </Container>
            </div>


            <div className="building-peak py-12 min-[1025px]:py-[80px] bg-[#f5f5f5] max-[1024px]:overflow-hidden">
                <Container>

                    <div className="building-peak-heading text-center mb-4 md:mb-8">
                        <h2 className="text-[#174a6d] text-3xl min-[1025px]:text-[48px] font-frank">Building peak performance cultures at top organizations</h2>
                    </div>

                    <PartnerSlider />

                </Container>
            </div>

            <div className="feedback-process py-12 min-[1025px]:py-[80px]">
                <Container>
                    <div className="feedback-heading text-center">
                        <h2 className="text-black text-3xl min-[1025px]:text-[48px] font-frank">Steps For Feedback Process with AI</h2>
                        <p className="text-base leading-[26px] text-black max-w-[813px] font-poppins m-auto mt-3">LOOP3D 360 Feedback was designed by doctoral degrees professionals in Organizational Psychology with extensive experience working with Fortune 100 companies. LOOP3D was developed to enhance performance and people development through simplified, relevant, and smart feedback loops, all powered through artificial intelligence.</p>
                    </div>
                    <div className="feedback-list mt-12">
                        <div className="md:flex gap-x-7">
                            <div className="md:w-1/3 w-full">
                                <div className="feedback-box relative rounded-[20px] overflow-hidden max-[767px]:max-w-[450px] max-[767px]:m-auto">
                                    <div className="feedback-img">
                                        <img src="/images/Short-Engaging-Surveys.webp" alt="feedback img" width={"auto"}
                                            height={"auto"} />
                                    </div>
                                    <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px] max-[1024px]:pt-6 max-[1024px]:px-6">
                                        <h3 className="text-[25px] text-white font-frank max-[1024px]:leading-[33px]">Short, Engaging Surveys</h3>
                                        <p className="text-base text-white font-poppins mt-4">Encourage regular participation with our concise and effective surveys.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full max-[767px]:mt-7">
                                <div className="feedback-box relative rounded-[20px] overflow-hidden max-[767px]:max-w-[450px] max-[767px]:m-auto">
                                    <div className="feedback-img">
                                        <img src="/images/AI-Generated-Questions-1.webp" width={"auto"}
                                            height={"auto"} alt="feedback img" />
                                    </div>
                                    <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px] max-[1024px]:pt-6 max-[1024px]:px-6">
                                        <h3 className="text-[25px] text-white font-frank max-[1024px]:leading-[33px]">AI-Generated Questions</h3>
                                        <p className="text-base text-white font-poppins mt-4">Tailor questions to your organization's unique needs with our AI-driven technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full max-[767px]:mt-7">
                                <div className="feedback-box relative rounded-[20px] overflow-hidden max-[767px]:max-w-[450px] max-[767px]:m-auto">
                                    <div className="feedback-img">
                                        <img src="/images/Personalized-AI-Reports.webp" width={"auto"}
                                            height={"auto"} alt="feedback img" />
                                    </div>
                                    <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px] max-[1024px]:pt-6 max-[1024px]:px-6">
                                        <h3 className="text-[25px] text-white font-frank max-[1024px]:leading-[33px]">Personalized AI Reports</h3>
                                        <p className="text-base text-white font-poppins mt-4">Receive specific, actionable feedback reports for each employee, generated by AI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="how-works bg-[#f5f5f5] pt-12 md:pt-20 pb-[2rem]">
                <Container>
                    <div className="xl:flex xl:space-x-8">
                        <div className="w-full xl:w-1/2 xl:pr-8 text-center xl:text-left">
                            <h2 className="text-black text-3xl md:text-4xl xl:text-5xl font-frank mb-4">How It Works</h2>
                            <p className="text-base md:text-lg xl:text-xl leading-relaxed text-black font-poppins mb-8 max-w-full sm:max-w-lg md:max-w-xl mx-auto xl:mx-0">
                                Our process is designed to be flexible and adaptable to your needs, providing personalized feedback and insights to help you achieve your organizational goals.
                            </p>
                            <div className="work-img mb-8">
                                <img
                                    className="border-solid border-white border-[9px] rounded-[30px] shadow-custom-mobile xl:shadow-custom lg:max-w-full mx-auto max-w-[80%] md:max-w-[500px] "
                                    src="/images/work.webp"
                                    alt="work image"
                                />
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 space-y-6 xl:space-y-8 mt-[6rem] xl:mt-0">
                            <div className="work-listing group flex flex-col md:flex-row py-5 px-6 rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-6 max-w-full mx-auto">
                                <div className="work-count mr-6">
                                    <h3 className="text-3xl md:text-4xl xl:text-5xl text-[#aabdca] group-hover:text-white font-frank">01</h3>
                                </div>
                                <div className="work-content">
                                    <h4 className="text-lg md:text-xl xl:text-2xl text-custom-color font-frank group-hover:text-white">Customize Your Survey</h4>
                                    <p className="text-sm md:text-base text-custom-color font-poppins group-hover:text-white mt-2">Use our intuitive platform to create a survey tailored to your organization's needs.</p>
                                </div>
                            </div>
                            <div className="work-listing group flex flex-col md:flex-row py-5 px-6 rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-6 max-w-full mx-auto">
                                <div className="work-count mr-6">
                                    <h3 className="text-3xl md:text-4xl xl:text-5xl text-[#aabdca] group-hover:text-white font-frank">02</h3>
                                </div>
                                <div className="work-content">
                                    <h4 className="text-lg md:text-xl xl:text-2xl text-custom-color font-frank group-hover:text-white">AI-Generated Questions</h4>
                                    <p className="text-sm md:text-base text-custom-color font-poppins group-hover:text-white mt-2">Our AI analyzes your inputs and generates relevant, targeted questions.</p>
                                </div>
                            </div>
                            <div className="work-listing group flex flex-col md:flex-row py-5 px-6 rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-6 max-w-full mx-auto">
                                <div className="work-count mr-6">
                                    <h3 className="text-3xl md:text-4xl xl:text-5xl text-[#aabdca] group-hover:text-white font-frank">03</h3>
                                </div>
                                <div className="work-content">
                                    <h4 className="text-lg md:text-xl xl:text-2xl text-custom-color font-frank group-hover:text-white">Collect Feedback</h4>
                                    <p className="text-sm md:text-base text-custom-color font-poppins group-hover:text-white mt-2">Distribute the survey to your employees and collect their feedback easily and anonymously.</p>
                                </div>
                            </div>
                            <div className="work-listing group flex flex-col md:flex-row py-5 px-6 rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-6 max-w-full mx-auto">
                                <div className="work-count mr-6">
                                    <h3 className="text-3xl md:text-4xl xl:text-5xl text-[#aabdca] group-hover:text-white font-frank">04</h3>
                                </div>
                                <div className="work-content">
                                    <h4 className="text-lg md:text-xl xl:text-2xl text-custom-color font-frank group-hover:text-white">AI-Generated Reports</h4>
                                    <p className="text-sm md:text-base text-custom-color font-poppins group-hover:text-white mt-2">Receive detailed reports with actionable insights tailored to each employee.</p>
                                </div>
                            </div>
                            <div className="work-listing group flex flex-col md:flex-row py-5 px-6 rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-6 max-w-full mx-auto">
                                <div className="work-count mr-6">
                                    <h3 className="text-3xl md:text-4xl xl:text-5xl text-[#aabdca] group-hover:text-white font-frank">05</h3>
                                </div>
                                <div className="work-content">
                                    <h4 className="text-lg md:text-xl xl:text-2xl text-custom-color font-frank group-hover:text-white">Continuous Improvement</h4>
                                    <p className="text-sm md:text-base text-custom-color font-poppins group-hover:text-white mt-2">Use the insights to drive continuous improvement and enhance employee performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-buttons mt-12 md:mt-16 flex flex-col md:flex-row justify-center gap-4">
                        <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] h-[46px] flex items-center justify-center leading-[46px] rounded-full font-poppins m-auto lg:m-0">Request a Demo</a>
                        <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] h-[46px] flex items-center justify-center leading-[46px] rounded-full font-poppins m-auto lg:m-0">Learn More</a>
                    </div>
                </Container>
            </div>


        </>
    )
};

export default Home;