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

