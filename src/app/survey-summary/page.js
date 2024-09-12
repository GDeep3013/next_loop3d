"use client";
import React, { useState, useEffect } from "react";
import Container from "../components/common/Container";
import { useSearchParams } from 'next/navigation';
import { formatDateGB } from '../utils/dateUtils'
import ChartBar from "../components/survey-summary/ChartBar"

const SurveySummary = () => {
    const searchParams = useSearchParams();
    const survey_id = searchParams.get('survey_id');

    const [completedResponses, setCompletedResponses] = useState({});
    const [totals, setTotals] = useState({});
    const [loader, setLoader] = useState(true);
    const [survey, setSurvey] = useState();
    const [reportData, setReportData]= useState();

    const getSurvey = async (survey_id) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys?survey_id=${survey_id}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                setSurvey(data?.data?.[0]);
                setLoader(false)
            } else {
                console.error('Failed to fetch survey');
                setLoader(false)

            }
        } catch (error) {
            console.error('Error fetching survey:', error);
            setLoader(false)

        }
    };
    const getTotalParticipantsInvited = async (survey_id) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/participants/invited/${survey_id}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                setCompletedResponses(data.completedResponses || {});
                setTotals(data.totals || {});
            } else {
                console.error('Failed to fetch survey');
            }
        } catch (error) {
            console.error('Error fetching survey:', error);
        } finally {
            setLoader(false);
        }
    };
    const generateSurveyReport = async (survey_id) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/generate-report/${survey_id}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                setReportData(data?.report?.categories|| {});
            } else {
                console.error('Failed to fetch survey');
            }
        } catch (error) {
            console.error('Error fetching survey:', error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (survey_id) {
            getTotalParticipantsInvited(survey_id);
            getSurvey(survey_id)
            generateSurveyReport(survey_id)
        }
    }, [survey_id]);


    console.log('report',reportData)

    const Participants = ['Self', 'Direct Report', 'Teammate', 'Supervisor', 'Other'];

    const renderTableRows = (data) => {
        return Participants.map((Participant) => (
            <tr key={Participant}>
                <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">{Participant}</td>
                <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">{data?.totals?.[Participant] || 0}</td>
                <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">{data?.completedResponses?.[Participant] || 0}</td>
            </tr>
        ));
    };

    const renderCharts = () => {
        if (!reportData) return null;
        
        return Object.entries(reportData).map(([competency, data]) => (
            <ChartBar key={competency} competency={competency} data={data} />
        ));
    };

    const totalInvited = Participants.reduce((acc, Participant) => acc + (totals[Participant] || 0), 0);
    const totalCompleted = Participants.reduce((acc, Participant) => acc + (completedResponses[Participant] || 0), 0);
    return (
        <div className="survey-inner pt-[120px] pb-[17rem] md:pb-[24rem] lg:pb-[20px]">
            <Container>
                <div className="survey-container p-6 md:p-10 lg:p-12 xl:p-[50px] m-auto rounded-[20px] lg:rounded-[30px] bg-[#F5F5F5] max-w-full">
                    <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-frank text-center mb-4">
                        LOOP3D 360 Report
                    </h2>
                    <div className="participant-name-looped-360 mt-4">
                        <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                            <strong className="text-[#333] font-extrabold">Participant Name:</strong> {survey?.loop_lead?.first_name}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                            <strong className="text-[#333] font-extrabold">Report Generation Date:</strong> {formatDateGB(survey?.createdAt)}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Welcome to your personalized 360° feedback report...
                        </p>
                        <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                            <strong className="text-[#333] font-extrabold">About Your Report</strong>
                        </p>
                        <h3 className="text-custom-color text-lg md:text-xl lg:text-2xl font-poppins font-extrabold">
                            Total number of responses:
                        </h3>
                        {loader ? (
                            <p>Loading...</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full text-sm md:text-[16px] border border-gray-300 border-collapse mt-6 mb-6">
                                    <thead>
                                        <tr>
                                            <th className="bg-custom-color px-3 md:px-5 py-2 text-left font-poppins text-white font-normal border border-white">Relationship</th>
                                            <th className="bg-custom-color px-3 md:px-5 py-2 text-left font-poppins text-white font-normal border border-white">Participants Invited</th>
                                            <th className="bg-custom-color px-3 md:px-5 py-2 text-left font-poppins text-white font-normal border border-white">Completed Responses</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableRows({ completedResponses, totals })}
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">Total</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">{totalInvited}</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">{totalCompleted}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold">
                            Here are the participants that you invited:
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Here are the competencies that your manager selected as the most important to your role...
                        </p>
                        <ul className="pl-4 sm:pl-6">
                        {survey?.competencies?.map((competency) => (
                            <li className="list-disc font-poppins text-gray-600" key={competency._id}>
                                {competency?.category_name}
                            </li>
                        ))}
                           
                        </ul>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Below is a summary of your results:
                        </p>

                        {/* graph box */}
                        <div className="graph-box mt-5 mb-5">
                        {renderCharts()}
                        </div>

                        <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold">Top Strengths:</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Coaches And Develops
                        </p>

                        <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold">Top Developmental Opportunities:</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Coaches And Develops
                        </p>

                        <h2 className="uppercase font-frank text-custom-color text-[24px] sm:text-[35px]">
                            Summaries by Competency
                        </h2>

                        <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold uppercase">
                            Competency: Coaches And Develops
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            The customer oriented competency is the proactive and empathetic approach leaders take to understand...
                        </p>

                        {/* graph box */}
                        <div className="graph-box mt-5 mb-5"></div>

                        <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold uppercase">
                            Competency: Customer Oriented
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            The customer oriented competency is the proactive and empathetic approach leaders take to understand...
                        </p>

                        {/* graph box */}
                        <div className="graph-box mt-5 mb-5"></div>
                        <h3 className="text-custom-color text-xl sm:text-2xl md:text-3xl font-poppins font-extrabold uppercase mt-6">
                            COMPETENCY: Accountability
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            The customer oriented competency is the proactive and empathetic approach leaders take to understand...
                        </p>
                        {/* graph box */}
                        <div className="graph-box mt-5 mb-5"></div>
                        <h3 className="text-custom-color text-xl sm:text-2xl md:text-3xl font-poppins font-extrabold uppercase mt-6">
                            Summary
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                            Here are the competencies that your manager selected as the most important to your role...
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SurveySummary;
