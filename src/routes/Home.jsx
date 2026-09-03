import React from 'react';
import MyButton from "../components/Button";
import q from '../assets/q.png'
import HorizontalLine from "../components/HorizontalLine.jsx";
import r from '../assets/rprogram.jpg'
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectdata.jsx';
import rp from '../assets/randpro.jpg'


export default function Home() {
    return (
        <div>
            <h1 className={"heading2"}>
                Quillan McMurry
            </h1>

            <h2 className={"heading3"}>
                Computer Science and Data Analytics student at Grand View University.
            </h2>
            <div>
                <HorizontalLine/>
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