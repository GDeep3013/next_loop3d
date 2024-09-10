import React from "react";
import Container from "../components/common/Container";

const SurveySummary = () => {
    return (
        <>
            <div className="survey-inner pt-[120px] pb-[17rem] md:pb-[24rem] lg:pb-[20px]">
                <Container>

                    <div className="survey-container p-6 md:p-10 lg:p-12 xl:p-[50px] m-auto rounded-[20px] lg:rounded-[30px] bg-[#F5F5F5] max-w-full">
                        <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-frank text-center mb-4">
                            LOOP3D 360 Report
                        </h2>
                        <div className="participant-name-looped-360 mt-4">
                            <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                                <strong className="text-[#333] font-extrabold">Participant Name:</strong> Sandeep Rathour
                            </p>
                            <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                                <strong className="text-[#333] font-extrabold">Report Generation Date:</strong> August 30, 2024
                            </p>
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                Welcome to your personalized 360° feedback report customized to gather insight into your leadership strengths and opportunities. The data is gathered from coworkers you selected and the measures are based on competencies specific to your role. The purpose is to evaluate self-perception on these competencies and the perception of your respondents. Keep in mind that this report measures frequency of application of these behaviors or competencies.
                            </p>
                            <p className="text-sm md:text-base lg:text-lg mb-4 font-poppins">
                                <strong className="text-[#333] font-extrabold">About Your Report</strong>
                            </p>
                            <h3 className="text-custom-color text-lg md:text-xl lg:text-2xl font-poppins font-extrabold">
                                Total number of responses:
                            </h3>



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
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">Self</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">1</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">Direct Reports</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">Teammate</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">Supervisor</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">Other</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins border border-gray-300">0</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">Total</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">1</td>
                                            <td className="px-3 md:px-5 py-2 font-poppins font-bold border border-gray-300">0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>






                            <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold">
                                Here are the participants that you invited:
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                Here are the competencies that your manager selected as the most important to your role (in no particular ranking order):
                            </p>
                            <ul className="pl-4 sm:pl-6">
                                <li className="list-disc font-poppins text-gray-600">Coaches And Develops</li>
                                <li className="list-disc font-poppins text-gray-600">Customer Oriented</li>
                                <li className="list-disc font-poppins text-gray-600">Accountability</li>
                            </ul>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                Below is a summary of your results:
                            </p>

                            {/* graph box */}
                            <div className="graph-box mt-5 mb-5"></div>

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
                                The customer oriented competency is the proactive and empathetic approach leaders take to understand, anticipate, and meet the needs of diverse stakeholders.
                            </p>

                            {/* graph box */}
                            <div className="graph-box mt-5 mb-5"></div>

                            <h3 className="text-custom-color text-lg sm:text-xl font-poppins font-extrabold uppercase">
                                Competency: Customer Oriented
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                The customer oriented competency is the proactive and empathetic approach leaders take to understand, anticipate, and meet the needs of diverse stakeholders.
                            </p>




                            {/* graph box */}
                            <div className="graph-box mt-5 mb-5"></div>
                            <h3 className="text-custom-color text-xl sm:text-2xl md:text-3xl font-poppins font-extrabold uppercase">
                                COMPETENCY: Accountability
                            </h3>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                The customer oriented competency is the proactive and empathetic approach leaders take to understand, anticipate, and meet the needs of diverse stakeholders.
                            </p>
                            {/* graph box */}
                            <div className="graph-box mt-5 mb-5"></div>
                            <h2 className="uppercase font-frank text-custom-color text-xl sm:text-2xl md:text-3xl">
                                Open-Ended Comments
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                Below you can review a summary for each of the open-ended questions.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                1. What are the strengths and skills that make this person most effective?
                                <br className="hidden sm:block" />Self: The self-assessment highlighted strong communication and problem-solving skills.
                                <br className="hidden sm:block" />Direct Report: Direct reports noted the person's ability to motivate the team and foster collaboration, aligning with the self-assessment.
                                <br className="hidden sm:block" />Teammate: Teammates identified the individual's adaptability and willingness to help others, showing consistency with the self-perception.
                                <br className="hidden sm:block" />Supervisor: The supervisor emphasized the person's leadership qualities and strategic thinking, in line with the self-assessment.
                                <br className="hidden sm:block" />Other: Other respondents praised the individual's creativity and innovation, which was not explicitly mentioned in the self-assessment.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                2. What suggestions do you have to make this person a stronger performer and more effective?
                                <br className="hidden sm:block" />Self: The self-assessment did not provide specific suggestions for improvement.
                                <br className="hidden sm:block" />Direct Report: Direct reports recommended focusing on delegation and time management to improve efficiency, differing from the self-perception.
                                <br className="hidden sm:block" />Teammate: Teammates suggested enhancing conflict resolution skills and providing clearer direction, indicating areas for growth not acknowledged by the individual.
                                <br className="hidden sm:block" />Supervisor: The supervisor advised developing emotional intelligence and enhancing coaching abilities, highlighting areas for improvement not mentioned in the self-assessment.
                                <br className="hidden sm:block" />Other: Other respondents recommended building stronger relationships with stakeholders and enhancing networking skills, areas not explicitly addressed in the self-assessment.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                3. Other comments?
                                <br className="hidden sm:block" />Self: The self-assessment did not include additional comments.
                                <br className="hidden sm:block" />Direct Report: Direct reports expressed appreciation for the individual's support and open communication style.
                                <br className="hidden sm:block" />Teammate: Teammates highlighted the person's positive attitude and willingness to collaborate effectively.
                                <br className="hidden sm:block" />Supervisor: The supervisor commended the individual for their strategic contributions and strong work ethic.
                                <br className="hidden sm:block" />Other: Other respondents mentioned the person's impact on team morale and overall positive influence on the work environment.
                            </p>
                            <h2 className="uppercase font-frank text-custom-color text-xl sm:text-2xl md:text-3xl">
                                LOOP3D SMART PLAN
                            </h2>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4 mb-4">
                                This report is designed to highlight both strengths and developmental opportunities for you within your role.
                            </p>





                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold uppercase">STRENGTHS</strong>
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold inline-block">Summary:</strong>
                                Based on your results, your coworkers particularly appreciate the following strengths in you and the value it adds to the workplace. Your top strengths include Accountability, Coaches And Develops, and Customer Oriented competencies, with the goal of further sharpening and enhancing your strengths.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold inline-block">SMART Plan:</strong>
                                Based on your results, our LOOP3D SMART Plan includes resources for you to start your development and continue building on your strengths. The following developmental suggestions are tailored to you and your role.
                                <br className="hidden sm:inline" />
                                1. Develop and implement a training program for employees to improve customer service skills by Q3, resulting in a 10% increase in customer satisfaction ratings.
                                <br className="hidden sm:inline" />
                                2. Establish a monthly feedback mechanism for team members to share ideas and concerns, aiming to increase employee engagement by 15% within the next six months.
                            </p>

                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold uppercase">DEVELOPMENT OPPORTUNITIES</strong>
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold inline-block">Summary:</strong>
                                Based on your results, your coworkers particularly appreciate the following strengths in you and the value it adds to the workplace. Your top strengths include Top 3 competencies: Communication, Problem-solving, and Leadership.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                1. Develop communication skills by attending a public speaking course to improve presentation delivery; measurable outcome: increase audience engagement by 20% within 3 months.
                                <br className="hidden sm:inline" />
                                2. Enhance problem-solving abilities through regular participation in brainstorming sessions; specific goal: contribute at least one innovative solution per session; achievable steps: research creative thinking techniques; relevance to role: foster team collaboration; timeline: implement within 1 month.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mb-4">
                                <strong className="text-[#333] font-extrabold inline-block">SMART Plan:</strong>
                                Based on your results, our LOOP3D SMART Plan includes resources for you to start your development plan and journey. The following developmental suggestions are tailored to you and your role.
                                <br className="hidden sm:inline" />
                                1. Develop a training program on effective communication skills to enhance team collaboration, with a goal to improve team communication by 20% within 3 months.
                                <br className="hidden sm:inline" />
                                2. Implement a monthly feedback session for team members to provide and receive constructive feedback, aiming to increase overall team satisfaction by 15% in 6 months.
                            </p>
                            <div className="download-btn text-center mt-4">
                                <a
                                    className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[200px] max-w-full min-h-[56px] inline-block leading-[56px] rounded-[50px] font-poppins"
                                    href="/contact"
                                >
                                    Download PDF
                                </a>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>


        </>
    );
};

export default SurveySummary;
