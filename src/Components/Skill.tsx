import { CSSProperties, useEffect, useState } from "react";
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
	const [skillClass, setSkillClass] = useState("");
	const [skillWidth, setSkillWidth] = useState(0);

	const { ref: inVieuwRef } = useInView({
		onChange(inView) {
			setSkillClass(inView ? "animate" : "");
		},
	});

	useEffect(() => {
		setSkillWidth(skill.level);
	}, [skill.level]);

	return (
		<div
			ref={inVieuwRef}
			className="skill-wrapper"
			style={{ color: skill.color }}
		>
			<div
				className={"skill " + skillClass}
				style={
					{
						backgroundColor: skill.bgcolor,
						animationDuration:
							(skillWidth / 100) * 1.5 + "s" || "1.5s",
						"--skill-width": `${skillWidth}%`,
					} as CSSProperties
				}
			></div>
			<h3>{skill.name}</h3>
		</div>
	);
}
