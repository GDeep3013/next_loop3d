'use client'
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "Sales Inquiry",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [feedback, setFeedback] = useState({ type: "", message: "" }); // For success/error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error when the user starts typing
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                setFeedback({ type: "success", message: "Email sent successfully!" });
                setFormData({ firstName: "", lastName: "", email: "", inquiryType: "Sales Inquiry", message: "" });
            } else {
                setFeedback({ type: "error", message: "Failed to send email. Please try again." });
            }
        } catch (error) {
            console.error("Error:", error);
            setFeedback({ type: "error", message: "An error occurred while sending the email." });
        }

        // Clear feedback message after 5 seconds
        setTimeout(() => {
            setFeedback({ type: "", message: "" });
        }, 5000);
    };

    return (
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="form-box py-[30px] px-[20px] md:py-[40px] md:px-[30px] shadow-custom3 rounded-3xl">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="form-group mt-4 md:mt-5">
                        <input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                        />
                    </div>
                    <div className="form-group mt-4 md:mt-5">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="form-group mt-4 md:mt-5">
                        <select
                            value={formData.inquiryType}
                            name="inquiryType"
                            onChange={handleChange}
                            className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-14px)_center] appearance-none w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                        >
                            <option value="Sales Inquiry">Sales Inquiry</option>
                            <option value="Support Inquiry">Support Inquiry</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group mt-4 md:mt-5">
                        <textarea
                            placeholder="Message"
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-custom-color2 leading-[40px] md:leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <div className="form-group mt-4 md:mt-5">
                        <button
                            type="submit"
                            className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[150px] md:min-w-[200px] min-h-[40px] md:min-h-[56px] leading-[40px] md:leading-[56px] inline-block text-center rounded-[50px] font-poppins"
                        >
                            Submit
                        </button>
                    </div>
                    {feedback.message && (
                        <div
                            className={`mt-4 text-center p-2 rounded ${
                                feedback.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                            }`}
                        >
                            {feedback.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
