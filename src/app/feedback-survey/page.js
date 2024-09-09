import React from "react";
import Container from "../components/common/Container";

const RefundPolicy = () => {
    return (
        <>
            <div className="survey-inner pt-[120px] pb-[17rem] md:pb-[24rem] lg:pb-[20px]">
                <Container>
                    <div className="survey-container p-[20px] max-w-[800px] m-auto rounded-lg shadow-custom3">

                        <h2 className="text-black text-2xl md:text-3xl font-frank text-center">
                            360 Feedback Survey
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-poppins mt-4">
                            You have been selected as a rater to provide insights into Gurdeep's performance on the survey items below. The purpose is to measure how often you notice these behaviors demonstrated by Gurdeep in the workplace. Answer each item below thinking about how often Gurdeep exhibits that specific behavior. Your responses are anonymous and we appreciate your input!
                        </p>

                        <form method="post" action="">

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Takes responsibility for both achievements and failures of their work</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="1" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="1" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="1" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Incorporates methods to monitor metrics and progress based on success factor</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="2" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="2" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="2" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Proactively seeks feedback to continuously improve work processes</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="3" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="3" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="3" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Creates an environment where people are encouraged to express their true viewpoint</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="4" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="4" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="4" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Treats others with respect</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="5" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="5" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="5" required />Never</label>
                            </div>


                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Values the experience and contributions of people from different backgrounds</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="6" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="6" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="6" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Communicates with transparency and consistency</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="7" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="7" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="7" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Ensures objectives are delivered based on expectations</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="8" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="8" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="8" required />Never</label>
                            </div>


                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Leads their team through obstacles or potential setbacks</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="9" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="9" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="9" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Creates a sense of urgency to ensure goals meet deadlines</p>
                            <div className="survey-options mt-2">
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="10" required />Always</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="10" required />Usually</label>
                                <label className="w-full inline-block mb-1 font-poppins"><input className="mr-3" type="radio" name="10" required />Never</label>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">What are the strengths and behaviors that make Gurdeep an effective leader?<sub>(Min 50 characters)</sub></p>
                            <div className="survey-options mt-2">
                                <div className="form-group">
                                    <textarea placeholder="Message" rows={2} className="w-full border border-black leading-[56px] px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-2"></textarea>
                                </div>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">What recommendations do you have to make Gurdeep a more effective leader?<sub>(Min 50 characters)</sub></p>
                            <div className="survey-options mt-2">
                                <div className="form-group">
                                    <textarea placeholder="Message" rows={2} className="w-full border border-black leading-[56px] px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-2"></textarea>
                                </div>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-1xl text-slate-700 font-bold font-poppins mt-3 font-poppins mt-3">Any other comments?<sub>(Min 50 characters)</sub></p>
                            <div className="survey-options mt-2">
                                <div className="form-group">
                                    <textarea placeholder="Message" rows={2} className="w-full border border-black leading-[56px] px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-2"></textarea>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[168px] min-h-[45px] leading-[45px] inline-block text-center rounded-[5px] font-poppins mt-5">Submit Survey</button>
                            </div>


                        </form>
                    </div>
                </Container>
            </div>




        </>
    );
};

export default RefundPolicy;
