'use client'
import React, { useState, useEffect } from "react";
import Container from "../Container";

const Insights: React.FC = () => {
  const [feedbackSessions, setFeedbackSessions] = useState(0);
  const [leadershipImprovement, setLeadershipImprovement] = useState(0);
  const [employeeRetention, setEmployeeRetention] = useState(0);

  const animateValue = (start: number, end: number, duration: number, setValue: (value: number) => void) => {
    const range = end - start;
    let current = start;
    const increment = range / (duration / 10);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, 10);
  };

  useEffect(() => {
    animateValue(0, 500, 5000, setFeedbackSessions); // 500k in 2 seconds
    animateValue(0, 97, 5000, setLeadershipImprovement); // +97% in 2 seconds
    animateValue(0, 8, 5000, setEmployeeRetention); // +8% in 2 seconds
  }, []);

  return (
    <div className="">
      <Container className="relative">
        <div className="real">
          <div className="px-[20px] md:px-[50px] mb-4 flex flex-col justify-between items-center text-center md:text-left">
            <h3 className="text-[34px] md:text-[48px] font-frank mb-2 text-center text-white">
              Real Insights Mean Real Results
            </h3>
            <div className="flex flex-col lg:flex-row w-full justify-center xl:justify-around">
              <div className="flex flex-col justify-center items-center">
                <span className="text-[34px] md:text-[48px] font-frank text-white">
                  {feedbackSessions.toLocaleString()}k
                </span>
                <p className="w-[220px] mx-auto text-center text-[16px] font-poppins text-white">
                  Feedback sessions conducted worldwide
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-[34px] md:text-[48px] font-frank text-white">
                  +{leadershipImprovement}%
                </span>
                <p className="w-[220px] mx-auto text-center text-[16px] font-poppins text-white">
                  Improved leadership capabilities
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-[34px] md:text-[48px] font-frank text-white">
                  +{employeeRetention}%
                </span>
                <p className="w-[210px] mx-auto text-center text-[16px] font-poppins text-white">
                  Higher employee retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Insights;
