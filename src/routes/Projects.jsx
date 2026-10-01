import react from 'react';
import hero1 from '../assets/hero.png';
import wbd from '../assets/website-project-demo.png'
import gvt from '../assets/graph-viz-temp.jpg'
import gv from '../assets/GVVikes.png'

import projects from '../data/projectdata.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
    return (
        <div className="wrapper">

            <section className="projects-header">

                <p className="projects-label">
                    02 / PROJECTS
                </p>

                <h1>
                    Things I've Built
                </h1>

                <p className="projects-description">
                    A collection of software, data, and development projects
                    I've worked on or am currently building.
                </p>

            </section>

            <section className="project-grid">

                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        detailed={true}
                    />
                ))}

            </section>

        </div>
    );
}

