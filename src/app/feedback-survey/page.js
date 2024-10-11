'use client'
import React, { useState, useEffect } from "react";
import Container from "../components/common/Container";
import { useSearchParams } from 'next/navigation';

const Survey = () => {
    const searchParams = useSearchParams();
    const survey_id = searchParams.get('survey_id');
    const participant_id = searchParams.get('participant_id');
    const [errors, setErrors] = useState({});

    const [survey, setSurvey] = useState();
    const [participant, setParticipants] = useState();
    const [responses, setResponses] = useState({});
    const [loader, setLoader] = useState(true);

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
            // setLoader(false)

        }
    };

    const getSurveyParticipantById = async (participant_id) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/participants?survey_id=${survey_id}&participant_id=${participant_id}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                setParticipants(data?.data?.[0]);
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

    useEffect(() => {
        if (survey_id && participant_id) {
            getSurveyParticipantById(participant_id);
            getSurvey(survey_id);
        }
    }, [survey_id, participant_id]);

    const handleOptionChange = (questionId, optionId) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [questionId]: { optionId }
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [questionId]: ''  // Clear error on valid selection
        }));
    };

    const handleTextChange = (questionId, answer) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [questionId]: { answer }
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [questionId]: answer.length < 50 ? 'Answer must be at least 50 characters long.' : ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors = {};

        // Validate all questions
        survey?.questions?.forEach((question) => {
            const response = responses[question?._id];

            if (question?.questionType === 'Radio' && (!response || !response.optionId)) {
                newErrors[question?._id] = 'This question is required.';
                formIsValid = false;
            }

            if (question?.questionType === 'Text' && (!response || !response.answer || response?.answer.length < 50)) {
                newErrors[question?._id] = 'Answer must be at least 50 characters long.';
                formIsValid = false;
            }
        });

        setErrors(newErrors);

        if (!formIsValid) {
            return;
        }
        const payload = {
            survey_id,
            participant_id,
            answers: Object.entries(responses).map(([questionId, answer]) => ({
                questionId,
                ...answer
            }))
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/answers/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                window.location.reload()
            } else {
                console.error('Failed to submit survey');

            }
        } catch (error) {
            console.error('Error submitting survey:', error);

        }
    };

    const renderQuestion = (question, index) => {
        if (question?.questionType === 'Radio') {
            return (
                <div key={question._id}>
                    <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3">
                        {question.questionText}
                    </p>
                    <div className="survey-options mt-2">
                        {question?.options.map((option, optIndex) => (
                            <label key={option._id} className="w-full inline-block mb-1 font-poppins">
                                <input
                                    className="mr-3"
                                    type="radio"
                                    name={`question_${index}`}
                                    onChange={() => handleOptionChange(question._id, option._id)}
                                    required
                                />
                                {option.text}
                            </label>
                        ))}
                        {errors[question?._id] && <p className="text-red-500">{errors[question?._id]}</p>}

                    </div>
                </div>
            );
        } else if (question?.questionType === 'Text') {
            return (
                <div key={question?._id}>
                    <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3">
                        {question.questionText}
                    </p>
                    <div className="survey-options mt-2">
                        <textarea
                            className="w-full p-2 border rounded-lg"
                            name={`question_${index}`}
                            rows="3"
                            onChange={(e) => handleTextChange(question?._id, e.target.value)}
                            required
                        ></textarea>
                        {errors[question?._id] && <p className="text-red-500">{errors[question?._id]}</p>}

                    </div>
                </div>
            );
        }
        return null;
    };
    const SurveyCompletedMessage = () => (
        <Container className="my-[10rem]">
        <div className="lg:max-w-[1080px] mx-auto bg-white rounded-[20px] mb-[18rem] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
            <h1 className="text-[38px] md:text-[48px] mb-5 text-center font-frank">Survey Completed</h1>
            <p className="text-center text-[16px] font-poppins">You have completed the survey. Thank you for your input!</p>
        </div>
    </Container>
    );
return (
    <>
        {loader ? (
            <Container className="my-[10rem]">
                <div className="loader py-20 w-full text-center">
                    <img className="m-auto animate-zoomIn" src="/images/header/loop3d-logo.webp" alt="Logo" />
                </div>
            </Container>
        ) : participant ? (
            <>
                {/* {(participant.ll_survey_status === 'yes'&& participant?.loop_lead?._id == participant_id) &&<SurveyCompletedMessage/>}

                {(participant.mgr_survey_status === 'yes' && participant?.manager?._id == participant_id) &&<SurveyCompletedMessage />} */}
                {participant.survey_status === 'completed' ? (
                    <Container className="my-[10rem]">
                        <div className="lg:max-w-[1080px] mx-auto bg-white rounded-[20px] mb-[18rem] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
                            <h1 className="text-[38px] md:text-[48px] mb-5 text-center font-frank">Survey Completed</h1>
                            <p className="text-center text-[16px] font-poppins">You have completed the survey. Thank you for your input!</p>
                        </div>
                    </Container>
                    ) : ((participant.ll_survey_status == 'no' && participant?.loop_lead?._id == participant_id)
                        || (participant.mgr_survey_status === 'no' && participant?.manager?._id == participant_id) 
                        || (participant.survey_status === 'pending' && participant?._id == participant_id)) ? (
                    <div className="survey-inner pt-[120px] pb-[17rem] md:pb-[24rem] lg:pb-[20px]">
                        <Container>
                            <div className="survey-container p-[20px] max-w-[800px] m-auto rounded-lg shadow-custom3">
                                <h2 className="text-black text-2xl md:text-3xl font-frank text-center">
                                    360 Feedback Survey
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4">
                                    You have been selected as a rater to provide insights into {survey?.loop_lead?.first_name}'s performance. Your responses are anonymous, and we appreciate your input!
                                </p>
                                <form onSubmit={handleSubmit}>
                                    {/* {survey?.questions?.map((question, index) => renderQuestion(question, index))}
                                     */}
                                                {survey?.questions
                                            ?.filter((question) => question?.questionType === 'Radio')
                                            .map((question, index) => renderQuestion(question, index))
                                        }
                                        {survey?.questions
                                            ?.filter((question) => question?.questionType === 'Text')
                                            .map((question, index) => renderQuestion(question, index))
                                        }
                                    <div className="text-center mt-6">
                                        <button type="submit" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] max-[767px]:min-w-[200px] min-h-[56px] max-[767px]:min-h-[46px] leading-[56px] max-[767px]:leading-[46px] inline-block text-center rounded-[50px] font-poppins">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </div>
                ) : (
                    <Container className="my-[10rem]">
                        <div className="lg:max-w-[1080px] mx-auto bg-white rounded-[20px] mb-[18rem] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
                            <h1 className="text-[38px] md:text-[48px] mb-5 text-center font-frank">Survey Completed</h1>
                            <p className="text-center text-[16px] font-poppins">You have completed the survey. Thank you for your input!</p>
                        </div>
                    </Container>
                )}
            </>
        ) : (
            <Container className="my-[10rem]">
                <div className="lg:max-w-[1080px] mx-auto bg-white rounded-[20px] p-[20px] md:p-[40px] mb-[18rem]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
                    <h1 className="text-[38px] md:text-[48px] mb-5 text-center font-frank">Link Expired</h1>
                    <p className="text-center text-[16px] font-poppins">Unfortunately, the link you used has expired.</p>
                    <p className="text-center text-[16px] font-poppins mt-4">
                        If you need assistance, please <a href="/contact" className="text-blue-500 underline">contact support</a>.
                    </p>
                </div>
            </Container>
        )}
    </>
);

    
};

export default Survey;
