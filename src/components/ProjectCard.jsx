import projects from "../routes/Projects.jsx"
import r from "../assets/rprogram.jpg";
import React from "react";


export default function ProjectCard(props){
    return (
            <div className="project-card">
                    <div>
                        <img className ="project-card-image" src={props.project.image} alt="" />
                    </div>
                    <div className={'project-card-text'}>
                         {props.project.description}
                    </div>
                </div>
        )
}

