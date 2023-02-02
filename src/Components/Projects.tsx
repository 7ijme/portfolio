import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Algorithms",
      description: "Dijkstra's & A* algorithm visualized",
      imgLocation: "./algorithms.png",
      link: "/projects/algorithms",
      color: "white",
    },
    {
      name: "Boxplot",
      description: "Data representation tool",
      imgLocation: "./boxplot.png",
      link: "/projects/boxplot",
      color: "#aee0f9",
    },
  ];
  return (
    <section
      className="projects waves"
      id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </section>
  );
}
