import React from "react";
import Container from "../components/common/Container";
// import { useAppContext } from "../../AppContext/useAppContext";

import RegisterForm from "./RegisterForm";

const Register = () => {

  return (
    <Container className="mt-[10rem] mb-[20rem]">
      <div
        className="lg:w-[1080px] mx-auto bg-white rounded-[30px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="lg:flex min-h-[520px]">
          <div className="hidden lg:block w-full lg:w-[50%] rounded-l-[10px] bg-[url('/images/register/form-img.svg')] bg-cover bg-center bg-no-repeat"></div>
          <img
            className="w-full block rounded-[10px] lg:hidden"
            src="/images/register/form-img.svg"
          />
          <div className="w-full lg:w-[50%] flex justify-center p-8">
            <div className="w-full">
              <h1 className="text-[38px] md:text-[48px] mb-8 text-left font-frank">
                Registration
              </h1>

              <RegisterForm />
               
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
