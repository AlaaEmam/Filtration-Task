import React from 'react';
import FaviconW from '../../assets/favicon-white.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <>
    
        

<footer className="bg-blue-950 mt-20 bottom-0  left-0 right-0 ">
    <div className="w-full max-w-screen-xl mx-auto  md:py-8 sm:pt-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={FaviconW} className="h-8" alt="Favicon" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Round Rock</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <Link  to="#" className="hover:underline me-4 md:me-6">About</Link >
                </li>
                <li>
                    <Link  to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link >
                </li>
                <li>
                    <Link  to="#" className="hover:underline me-4 md:me-6">Licensing</Link >
                </li>
                <li>
                    <Link  to="#" className="hover:underline">Contact</Link >
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </>;
}
