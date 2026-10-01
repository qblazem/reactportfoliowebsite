import react from 'react';
import r from '../assets/rprogram.jpg'
import rq from '../assets/randpro.jpg'

import portfolioImage from "../assets/website-project-demo.png";
import mcsImage from "../assets/GVVikes.png";
import graphImage from "../assets/graph-viz-temp.jpg";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio built using React.",
        image: portfolioImage,
        technologies: ["React", "JavaScript", "CSS"],
        status: "Complete",
        featured: true
    },

    {
        id: 2,
        title: "MCS Website and App",
        description: "Website and application development for the MCS club.",
        image: mcsImage,
        technologies: ["Vue", "Android", "Supabase"],
        status: "In Progress",
        featured: true
    },

    {
        id: 3,
        title: "Graph Visualizer",
        description: "An interactive graph algorithm visualizer.",
        image: graphImage,
        technologies: ["React"],
        status: "In Progress",
        featured: false
    }
];

export default projects;