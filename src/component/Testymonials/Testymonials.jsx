import React from 'react';
import User from '../../assets/person.png';

export default function Testimonials() {
    return (
        <>
            <div className="bg-gray-200 py-9">
                <div className="title  text-center">
                    <h1 className="font-extrabold text-4xl">Testimonials</h1>
                    {/* <div className="line-135"></div>
                    <div className="line-141"></div>
                    <div className="line-45"></div>
                    <div className="line-45-neg"></div> */}
                </div>

                <div className="flex flex-wrap justify-center mt-8 gap-4"> {/* Use flex-wrap for responsiveness */}
                    {/* Testimonial Card 1 */}
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex p-5">
                            {/* User Photo */}
                            <div className="w-1/4">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-cover w-24 h-24 rounded-full shadow-lg"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="w-3/4 p-4">
                                <h2 className="text-lg font-bold text-blue-500">Courtney Henry</h2>
                                <p className="text-gray-700 mt-2">
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                </p>
                                {/* Star Rating */}
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="fas fa-star text-yellow-500"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex p-5">
                            {/* User Photo */}
                            <div className="w-1/4">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-cover w-24 h-24 rounded-full shadow-lg"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="w-3/4 p-4">
                                <h2 className="text-lg font-bold text-blue-500">John Doe</h2>
                                <p className="text-gray-700 mt-2">
                                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                                </p>
                                {/* Star Rating */}
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="fas fa-star text-yellow-500"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex p-5">
                            {/* User Photo */}
                            <div className="w-1/4">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-cover w-24 h-24 rounded-full shadow-lg"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="w-3/4 p-4">
                                <h2 className="text-lg font-bold text-blue-500">Jane Smith</h2>
                                <p className="text-gray-700 mt-2">
                                    "It has survived not only five centuries but also the leap into electronic typesetting."
                                </p>
                                {/* Star Rating */}
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="fas fa-star text-yellow-500"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 4 */}
                    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex p-5">
                            {/* User Photo */}
                            <div className="w-1/4">
                                <img
                                    src={User}
                                    alt="User"
                                    className="object-cover w-24 h-24 rounded-full shadow-lg"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <div className="w-3/4 p-4">
                                <h2 className="text-lg font-bold text-blue-500">Alex Johnson</h2>
                                <p className="text-gray-700 mt-2">
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                </p>
                                {/* Star Rating */}
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="fas fa-star text-yellow-500"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-6">
                    <button className="text-white bg-blue-950 hover:bg-blue-600 font-medium rounded-full text-base px-8 md:px-14 py-3 md:py-5">
                        Help Me
                    </button>
                </div>
            </div>
        </>
    );
}