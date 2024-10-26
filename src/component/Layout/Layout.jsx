import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
        <Navbar/>
           <section className="min-h-screen mt-14">
           <Outlet/>
           </section> 
        
        </>
    );
}