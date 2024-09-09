
import Container from "../components/common/Container";
 import StartSurveyFrom from "./StartSurveyFrom";
const StartSurvey = () => {

  return (
    <Container className="md:my-[10rem] mt-[6rem] ">
      <div className="lg:w-[1080px] mx-auto bg-white rounded-[20px] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
        <h1 className="text-[38px] md:text-[48px] mb-6 text-left font-frank">Start Survey</h1>

        <StartSurveyFrom />

      </div>
    </Container>
  );
};

export default StartSurvey;
