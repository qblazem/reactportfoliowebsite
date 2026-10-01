import React from "react";
import {Link} from "react-router-dom";

export default function ProjectCard({ project, detailed = false }) {
    return (
        <div className={detailed ? "project-card detailed" : "project-card"}>

            {detailed && (
                <p className="project-label">
                    PROJECT_{String(project.id).padStart(2, "0")}
                </p>
            )}

            <Link to={'/projects'} className={'project-link'}>

                <img
                    className="project-card-image"
                    src={project.image}
                    alt={project.title}
                />

                <div className="project-card-text">

                    <h2>{project.title}</h2>

                    {project.technologies && (
                        <p className="project-tech">
                            {project.technologies.join(" • ")}
                        </p>
                    )}

                    <p>
                        {project.description}
                    </p>

                    {detailed && project.status && (
                        <p className="project-status">
                            STATUS: {project.status.toUpperCase()}
                        </p>
                    )}

                </div>
            </Link>
        </div>
    );
}
