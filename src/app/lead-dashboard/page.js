'use client'
import React, { useState } from "react";
import Container from "../components/common/Container";

const LeadDashboard = () => {

    const ParticipantForm = () => {
        const [participants, setParticipants] = useState(Array.from({ length: 10 }, (_, i) => i + 1));

        const addParticipant = () => {
            setParticipants([...participants, participants.length + 1]);
        };

        const removeParticipant = (indexToRemove) => {
            setParticipants(participants.filter((_, index) => index !== indexToRemove));
        };

        return (
            <>
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
                                        <input placeholder="First Name" type="email" name="employee_email" value="demo123@gmail.com" disabled required className="w-full border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins bg-[#F2F8FB]" />
                                    </div>
                                    <div className="form-group mt-[20px]">
                                        <input placeholder="First Name" type="email" name="employee_email" value="demo321lab@gmail.com" disabled required className="w-full bg-[#F2F8FB] border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins" />
                                    </div>
                                </form>

                                <h2 className="text-black text-[20px] lg:text-[25px] font-frank mt-[20px] lg:mt-[28px]">Competencies:</h2>
                                <ul className="pl-[20px] lg:pl-[30px] mt-2">
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Accountability</li>
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Builds Relationships</li>
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Drives Results</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="step2 py-10 md:py-[80px] mb-[30rem] md:mb-[37rem] lg:mb-[16rem] bg-custom-color2">
                    <Container>
                        <h2 className="text-white text-3xl lg:text-4xl font-frank">Step 2:</h2>
                        <p className="text-white font-poppins mt-3">Enter a minimum of 10 participants whom you would like to invite to take your 360 survey.</p>
                        <form method="post" className="mt-8">
                            <div className="participant bg-custom-color py-6 md:py-[35px] px-4 md:px-[15px] rounded-t-2xl flex-wrap md:flex-nowrap hidden md:flex">
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Participant :</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">First Name</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Last Name</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Email</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Relationship:</label>
                                </div>
                            </div>

                            {participants.map((participant, index) => (
                                <div key={index} className="participant bg-[#f2f8fb]">
                                    <div className="inner border-b border-custom-color2 bg-[#F2F8FB] flex flex-wrap md:flex-nowrap items-center">
                                        <div className="form-group w-full text-center py-3 md:py-[20px] px-4 md:px-[16px]">
                                            <label className="participant-head text-[19px] xl:text-[27px] text-black font-frank">
                                                Participant {index + 1}:
                                            </label>
                                        </div>
                                        <div className="form-group w-full bg-white py-4 md:py-[20px] px-4 md:px-[16px]">
                                            <input
                                                placeholder="First Name"
                                                type="text"
                                                className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                            />
                                        </div>
                                        <div className="form-group w-full py-4 md:py-[20px] px-4 md:px-[16px]">
                                            <input
                                                placeholder="Last Name"
                                                type="text"
                                                className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                            />

                                        </div>
                                        <div className="form-group w-full bg-white py-4 md:py-[20px] px-4 md:px-[16px]">
                                            <input
                                                placeholder="Email"
                                                type="text"
                                                className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                            />
                                        </div>
                                        <div className="form-group w-full py-4 md:py-[20px] px-4 md:px-[16px]">
                                            <select
                                                className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-10px)_center] xl:bg-[position:calc(100%-30px)_center] w-full appearance-none border border-custom-color2 leading-10 xl:leading-[62px] min-h-10 xl:min-h-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-sm xl:text-base font-poppins"
                                            >
                                                <option value="">Select</option>
                                                <option value="Direct Report">Direct Report</option>
                                                <option value="Teammate">Teammate</option>
                                                <option value="Supervisor">Supervisor</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    {index >= 10 && (
                                        <div className="form-group border-b border-custom-color2 w-full text-right">
                                            <button
                                                type="button"
                                                onClick={() => removeParticipant(index)}
                                                className="text-red-500 p-4 md:p-[15px]"
                                            >
                                                Remove this Participant
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="form-group mt-4 text-center">
                                <button
                                    type="button"
                                    onClick={addParticipant}
                                    className="bg-custom-color text-white py-2 px-4 rounded"
                                >
                                    Add Another Participant
                                </button>
                            </div>
                        </form>
                    </Container>
                </div>


            </>
        );
    };

    return (
        <div>
            <ParticipantForm />
        </div>
    );
};

export default LeadDashboard;
