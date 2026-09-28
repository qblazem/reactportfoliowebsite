import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import About from "./routes/About.jsx";
import Notfound from "./routes/Notfound";
import MyButton from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";




export default function App() {
    return(
        <BrowserRouter>
            {/* specific routes for each page  */}
            <header>
                <Navbar/>
                <h1>

                </h1>

            </header>
            <main>
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/projects" element={<Projects />} />
                    
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </main>

            <Footer />

        </BrowserRouter>
    );
}





