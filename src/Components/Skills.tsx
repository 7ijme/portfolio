import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  const skills = [
    { name: "HTML", level: 85, bgcolor: "#e34c26", color: "white" },
    { name: "JavaScript", level: 95, bgcolor: "#f0db4f", color: "black" },
    { name: "TypeScript", level: 90, bgcolor: "#007acc ", color: "white" },
    { name: "React", level: 80, bgcolor: "#61dafb", color: "white" },
    { name: "CSS", level: 75, bgcolor: "#264de4", color: "white" },
    { name: "SCSS", level: 75, bgcolor: " #cc6699", color: "white" },
    {
      name: "Creating designs",
      level: 30,
      bgcolor: " #00aa99",
      color: "white",
    },
    { name: "C#", level: 80, bgcolor: "#9b4993", color: "white" },
    { name: "Java", level: 85, bgcolor: "#f89820 ", color: "white" },
    { name: "Rust", level: 30, bgcolor: "#ed6901 ", color: "white" },
    { name: "Social skills", level: 5, bgcolor: "#1877F2 ", color: "white" },
  ];

  return (
    <section
      className="skills"
      id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </ul>
    </section>
  );
}
