import React from 'react';
import MyButton from "../components/Button";
import q from '../assets/q.png'
import HorizontalLine from "../components/HorizontalLine.jsx";
import r from '../assets/rprogram.jpg'
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectdata.jsx';
import rp from '../assets/randpro.jpg'
import Hero from '../components/Hero.jsx';
import ReactToast from '../components/MadeWithReact.jsx'


export default function Home() {
    return (
        <div className="wrapper">
            <ReactToast />
            <div className={'hero-container'}>
                <Hero />
            </div>

            <div>
                <h1 className={"heading3"}>
                    See some of my projects!
                </h1>
            </div>
            <div className={"project-container"}>
                <ProjectCard project={projects[0]} />
                <ProjectCard project={projects[1]} />
            </div>




        </div>


    );
}