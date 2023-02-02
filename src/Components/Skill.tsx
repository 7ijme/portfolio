import React, { useEffect } from "react";

export type Skill = {
  name: string;
  level: number;
  color: string;
  bgcolor: string;
};

type Props = {
  skill: Skill;
};

export default function Skill({ skill }: Props) {
  const skillRef = React.useRef<HTMLDivElement>(null);

  // set attributes for the skill bar
  const skillBarStyle = {
    width: skill.level + "%",
  };

  useEffect(() => {
    if (skillRef.current) {
      skillRef.current.style.setProperty("--skill-width", skill.level + "%");
    }
  }, [skill.level]);

  return (
    <div
      className="skill-wrapper"
      style={{ color: skill.color }}>
      <div
        ref={skillRef}
        className="skill"
        style={{ backgroundColor: skill.bgcolor }}></div>
      <h3>{skill.name}</h3>
    </div>
  );
}
