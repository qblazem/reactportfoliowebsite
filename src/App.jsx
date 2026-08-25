import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Gallery from "./routes/Gallery.jsx";
import Notfound from "./routes/Notfound";
import MyButton from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";


function Layout() {
    return(
        <div>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
}

export default function App() {
    return(
        <BrowserRouter>
            {/* specific routes for each page  */}
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path='Gallery' element={<Gallery/>} />

                    <Route path='*' element={<Notfound />} />
                </Routes>
        </BrowserRouter>
    );
}





