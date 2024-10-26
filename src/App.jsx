import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Testymonials from './component/Testymonials/Testymonials';
import Services from './component/Services/Services';
import NotFound from './component/Notfound/Notfound';

let x = createBrowserRouter([
  {path: "", element: <Layout/> ,children: [
    {index: true, element: <Home/>},
    {path: "about", element: <About/>},
    {path: "contact", element: <Contact/>},
    {path: "services", element: <Services/>},
    {path: "testymonials", element: <Testymonials/>},
    {path: "*", element: <NotFound/>},

  ]},
])


function App() {
  const [count, setCount] = useState(0)

  return <>   
  <RouterProvider router={x}>
   
  </RouterProvider>

  </>
    
}

export default App
