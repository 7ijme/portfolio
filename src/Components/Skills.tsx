import React from "react";
import { Data } from "./Container";
import Skill from "./Skill";

type Props = {
  data: Data | null;
};

export type SkillType = {
  name: string;
  level: number;
  bgcolor: string;
  color: string;
};

export default function Skills({ data }: Props) {
  return (
    <section
      className="skills"
      id="skills">
      <h2>Skills</h2>
      <ul>
        {data?.skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </ul>
    </section>
  );
}
