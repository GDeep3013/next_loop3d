'use client'
import React, { useState,useEffect } from "react";
import Container from "../components/common/Container";
import { useSearchParams, useRouter } from 'next/navigation';
import ParticipantForm from '../components/leadDashboard/ParticipantForm'

const LeadDashboard = () => {
    
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [survey, setSurvey] = useState();
    const getSurvey = async (survey_id) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys?survey_id=${survey_id}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                setSurvey(data?.data?.[0])
            
            } else {
                console.error('Failed to fetch assignments');
                return false;
            }
        } catch (error) {
            console.error('Error fetching assignments:', error);
            return false;
        }
    };

    useEffect(() => {
      
        if (token) {
            getSurvey(token);
        }
 
    }, [token]);

    return (
        <div>
            <div className="lunchpad pt-[6rem] md:pt-[162px] pb-[80px]">
                    <Container>
                        <div className="flex flex-col lg:flex-row lg:gap-[206px] gap-[30px]">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-black text-[36px] lg:text-[48px] font-frank">Loop3d Launchpad</h2>
                                <p className="text-base leading-[26px] text-black max-w-full lg:max-w-[813px] font-poppins mt-4 lg:mt-0">
                                    Welcome! Use this page to enter the email addresses for everyone who you would like to take the survey. Please note that your email and your manager's email are required along with a minimum of 10 other raters.
                                </p>

                                <div className="teammate mt-[20px] lg:mt-[42px] bg-[#F2F8FB] py-[20px] px-[18px] rounded-xl">
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Teammate -</strong> People on your team and level who report to the same supervisor.
                                    </p>
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Direct Reports -</strong> People who report directly into you
                                    </p>
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Other -</strong> Includes customers, clients, vendors, etc. whom you regularly work with.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-black text-[20px] lg:text-[25px] font-frank">Step 1:</h2>
                                <p className="text-sm leading-[26px] text-black max-w-full lg:max-w-[813px] font-poppins mt-2 lg:mt-0">
                                    Enter your email address and your manager's email address
                                </p>

                                <form method="post" className="mt-4 lg:mt-[20px]">
                                    <div className="form-group">
                                        <input placeholder="First Name" type="email" name="employee_email" value={survey?.manager?.email} disabled required className="w-full border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins bg-[#F2F8FB]" />
                                    </div>
                                    <div className="form-group mt-[20px]">
                                        <input placeholder="First Name" type="email" name="employee_email" value={survey?.loop_lead?.email} disabled required className="w-full bg-[#F2F8FB] border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins" />
                                    </div>
                                </form>

                                <h2 className="text-black text-[20px] lg:text-[25px] font-frank mt-[20px] lg:mt-[28px]">Competencies:</h2>
                                <ul className="pl-[20px] lg:pl-[30px] mt-2">
                                {survey?.competencies?.map((competency) => (
                                        <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2" key={competency._id}>
                                            {competency?.category_name}
                                        </li>
                                    ))}
                                   
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            <ParticipantForm survey_id={token} />
        </div>
    );
};

export default LeadDashboard;
