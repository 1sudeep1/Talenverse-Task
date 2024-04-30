import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import socialIconData from './socialIconData'
import footerLinksData from './footerLinksData'

const Footer = () => {
    return (
        <>
            <footer className="body-font mb-10">
                <div className="container px-5 mx-auto flex md:items-center lg:items-start lg:flex-nowrap md:flex-row md:flex-wrap flex-wrap justify-between">
                    <div className="w-full md:w-64 flex-shrink-0 mx-auto lg:me-32 md:me-52  md:text-left flex-col">
                        <Link href='/' className="flex title-font font-medium text-gray-900 lg:mb-0">
                            <Image src='/company-logo.svg' width={160} height={40} alt='company-logo' />
                        </Link>
                        <p className="mt-2 text-base text-gray-500">Generate outside the box thinking with the possibility to targtet the low.</p>
                        <ul className='md:hidden my-5 flex lg:flex ms-3 justify-between md:justify-start gap-4 text-2xl '>
                            {socialIconData.map((socialItem, socialId) => {
                                return (
                                    <li key={socialId}><Link href='#'>{socialItem.socialIcon}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    {footerLinksData.map((footerLinkItem, footerLinkId) => {
                        return (
                            <div key={footerLinkId} className="lg:w-1/4 md:w-1/3 md:mx-auto px-4">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mb-5">{footerLinkItem.mainCategory}</h2>
                                <nav className="list-none mb-10 text-base">
                                    {footerLinkItem.subCategories.map((footerSubLinkItem, footerSubLinkId) => {
                                        return (
                                            <li key={footerSubLinkId} className='mb-2 font-medium'>
                                                <Link href='#' className="text-gray-600 hover:text-gray-800">{footerSubLinkItem.subCatTitle}</Link>
                                            </li>
                                        )
                                    })}
                                </nav>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="py-4 px-5"> */}
                <div className='flex flex-col items-center'>
                <div className='p-3 rounded-full bg-[#F5FAFF]'>
                        <Image src='/footer-icon.svg' width={24} height={24} alt='company-logo' />
                    </div>

                </div>
                    <div className='flex items-center justify-center md:justify-between lg:justify-center mx-auto px-5 py-4'>
                        <p className="text-gray-500 text-center lg:text-center ">© 2023 Lookscout.
                            <Link href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All right Reserved.</Link>
                        </p>
                        <ul className='hidden lg:hidden md:flex justify-between gap-4 text-2xl'>
                            {socialIconData.map((socialItem, socialId) => {
                                return (
                                    <li key={socialId}><Link href='#'>{socialItem.socialIcon}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                {/* </div> */}

            </footer>

        </>
    )
}

export default Footer
