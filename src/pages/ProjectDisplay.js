import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="" />
      <div style={{ width: "80%" }}>
        <p> &emsp; {project.description}</p>
      </div>
      <p>
        Application URL:{" "}
        <a target="_blank" href={project.appUrl} rel="noreferrer noopener">
          {project.appUrl}
        </a>
      </p>
      <a
        target="_blank"
        href={project.gitHubUrl}
        style={{ textDecoration: "none", textAlign: "center", display: "flex" }}
        rel="noreferrer noopener"
      >
        <div className="gitHubLink">
            <GitHubIcon /> <p>&nbsp;Click to see on GitHub </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectDisplay;
