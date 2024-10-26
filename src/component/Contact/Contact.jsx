
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import Font Awesome icons
export default function Contact() {
    //Form Post Data  
    const [name, setNameForm] = useState('');
    const [email, setEmailForm] = useState('');
    const [phone, setPhoneForm] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            // Sending a POST request to the API
            const response = await axios.post('http://upskilling-egypt.com:3001/contact', {
                email: email,
                phone: phone,
                name: name 
                
                
            });

            console.log('Response:', response.data); // Log the response from the server
        } catch (error) {
            console.error('Error posting data:', error); // Log any errors
        }
    };
        // company conatct data
    const emailComapny = "upskilling.eg1@gmail.com"; // Replace with your actual email
    const phoneNumber = "+20-115-493-2137"; // Replace with your actual phone number

    return (
        <>

            <div className="title relative mt-20 text-center">
                <h1 className="font-extrabold text-4xl">Contact</h1>
                <div className="line-135"></div>
                <div className="line-141"></div>
                <div className="line-45"></div>
                <div className="line-45-neg"></div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8"> {/* Use flex-direction for responsiveness */}
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="grid gap-6 mb-6">
                        <div>
                            <label htmlFor="your_name" className="hidden block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                            <input
                                type="text"
                                id="your_name"
                                className="bg-blue-300 border border-gray-300 text-gray-950 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setNameForm(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="hidden block mb-2 text-sm font-medium text-gray-900">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-blue-300 border border-gray-300 text-gray-950 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmailForm(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="hidden block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="bg-blue-300 border border-gray-300 text-gray-950 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                placeholder="Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhoneForm(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-blue-700 bg-white border-2 border-blue-700 hover:bg-blue-800 hover:text-white font-medium rounded-full text-sm w-full py-4">
                        Submit
                    </button>
                </form>

                {/* Contact Information */}
                <div className="max-w-md mb-4">
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <a href={`mailto:${emailComapny}`} className="text-blue-500 hover:underline">
                            {emailComapny}
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-blue-500 mr-2" />
                        <a
                            href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
