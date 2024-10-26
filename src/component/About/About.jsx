import React from 'react';
import Background2 from '../../assets/background-2.png';
import About_img from '../../assets/image-1.png';
export default function About() {
    return (
        <>
        <div 
            className="flex flex-col md:flex-row justify-evenly items-center"   
            style={{ 
                backgroundImage: `linear-gradient(308deg, #6D91EE 0% 50%, #f1f1f100 50% 100%), url(${Background2})`,
                backgroundSize: 'cover',
                height: '100vh', 
                width: '100%' 
            }}
        >
            {/* LEFT SIDE */}
            <div className="text-left flex flex-col w-full md:w-2/5 p-4"> 
                <h3 className="text-white font-bold text-4xl md:text-5xl">About Us</h3> 
                <p className="text-white font-light text-base md:text-sm mt-6"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, commodi. Iusto, impedit, ullam quo odio doloremque atque maxime veritatis ex error accusantium vitae reprehenderit sed cumque porro deleniti recusandae a!
                </p>
                <img className="object-contain h-48 md:h-60 w-full md:w-96 mt-3" src={About_img} alt="About_img" /> 
            </div>

            {/* RIGHT SIDE */}
            <div className="text-right flex flex-col w-full md:w-2/5 p-4"> 
                <h3 className="text-white font-bold text-4xl md:text-5xl">Where</h3> 
                <p className="text-white font-light text-base md:text-sm mt-6"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                {/* BUTTON */}
                <div className="text-right mt-4">
                    <button className="text-white bg-yellow-300 hover:bg-yellow-400 font-extrabold rounded-full text-base px-8 md:px-14 py-3 md:py-5"> {/* Adjust padding for responsiveness */}
                        Help Me
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}