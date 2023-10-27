import React from "react";
import PropTypes from "prop-types";
import ProjectsProp from "./ProjectsProp";
import styles from "./Projects.css";


const Projects = () => {
    const projects = [
      {
        projectName: "TecXotic",
        description: "Designed and implemented the web interface for the ROV pilot and copilot ensuring a friendly user experience in order to accomplish the competition missions using Figma, React, CSS and JavaScript.",
        img: " proyecto3.png"
      },      
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