'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import navMenu from './navData'
import authButton from './authButton'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true,
    },
];
const Header = () => {
    const [isActive, setIsActive] = useState('Log In')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <>
            <header className="text-black body-font border text-[15px] lh-[22px]">
                <div className="container mx-auto flex justify-between flex-wrap p-5 lg:flex-row items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900 lg:mb-0">
                        <Image src='/company-logo.svg' width={160} height={40} alt='company-logo' />
                    </Link>

                    <nav className="hidden mx-auto lg:ms-20 lg:ml-4 lg:py-1 lg:pl-4 lg:flex flex-wrap items-center text-base justify-center lg:gap-2">
                        {navMenu.map((navItem, navId) => {
                            switch (navItem.type) {
                                case "dropdown":
                                    return <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space className='font-semibold hover:bg-[#437EF7] hover:text-white p-2 rounded'>
                                                {navItem.navLabel}
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    break;
                                default:
                                    return (
                                        <Link key={navId} href={navItem.href} onClick={() => setIsActive(navItem.navLabel)} className={`${isActive === navItem.navLabel ? 'bg-[#437EF7] text-white' : ''} hover:bg-[#437EF7] hover:text-white p-2 rounded mr-5 font-semibold`}>{navItem.navLabel} </Link>
                                    )
                            }
                        })}
                    </nav>

                    <div className='hidden lg:flex justify-between gap-5'>
                        {authButton.map((authItem, authId) => (
                            <button key={authId} onClick={() => setIsActive(authItem.buttonName)} className={`${isActive === authItem.buttonName ? 'bg-[#437EF7] text-white' : 'text-[#437EF7]'} hover:bg-[#437EF7] hover:text-white  p-2 font-semibold focus:outline-none rounded mt-4 md:mt-0`}>{authItem.buttonName}
                            </button>
                        ))}
                    </div>
                    <div onClick={openDrawer} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example" className='lg:hidden'>
                        <Image src='/menuIcon.svg' width={24} height={24} alt='menu-icon' />
                    </div>
                    <div id="drawer-example" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto duration-700 transition-transform ${isDrawerOpen ? '' : '-translate-x-full'} bg-white w-full dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-label">
                        <div className='flex flex-col items-center gap-3'>
                            <nav className=" flex flex-col text-center gap-3 text-[#002663]">
                                {navMenu.map((navItem, navId) => {
                                    return (
                                        <Link key={navId} href={navItem.href} onClick={() => { setIsActive(navItem.navLabel), closeDrawer() }} className={`${isActive === navItem.navLabel ? 'bg-[#437EF7] text-white' : ''} hover:bg-[#437EF7] hover:text-white p-2 rounded mr-5 font-semibold cursor-pointer`}>{navItem.navLabel} </Link>
                                    )
                                })}
                            </nav>
                        </div>
                        <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
