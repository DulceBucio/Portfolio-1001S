import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectsProp.css";

export default function ProjectsProp (props) {
  return (
    <div className="project">
      <div className="project-thumbnail">
        <img src={props.img} alt="Project Thumbnail"/>
      </div>
      <div className="project-info-container">
        <div className="project-info">
            <h2>{props.projectName}</h2>
            <p>{props.description}</p>
            <p>{props.url}</p>
        </div>
      </div>
    </div>
  );
};