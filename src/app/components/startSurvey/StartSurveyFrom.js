'use client'
import React, { useEffect, useState } from 'react';
import InputField from "../common/InputField";
import { useSearchParams,useRouter   } from 'next/navigation';
import Container from "../common/Container";

export default function StartSurveyForm() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [activeTab, setActiveTab] = useState("individual_contributor");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [formData, setFormData] = useState({
        loop_lead_name: "",
        loop_lead_email: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [assignments, setAssignments] = useState({
        individual_contributor: [],
        people_manager: []
    });

    const handleCheckboxChange = (label, id) => {
        if (selectedCheckboxes.includes(id)) {
            setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== id));
        } else {
            if (selectedCheckboxes.length < 3) {
                setSelectedCheckboxes([...selectedCheckboxes, id]);
            }
        }
    };

    const getAssignments = async (userId) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/competencies/assign?user_id=${userId}`;
            const response = await fetch(url, {
                headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY }
            });
            if (response.ok) {
                const data = await response.json();
                const categorizedAssignments = {
                    individual_contributor: [],
                    people_manager: []
                };
                data?.assignments.forEach((assignment) => {
                    if (assignment?.category_id?.competency_type in categorizedAssignments) {
                        categorizedAssignments[assignment?.category_id?.competency_type].push({
                            name: assignment?.category_id?.category_name,
                            id: assignment?.category_id?._id // Assuming `category_id` is the competency ID
                        });
                    }
                });
                return categorizedAssignments;
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
        const fetchAssignments = async () => {
            const assignments = await getAssignments(token);
            if (assignments) {
                setAssignments(assignments);
            }
        };
        fetchAssignments();
    }, [token]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedCheckboxes([]); // Reset checkboxes when switching tabs
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation: Check if all fields are filled
        if (!formData.loop_lead_name || !formData.loop_lead_email || selectedCheckboxes.length === 0) {
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        // Prepare the payload
        const payload = {
            surveyData: {
                name: "Employee Satisfaction Survey", // Example name, you can update it as needed
                loop_leads: [
                    {
                        name: formData.loop_lead_name,
                        email: formData.loop_lead_email
                    }
                ],
                competencies: selectedCheckboxes, // Use IDs directly
                mgr_id: token // Manager ID
            }
        };

        console.log('payload',payload)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                const loopLeadId = data?.data?.surveys?.[0]?._id; 
                if (loopLeadId) {
                   router.push('/lead-dashboard?token='+loopLeadId)
                }
                // setIsFormSubmitted(true); // Mark the form as submitted to replace the component
            } else {
                setErrorMessage("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage("An error occurred while submitting the form. Please try again.");
        }
    };

    // Render the thank you message if the form is submitted
    if (isFormSubmitted) {
        return (
            <Container className="my-[10rem]">
                <div className="lg:max-w-[1080px] mx-auto bg-white rounded-[20px] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
                    <h1 className="text-[38px] md:text-[48px] mb-5 text-center font-frank">Thank You!</h1>
                    <p className="text-center text-[16px] font-poppins">Your registration is successful.</p>
                </div>
            </Container>
        );
    }

    const options = assignments[activeTab] || [];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="w-[50%]">
                        <InputField
                            labelClass=""
                            className="mt-[5px] placeholder-black text-sm md:text-base"
                            label=""
                            type="text"
                            name="loop_lead_name"
                            value={formData.loop_lead_name}
                            onChange={handleInputChange}
                            placeholder="Looped Lead Name"
                        />
                    </div>
                    <div className="w-[50%]">
                        <InputField
                            labelClass=""
                            className="mt-[5px] placeholder-black text-sm md:text-base"
                            label=""
                            type="email"
                            name="loop_lead_email"
                            value={formData.loop_lead_email}
                            onChange={handleInputChange}
                            placeholder="Looped Lead Email"
                        />
                    </div>
                </div>

                {/* button tab */}
                <div className="py-5">
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button
                            type="button"
                            className={`min-w-[218px] px-[20px] py-[15px] rounded-full font-normal font-poppins ${activeTab === "individual_contributor"
                                    ? "bg-[#174A6D] text-white"
                                    : "bg-white text-[#174A6D] border border-[#174A6D]"
                                }`}
                            onClick={() => handleTabChange("individual_contributor")}
                        >
                            Individual Contributor
                        </button>
                        <button
                            type="button"
                            className={`min-w-[218px] px-[20px] py-[15px] rounded-full font-normal font-poppins ${activeTab === "people_manager"
                                    ? "bg-[#174A6D] text-white"
                                    : "bg-white text-[#174A6D] border border-[#174A6D]"
                                }`}
                            onClick={() => handleTabChange("people_manager")}
                        >
                            People Manager
                        </button>
                    </div>

                    <div>
                        <ul>
                            {options.map((option) => (
                                <li key={option.id} className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-black"
                                            checked={selectedCheckboxes.includes(option.id)}
                                            onChange={() => handleCheckboxChange(option.name, option.id)}
                                            disabled={
                                                !selectedCheckboxes.includes(option.id) &&
                                                selectedCheckboxes.length >= 3
                                            }
                                        />
                                        <span className="ml-3 text-black font-poppins">{option.name}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-2">
                    <button
                        type="submit"
                        className="min-w-[218px] px-[20px] py-[15px] bg-[#7ABCDB] flex justify-center text-[16px] rounded-full text-white font-poppins"
                    >
                        Submit
                    </button>
                </div>
                {/* Display the error message */}
                {errorMessage && (
                    <div className="text-red-600 text-center mt-4">{errorMessage}</div>
                )}
            </form>
        </>
    );
}
