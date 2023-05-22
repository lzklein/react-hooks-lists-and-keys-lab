import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const technologies = projects.map((project) => {
    return (
      project.technologies
    )
  })
  const projectsElement = projects.map((project) => {
    return (
      <div key={project.id}>
        <h1>{project.name}</h1>
        <p>{project.about}</p>
        <ProjectItem technologies={technologies}/>
      </div>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsElement}</div>
    </div>
  );
}

export default ProjectList;
