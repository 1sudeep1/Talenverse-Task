'use client'
import React, { useState } from 'react'
import Select from 'react-select'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';

//data for getTouch dropdown
const options = [
    { value: 'services', label: 'Services' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'offer', label: 'Offer' }
]

//validation done through yup
const contactSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required('A phone number is required'),
    getTouch: Yup.string().required('Selection is required'),
    message: Yup.string().required('Message is required'),
});

const isAgreedSchema = Yup.object().shape({
    isAgreed: Yup.boolean().required('You must agree to the terms and conditions')
});

// yup validation for privacy checkbox was rising issue so, for tha validation is done separately and combined it
const combinedSchema = contactSchema.concat(isAgreedSchema);

const Contacts = () => {
    const [selectKey, setSelectKey] = useState(0);
    //form is being handled through formik
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            getTouch: null,
            message: '',
            isAgreed: false
        },
        validationSchema: combinedSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await handleContact(values);
                resetForm();
                setSelectKey(prevKey => prevKey + 1);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    });
    const handleContact = async (inputFields) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, inputFields);
            const data = await res.data;

            // Check for successful response
            if (res.status === 200) {
                toast(data.msg, {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: 'white',
                        color: 'black',
                    },
                });
            } else {
                // Error response
                toast(data.msg, {
                    icon: '❌',
                    style: {
                        borderRadius: '10px',
                        background: 'white',
                        color: 'black',
                    },
                });
            }
        } catch (err) {
            // Network error or other unexpected errors
            console.log(err);
            toast("Error occurred while contacting the server", {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: 'white',
                    color: 'black',
                },
            });
        }
    }

    const handleSelectChange = (selectedOption) => {
        formik.setFieldValue('getTouch', selectedOption.value);
    };
    return (
        <section className="text-[#A5ACBA] relative bg-[#151B28]">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="md:text-[32px] text-2xl leading-10 font-bold mb-4 text-[#F9F9F9]">Get In Touch With Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-6 text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
                </div>
                <div className="bg-[#252D3C] p-8">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex md:flex-row flex-col flex-wrap items-center justify-between md:gap-y-6 gap-y-4'>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="fullName" className="leading-5 text-sm text-[#F9F9F9]">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" placeholder='Enter Full Name' value={formik.values.fullName} className="w-full bg-[#2C3444] rounded border border-[#2E3545] focus:bg-white focus:text-black text-base text-gray-400 py-1 px-3 leading-8 duration-200 ease-in-out" onChange={formik.handleChange} />
                                    {formik.touched.fullName && formik.errors.fullName && (
                                        <div className="text-red-500">{formik.errors.fullName}</div>
                                    )}
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="leading-5 text-sm text-[#F9F9F9]">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder='Enter Email Address' value={formik.values.email} className="w-full bg-[#2C3444] rounded border border-[#2E3545] focus:bg-white focus:text-black text-base text-gray-400 py-1 px-3 leading-8 duration-200 ease-in-out" onChange={formik.handleChange} />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500">{formik.errors.email}</div>
                                    )}
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="leading-5 text-sm text-[#F9F9F9]">Phone Number</label>
                                    <input type="text" id="phone" name="phone" placeholder='Enter Phone' value={formik.values.phone} className="w-full bg-[#2C3444] rounded border border-[#2E3545] focus:bg-white focus:text-black text-base text-gray-400 py-1 px-3 leading-8 duration-200 ease-in-out" onChange={formik.handleChange} />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <div className="text-red-500">{formik.errors.phone}</div>
                                    )}
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label className="leading-5 text-sm text-[#F9F9F9]">Get Touch With Us</label>
                                    <Select
                                        key={selectKey}
                                        name='getTouch'
                                        options={options}
                                        onChange={handleSelectChange}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                backgroundColor: state.isFocused ? 'white' : '#2C3444',
                                                borderColor: state.isFocused ? 'white' : '#2C3444',
                                            }),
                                            singleValue: (baseStyles, state) => ({
                                                ...baseStyles,
                                                color: state.isFocused ? 'black' : '',
                                            }),
                                        }}
                                    />
                                    {formik.touched.getTouch && formik.errors.getTouch && (
                                        <div className="text-red-500">{formik.errors.getTouch}</div>
                                    )}
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="message" className="leading-7 text-sm text-[#F9F9F9]">Message</label>
                                    <textarea id="message" name="message" value={formik.values.message} className="w-full bg-[#2C3444] rounded border border-[#2E3545] focus:bg-white focus:text-black text-base text-gray-400 py-1 px-3 leading-8 duration-200 ease-in-out h-[145px] md:h-[147px]" placeholder='Hi! We are Lookscout...' defaultValue={""} onChange={formik.handleChange} />
                                    {formik.touched.message && formik.errors.message && (
                                        <div className="text-red-500">{formik.errors.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="md:p-2">
                                <label className="md:w-full flex justify-start items-center font-medium">
                                    <Checkbox name='isAgreed' checked={formik.values.isAgreed} onChange={(e) => formik.setFieldValue('isAgreed', e.target.checked)} className='text-base text-[#F9F9F9]'>I agree with Lookscout Privacy Policy</Checkbox>
                                    {formik.touched.isAgreed && !formik.values.isAgreed && (
                                        <div className="text-red-500">{formik.errors.isAgreed}</div>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="p-2 md:mt-6 md:mb-8 mt-4 mb-10 w-full">
                            <button type='submit' className="w-full md:w-auto text-white bg-[#437EF7] border-0 py-3 px-[18px] focus:outline-none hover:bg-indigo-600 rounded font-semibold text-[15px]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts
