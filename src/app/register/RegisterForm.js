'use client'
import React, { useState } from 'react'
import ErrorMessage from "../components/common/ErrorMessage";
import InputField from "../components/common/InputField";

//import { registerUser } from "../api";

export default function RegisterForm() {

    const [selectedOption, setSelectedOption] = useState("Select a role");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // const { dispatch } = useAppContext();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        email: "",
        role: "",
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        validateField(name, value);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const roleMapping = {
        Manager: "manager",
        "Looped Lead": "loop_lead",
    };

    const handleOptionClick = (option) => {
        const role = roleMapping[option];
        setSelectedOption(option);
        setFormData((prevFormData) => ({
            ...prevFormData,
            role,
        }));
        validateField("roleId", role);
        setIsOpen(false);
    };

    const validateField = (name, value) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]:
                value.trim() === ""
                    ? "This field is required"
                    : name === "email" && !/^\S+@\S+\.\S+$/.test(value)
                        ? "Invalid email format"
                        : "",
        }));
    };

    const validateForm = () => {
        const newErrors = {
            firstName: formData.firstName.trim() ? "" : "This field is required",
            email:
                formData.email.trim() === ""
                    ? "This field is required"
                    : !/^\S+@\S+\.\S+$/.test(formData.email)
                        ? "Invalid email format"
                        : "",
            role: formData.role.trim() ? "" : "This field is required",
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("adminToken") || "hj";
        if (validateForm()) {
            // dispatch({ type: "SET_LOADING", payload: true });
            setLoading(true);
            try {
                // const response = await registerUser(formData, token);
                // console.log(response, "responseresponse");
                // if (response.statusCode == 200) {
                //     setFormData({
                //         firstName: "",
                //         lastName: "",
                //         role: "",
                //         email: "",
                //     });
                   // setSelectedOption("Select a role");
                    setRegistrationSuccess(true);
                // } else {
                //     setRegistrationSuccess(false);
                // }

            } catch (error) {
                setRegistrationSuccess(false);
            } finally {
                // dispatch({ type: "SET_LOADING", payload: false });
                setLoading(false);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="w-[50%]">
                        <InputField
                            labelClass="text-black"
                            className="mt-[5px]"
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder=""
                        />
                        {errors.firstName && (
                            <ErrorMessage className="" message={errors.firstName} />
                        )}
                    </div>
                    <div className="w-[50%]">
                        <InputField
                            labelClass="text-black"
                            className="mt-[5px]"
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="mt-[25px]">
                    <InputField
                        labelClass="text-black"
                        className="mt-[5px]"
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=""
                    />
                    {errors.email && (
                        <ErrorMessage className="" message={errors.email} />
                    )}
                </div>
                <div className="mt-[25px]">
                    <div className="relative">
                        <label
                            htmlFor="role"
                            className="text-[16px] font-poppins text-[#000]"
                        >
                            Role
                        </label>
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="bg-[#F2F8FB] mt-[5px] rounded-[5px] w-full px-3 py-2 border border-[#7ABCDB] placeholder-gray-500 sm:text-sm outline-none min-h-[50px] flex justify-between items-center font-poppins text-[#000] !text-[16px]"
                        >
                            {selectedOption}
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {errors.role && (
                            <ErrorMessage className="" message={errors.role} />
                        )}
                        {isOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-[#7ABCDB] rounded-[5px] shadow-lg">
                                <button
                                    onClick={() => handleOptionClick("Manager")}
                                    className="w-full px-4 py-2 font-poppins text-left hover:bg-[#F2F8FB] border-b border-[#7ABCDB]"
                                >
                                    Manager
                                </button>
                                <button
                                    onClick={() => handleOptionClick("Looped Lead")}
                                    className="w-full px-4 py-2 font-poppins text-left hover:bg-[#F2F8FB]"
                                >
                                    Looped Lead
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-8 mb-4">
                    {loading ? (
                        <>...loading</>
                    ) : (
                        <button
                            type="submit"
                            className="min-w-[200px] min-h-[56px] items-center bg-[#7ABCDB] flex justify-center px-[20px] text-[16px] rounded-full text-white"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
            { registrationSuccess && <p className="text-green-500">Registration Successful!</p> }
        </>
    )
}
