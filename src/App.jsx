import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import About from "./routes/About.jsx";
import Notfound from "./routes/Notfound";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";




export default function App() {
    return(
        <BrowserRouter>
            {/* specific routes for each page  */}

            <ScrollToTop />

            <Navbar/>

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





