'use client'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const Contacts = () => {
    return (
        <section className="text-[#A5ACBA] relative bg-[#151B28]">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="md:text-[32px] text-2xl leading-10 font-bold mb-4 text-[#F9F9F9]">Get In Touch With Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-6 text-base ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
                </div>
                <div className="bg-[#252D3C] p-8">
                    <form action="">
                        <div className='flex md:flex-row flex-col flex-wrap items-center justify-between md:gap-y-6 gap-y-4'>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="leading-5 text-sm text-[#F9F9F9]">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-[#A5ACBA] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="leading-5 text-sm text-[#F9F9F9]">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-[#A5ACBA] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="leading-5 text-sm text-[#F9F9F9]">Phone Number</label>
                                    <input type="text" id="phone" name="phone" className="w-full bg-[#A5ACBA] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 md:w-1/2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label className="leading-5 text-sm text-[#F9F9F9]">Get Touch With Us</label>
                                    <Dropdown
                                        className="w-full bg-[#A5ACBA] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Dropdown
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="message" className="leading-7 text-sm text-[#F9F9F9]">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                            </div>
                            <div className="md:p-2">
                                <label className="md:w-full flex justify-start items-center font-medium">
                                    <input className="mr-2 leading-tight rounded" type="checkbox" />
                                    <p className="text-base">
                                        I agree with Lookscout Privacy Policy
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="p-2 md:mt-6 md:mb-8 mt-4 mb-10 w-full">
                            <button className="w-full md:w-auto text-white bg-[#437EF7] border-0 py-3 px-[18px] focus:outline-none hover:bg-indigo-600 rounded font-semibold text-[15px]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contacts
