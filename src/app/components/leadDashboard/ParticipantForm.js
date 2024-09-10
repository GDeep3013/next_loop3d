'use client';
import React, { useState } from "react";
import Container from "../common/Container";

export default function ParticipantForm({ survey_id }) {
    const initialParticipants = Array.from({ length: 10 }, () => ({
        p_first_name: '',
        p_last_name: '',
        p_email: '',
        p_type: ''
    }));

    const [participants, setParticipants] = useState(initialParticipants);
    const [errors, setErrors] = useState([]);

    const handleInputChange = (index, field, value) => {
        const newParticipants = [...participants];
        newParticipants[index][field] = value;
        setParticipants(newParticipants);
    };

    const addParticipant = () => {
        setParticipants([...participants, { p_first_name: '', p_last_name: '', p_email: '', p_type: '' }]);
    };

    const removeParticipant = (indexToRemove) => {
        setParticipants(participants.filter((_, index) => index !== indexToRemove));
    };

    const validateForm = () => {
        const newErrors = [];
        const emailsSet = new Set();

        participants.forEach((participant, index) => {
            const participantErrors = {};
            if (!participant.p_first_name) participantErrors.p_first_name = 'First name is required';
            if (!participant.p_last_name) participantErrors.p_last_name = 'Last name is required';
            if (!participant.p_email) {
                participantErrors.p_email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(participant.p_email)) {
                participantErrors.p_email = 'Email format is invalid';
            } else if (emailsSet.has(participant.p_email)) {
                participantErrors.p_email = 'Duplicate email found';
            } else {
                emailsSet.add(participant.p_email);
            }
            if (!participant.p_type) participantErrors.p_type = 'Relationship type is required';

            newErrors[index] = participantErrors;
        });

        setErrors(newErrors);
        return newErrors.every(participantErrors => Object.keys(participantErrors).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('participants', participants);
         
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/surveys/participants/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': process.env.NEXT_PUBLIC_API_KEY 

                    },
                    body: JSON.stringify({
                        survey_id,
                        participants
                    })
                });

                if (response.ok) {
                    console.log('Participants submitted successfully');
                    alert('Participants submitted successfully')
                    window.location.reload()
                    // handle success, e.g., redirect to another page or show a success message
                } else {
                    console.error('Error submitting participants');
                    // handle error
                }
            } catch (error) {
                console.error('Error submitting participants:', error);
            }
         
        }
    };

    return (
        <div className="step2 py-10 md:py-[80px] mb-[30rem] md:mb-[37rem] lg:mb-[16rem] bg-custom-color2">
            <Container>
                <h2 className="text-white text-3xl lg:text-4xl font-frank">Step 2:</h2>
                <p className="text-white font-poppins mt-3">Enter a minimum of 10 participants whom you would like to invite to take your 360 survey.</p>
                <form method="post" className="mt-8 relative" onSubmit={handleSubmit}>
                    <div className="participant bg-custom-color py-6 md:py-[35px] px-4 md:px-[15px] rounded-t-2xl flex-wrap md:flex-nowrap hidden md:flex">
                        <div className="form-group w-full text-center">
                            <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Participant :</label>
                        </div>
                        <div className="form-group w-full text-center">
                            <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">First Name</label>
                        </div>
                        <div className="form-group w-full text-center">
                            <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Last Name</label>
                        </div>
                        <div className="form-group w-full text-center">
                            <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Email</label>
                        </div>
                        <div className="form-group w-full text-center">
                            <label className="participant-head text-[19px] xl:text-[27px] text-white font-frank">Relationship:</label>
                        </div>
                    </div>

                    {participants.map((participant, index) => (
                        <div key={index} className="participant bg-[#f2f8fb]">
                            <div className="inner border-b border-custom-color2 bg-[#F2F8FB] flex flex-wrap md:flex-nowrap items-center relative">
                                <div className="form-group w-full text-center py-3 md:py-[20px] px-4 md:px-[16px]">
                                    <label className="participant-head text-[19px] xl:text-[27px] text-black font-frank">
                                        Participant {index + 1}:
                                    </label>
                                </div>
                                <div className="form-group w-full bg-white py-4 md:py-[20px] px-4 md:px-[16px]">
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                        value={participant.p_first_name}
                                        onChange={(e) => handleInputChange(index, 'p_first_name', e.target.value)}
                                    />
                                    {errors[index]?.p_first_name && <p className="text-red-500">{errors[index].p_first_name}</p>}
                                </div>
                                <div className="form-group w-full py-4 md:py-[20px] px-4 md:px-[16px]">
                                    <input
                                        placeholder="Last Name"
                                        type="text"
                                        className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                        value={participant.p_last_name}
                                        onChange={(e) => handleInputChange(index, 'p_last_name', e.target.value)}
                                    />
                                    {errors[index]?.p_last_name && <p className="text-red-500">{errors[index].p_last_name}</p>}
                                </div>
                                <div className="form-group w-full bg-white py-4 md:py-[20px] px-4 md:px-[16px]">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="w-full border border-custom-color2 leading-10 xl:leading-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins placeholder-transparent md:placeholder:text-transparent placeholder:text-gray-500"
                                        value={participant.p_email}
                                        onChange={(e) => handleInputChange(index, 'p_email', e.target.value)}
                                    />
                                    {errors[index]?.p_email && <p className="text-red-500">{errors[index].p_email}</p>}
                                </div>
                                <div className="form-group w-full py-4 md:py-[20px] px-4 md:px-[16px]">
                                    <select
                                        className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-10px)_center] xl:bg-[position:calc(100%-30px)_center] appearance-none border border-custom-color2 leading-10 xl:leading-[62px] min-h-10 xl:min-h-[62px] rounded px-4 md:px-[14px] focus:outline-[2px] outline-custom-color2 text-sm xl:text-base font-poppins w-[220px]"
                                        value={participant.p_type}
                                        onChange={(e) => handleInputChange(index, 'p_type', e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Direct Report">Direct Report</option>
                                        <option value="Teammate">Teammate</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors[index]?.p_type && <p className="text-red-500">{errors[index].p_type}</p>}
                                </div>
                                {index >= 10 && (
                                <button type="button" className="text-red-500 text-sm mt-2" onClick={() => removeParticipant(index)}>
                                    <img src="/images/remove.png" alt="delete icon" className="w-[20px] h-[20px] absolute right-5 top-[40px]"/>
                                </button>
                            )}
                            </div>
                            
                        </div>
                    ))}
                    <button type="button" onClick={addParticipant} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">
                        Add Participant
                    </button>
                    <button type="submit" className="mt-4 py-2 px-4 bg-green-500 text-white rounded ml-4 bg-[#174a6d]">
                        Submit
                    </button>
                </form>
            </Container>
        </div>
    );
}
