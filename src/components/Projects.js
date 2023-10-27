import React from "react";
import PropTypes from "prop-types";
import ProjectsProp from "./ProjectsProp";
import styles from "./Projects.css";


const Projects = () => {
    const projects = [
      {
        projectName: "AAAAA",
        description: "Descripcion epica",
        url: "https://www.google.com",
        img: "./images/9616997915_3ceb277ca1_b.jpg"
      },
      {
        projectName: "BBBBB",
        description: "Descripcion epica",
        url: "https://www.google.com",
        img: "./images/9616997915_3ceb277ca1_b.jpg"
      }
    ];
  
    return (
      <div className="projects-section">
        {projects.map((project, index) => 
          <ProjectsProp 
            key={index}
            projectName={project.projectName} 
            description={project.description} 
            url={project.url}
            img={project.img}
          />
        )}
      </div>
    );
  };
  
  export default Projects;