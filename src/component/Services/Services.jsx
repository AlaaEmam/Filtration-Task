import React from 'react'
import Services_1 from '../../assets/services-1.png'
import Services_2 from '../../assets/services-2.png'
import Services_3 from '../../assets/services-3.png';

export default function Services() {
    return (
        <>
  <div className=" my-9">
  <div className="title text-center">
    <h1 className="font-extrabold text-4xl">Services</h1>
    {/* <div className="line-135"></div>
    <div className="line-141"></div>
    <div className="line-45"></div>
    <div className="line-45-neg"></div> */}
</div> 

<div className="flex flex-wrap gap-4 justify-center mt-8"> {/* Use flex-wrap for responsiveness */}
    
    {/* Service Card 1 */}
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-card shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={Services_1} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Lorem Lorem</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>

    {/* Service Card 2 */}
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-card shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={Services_2} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Lorem Lorem</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>

    {/* Service Card 3 */}
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-card shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={Services_3} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Lorem Lorem</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
    </div>
</div>
           
<div className="flex justify-center items-center mt-6"> 
    <button className="text-white bg-blue-950 hover:bg-blue-600 font-medium rounded-full text-base px-8 md:px-14 py-3 md:py-5 mt-4 mb-2">
        Help Me
    </button>
</div>
       

  </div>
        
        </>
    );
}

