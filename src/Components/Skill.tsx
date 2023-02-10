import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  const { ref: inVieuwRef } = useInView({
    onChange(inView) {
      if (inView) {
        skillRef.current?.classList.add("animate");
      } else {
        skillRef.current?.classList.remove("animate");
      }
    },
  });

  useEffect(() => {
    if (skillRef.current) {
      skillRef.current.style.setProperty("--skill-width", skill.level + "%");
    }
  }, [skill.level]);

  return (
    <div
      ref={inVieuwRef}
      className="skill-wrapper"
      style={{ color: skill.color }}>
      <div
        ref={skillRef}
        className="skill"
        style={{
          backgroundColor: skill.bgcolor,
          animationDuration:
            (skillRef?.current &&
              (+skillRef?.current?.style
                ?.getPropertyValue("--skill-width")
                ?.replace("%", "") /
                100) *
                1.5 +
                "s") ||
            "1.5s",
        }}></div>
      <h3>{skill.name}</h3>
    </div>
  );
}
