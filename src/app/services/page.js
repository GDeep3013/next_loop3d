import React from "react";
import Container from "../components/common/Container";
import PartnerSlider from "../components/common/PartnerSlider";
import ImageSlider from "../components/common/ImageSlider";
import Insights from "../components/common/Insights";

const Services = () => {

    return (
        <>
            <div className="about-banner bg-[url('/images/service-banner.webp')] bg-cover bg-repeat lg:h-custom-height lg:min-h-auto min-h-[600px] flex items-center md:bg-left bg-center lg:pt-0 pt-16">
                <Container>
                    <div className="about-text text-left max-w-[400px] lg:max-w-[550px] xl:max-w-[720px] ml-[auto]">
                        <h1 className="xl:text-[70px] text-white font-frank text-4xl">Why LOOP3D?</h1>
                        <ul className="pl-[18px] mt-5">
                            <li className="text-base list-disc leading-[26px] text-white font-poppins"> Enhance Employee Performance </li>
                            <li className="text-base list-disc leading-[26px] text-white font-poppins mt-2"> Outshine the Competition </li>
                            <li className="text-base list-disc leading-[26px] text-white font-poppins mt-2"> Build a High Performing Organization </li>
                        </ul>
                        <p className="text-base leading-[26px] text-white font-poppins mt-3">Click on the link below for us to better understand your needs and walk through a demo of the Looped 360 Feedback process.</p>
                        <a href="/contact" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins mt-[38px]">Request a Demo</a>
                    </div>

                </Container>
            </div>

            <div className="building-peak lg:py-[80px] py-12 max-[1024px]:overflow-hidden">
                <Container>
                    <div className="building-peak-heading text-center">
                        <h2 className="text-[#174a6d] text-3xl min-[1025px]:text-[48px] font-frank">Building peak performance cultures at top organizations</h2>
                    </div>
                    <PartnerSlider />
                </Container>
            </div>

            <div className="built-science lg:pb-[80px] pb-0">
                <div className="lg:flex items-center">
                    <div className="lg:w-1/2 w-full lg:px-0 px-[60px] lg:pb-0 pb-[40px]">
                        <ImageSlider />
                    </div>
                    <div className="lg:w-1/2 w-full bg-custom-bg lg:py-[80px] py-12 lg:px-[50px] px-8 lg:mt-0 mt-4">
                        <div className="max-w-[671px]">
                            <h2 className="text-black lg:text-[48px] text-4xl font-frank">Built with Science</h2>
                            <p className="lg:text-base leading-[26px] text-black font-poppins mt-2 text-sm">Our competencies and survey items are research-based, which are designed to reflect the critical skills and behaviors of future leaders. They enable leaders to navigate challenges, capitalize on opportunities, and sustain long-term success in a competitive and rapidly evolving business landscape. We offer distinct competencies for both individual contributors and people managers.</p>
                            <div className="flex mt-[47px]">
                                <div className="">
                                    <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">1</h3>
                                </div>
                                <div className="pl-[12px]">
                                    <h4 className="text-black lg:text-[25px] text-[19px] font-frank">Individual Contributors</h4>
                                    <p className="lg:text-base text-sm leading-[26px] text-black font-poppins">Includes competencies essential for individuals who are not in a formal people managerial role, yet play a critical role in completing crucial tasks, projects, or organizational goals.</p>
                                </div>
                            </div>
                            <div className="flex mt-[25px]">
                                <div className="">
                                    <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">2</h3>
                                </div>
                                <div className="pl-[12px]">
                                    <h4 className="text-black lg:text-[25px] text-[19px] font-frank">People Managers</h4>
                                    <p className="lg:text-base text-sm leading-[26px] text-black font-poppins">Includes competencies essential for people managers and entails critical leadership skills to drive high-performing teams and strategic initiatives</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:py-[159px] py-[90px] bg-[url('/images/Real-Insights-Banner.webp')] bg-cover bg-repeat text-center">
                <Container>
                    <Insights />
                </Container>
            </div>

            <div className="built-science">
                <div className="lg:flex">
                    <div className="lg:w-1/2 w-full">
                        <img src="/images/service-1.webp" className="lg:h-lvh object-cover" />
                    </div>
                    <div className="lg:w-1/2 w-full bg-custom-color lg:py-[80px] lg:px-[50px] py-12 px-6 flex items-center">
                        <div className="max-w-[671px]">
                            <h2 className="text-white lg:text-[48px] text-3xl font-frank">Our Services</h2>
                            <p className="lg:text-base text-sm leading-[26px] text-white font-poppins mt-3">We offer a range of services to help businesses enhance their employee feedback process using AI technology.</p>
                            <div className="flex mt-[47px]">
                                <div className="">
                                    <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">1</h3>
                                </div>
                                <div className="pl-[12px]">
                                    <h4 className="text-white lg:text-[25px] text-[19px] font-frank">Customized Surveys</h4>
                                    <p className="lg:text-base text-sm leading-[26px] text-white font-poppins">Tailor your surveys to fit the specific needs of your organization.</p>
                                </div>
                            </div>
                            <div className="flex mt-[25px]">
                                <div className="">
                                    <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">2</h3>
                                </div>
                                <div className="pl-[12px]">
                                    <h4 className="text-white lg:text-[25px] text-[19px] font-frank">AI-Generated Reports</h4>
                                    <p className="lg:text-base text-sm leading-[26px] text-white font-poppins">Receive detailed and actionable feedback reports generated by our AI technology.</p>
                                </div>
                            </div>
                            <div className="flex mt-[25px]">
                                <div className="">
                                    <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">3</h3>
                                </div>
                                <div className="pl-[12px]">
                                    <h4 className="text-white lg:text-[25px] text-[19px] font-frank">Ongoing Support</h4>
                                    <p className="lg:text-base text-sm leading-[26px] text-white font-poppins">Get continuous support to help you maximize the benefits of our feedback tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ready-learn lg:py-[80px] py-12 bg-[url('/images/Ready-to-learn-banner.webp')] bg-cover bg-repeat text-center">
                <Container>
                    <div className="">
                        <h2 className="text-white lg:text-[48px] text-3xl font-frank">Ready to learn more?</h2>
                        <p className="text-base leading-[26px] mt-3 text-white font-poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <a href="/contact" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins mt-[38px]">Request a Demo</a>
                    </div>
                </Container>
            </div>

        </>
    );
};

export default Services;