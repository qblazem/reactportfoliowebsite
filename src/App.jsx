import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";
import Gallery from "./routes/Gallery.jsx";
import Notfound from "./routes/Notfound";
import MyButton from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";




export default function App() {
    return(
        <body>
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

                        <Route path="/contact" element={<Contact />} />

                        <Route path="/projects" element={<Projects />} />

                        <Route path='Gallery' element={<Gallery/>} />

                        <Route path='*' element={<Notfound />} />
                    </Routes>
                </main>
                <footer>

                </footer>
            </BrowserRouter>
        </body>
    );
}





