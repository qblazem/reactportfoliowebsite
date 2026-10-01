import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectdata.jsx';
import Hero from '../components/Hero.jsx';
import ReactToast from '../components/MadeWithReact.jsx'


export default function Home() {
    return (
        <div className="wrapper">
            <ReactToast />
            <div className={'hero-container'}>
                <Hero />
            </div>

            <section className={"project-section"}>
                <h1 className={"heading3"}>
                    See some of my projects!
                </h1>
                <div className={'project-container'}>
                    {projects
                        .filter(project => project.featured)
                        .map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))
                    }
                </div>
            </section>




        </div>


    );
}