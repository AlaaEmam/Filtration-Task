import React from 'react';
import Background from '../../assets/background.png';
import Trush from '../../assets/trush.png';
import About from '../About/About';
import Services from './../Services/Services';
import Testymonials from '../Testymonials/Testymonials';
import Contact from '../Contact/Contact';
import Footer from './../Footer/Footer';

export default function Home() {
    return (
        <>
        <div>
        <div 
            className="flex justify-end bg-no-repeat bg-cover bg-center" 
            style={{ 
                backgroundImage: ` linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.40) 100%) , url(${Background})`, 
                backgroundPosition: 'left',
                height: '100vh',
                width: '100%'
            }}
        >
            <div className="flex flex-col items-center justify-evenly w-full md:w-1/2 p-4 md:text-white"> 
                <div className="rock-part flex items-center mb-4">
                    <img src={Trush} alt="Trush" className="w-20 h-20 md:w-24 md:h-24" /> 
                    <div className="p-4">
                        <h4 className="text-2xl md:text-4xl font-light text-blue-950">Round Rock</h4> 
                        <span className="text-sm md:text-base text-blue-950 font-extrabold tracking-[.555em]">Trash Hauling</span>
                    </div>
                </div>

                <div className="text-center">
                    <button 
                        type="button" 
                        className="text-white bg-blue-950 hover:bg-blue-600 font-medium rounded-lg text-sm px-6 py-2.5 mb-5 md:px-10 md:py-2.5" // Adjust padding for responsiveness
                    >
                        Experts
                    </button>
                    <h2 className="font-extralight text-4xl md:text-7xl text-blue-950">Lorem</h2> {/* Responsive text size */}
                    <h1 className="text-5xl md:text-8xl font-bold text-blue-950">Lorem Lorem</h1> {/* Responsive text size */}
                    <p className="mt-4 text-gray-700 text-sm md:text-base ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                    <button 
                        className="text-white bg-blue-950 hover:bg-blue-600 font-medium rounded-full text-sm md:text-base px-8 py-4 mt-4 mb-2" // Adjust padding for responsiveness
                    >
                        Help Me
                    </button>
                </div>
            </div>
        </div>
    </div>
            <About/>
            <Services/>
            <Testymonials/>
            <Contact/>
            <Footer/>
        </>
    );
}