import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useAuthModal } from '../../context/AuthModalContext'
import axios from "axios"

const AuthModal = () => {

    const { closeAuthModal, isAuthModalOpen } = useAuthModal();

    const [nextAuthSlide, setNextAuthSlide] = useState(false);

    // *************************** sign up functionality starts ***************************

    const initialUserSignUpForm = {
        phoneNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [userSignUpForm, setUserSignUpForm] = useState(initialUserSignUpForm);

    const handleSignUpInputChange = (e) => {
        const { value, name } = e.target;

        setUserSignUpForm((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const submitSignUp = async () => {
        console.log(userSignUpForm);

        try {

            const userSignUpApi = await axios.post("http://localhost:3000/api/auth/sign-up/user",
                {
                    phoneNumber: userSignUpForm.phoneNumber,
                    fullName: userSignUpForm.firstName + " " + userSignUpForm.lastName,
                    email: userSignUpForm.email,
                    password: userSignUpForm.password,
                    confirmPassword: userSignUpForm.confirmPassword,
                },
                {
                    withCredentials: true
                }
            )

        } catch (error) {
            console.log("error", error);
            console.error("Server response:", error.response?.data); // ← add this
            console.error("Status:", error.response?.status);
        }

    }



    // *************************** sign up functionality ends ***************************

    return (

        <>

            {isAuthModalOpen && (

                <div className='fixed inset-0 flex justify-center items-center bg-[#02060CB3] z-10'>

                    <div className='bg-white max-w-125 w-full relative px-5 py-6 rounded-lg'>

                        <div onClick={closeAuthModal} className='absolute top-4 right-4 cursor-pointer '>
                            <X color='red' />
                        </div>

                        <div className="flex items-center space-x-1 cursor-pointer max-md:justify-center mb-8">
                            <div className="">
                                <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel bg-primary pt-0.5 px-1">action</span>
                            </div>
                            <div><span className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel text-black">verse</span>
                            </div>
                        </div>

                        {
                            nextAuthSlide ? (

                                <div className='flex flex-col gap-5'>

                                    <div className='grid grid-cols-2 gap-3'>

                                        <div className='flex flex-col gap-1'>
                                            <label className='text-gray-700 text-sm ms-1 font-medium'>First Name</label>
                                            <input onChange={(e) => { handleSignUpInputChange(e) }} name="firstName" value={userSignUpForm.firstName} name='firstName' type="text" className='transition px-4 py-3 outline-none border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-sm' />
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <label className='text-gray-700 text-sm ms-1 font-medium'>Last Name</label>
                                            <input onChange={(e) => { handleSignUpInputChange(e) }} name="lastName" value={userSignUpForm.lastName} name='lastName' type="text" className='transition px-4 py-3 outline-none border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-sm' />
                                        </div>

                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='text-gray-700 text-sm ms-1 font-medium'>Email</label>
                                        <input onChange={(e) => { handleSignUpInputChange(e) }} name="email" value={userSignUpForm.email} className='transition px-4 py-3 outline-none border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-sm' />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='text-gray-700 text-sm ms-1 font-medium'>Password</label>
                                        <input onChange={(e) => { handleSignUpInputChange(e) }} name="password" value={userSignUpForm.password} className='transition px-4 py-3 outline-none border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg text-sm' type="password" />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='text-gray-700 text-sm ms-1 font-medium'>Confirm Password</label>
                                        <input onChange={(e) => { handleSignUpInputChange(e) }} name="confirmPassword" value={userSignUpForm.confirmPassword} className='transition px-4 py-3 outline-none border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm rounded-lg' type="password" />
                                    </div>

                                    <button onClick={() => {
                                        submitSignUp();
                                    }}>Sign up</button>

                                </div>

                            ) : (

                                <div className='flex flex-col gap-5'>

                                    <div className='text-lg sm:text-xl font-bold text-gray-900'>Enter your mobile number</div>

                                    <input onChange={(e) => {
                                        handleSignUpInputChange(e);
                                    }} type="number" name='phoneNumber' className='transition rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#EC1D24] focus:ring-2 focus:ring-[#EC1D24]/20' />

                                    <button className='' onClick={() => {
                                        setNextAuthSlide(true);
                                    }}>Processed</button>

                                </div>

                            )
                        }

                    </div>

                </div>
            )}

        </>
    )
}

export default AuthModal