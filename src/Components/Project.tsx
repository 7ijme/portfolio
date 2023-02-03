import React, { useEffect } from "react";
import { ProjectType } from "./Projects";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  return (
    <div
      className="project"
      style={{ borderColor: project.color }}>
      <div className="project-header">
        <img
          src={project.image}
          alt={project.name}
          draggable="false"
        />
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <div className="link">
        <a
          href={project.link}
          target="_blank">
          Check it out!
        </a>
      </div>
    </div>
  );
}
