import Header from "./Header";
import About from "./About";
import Skills, { SkillType } from "./Skills";
import Projects, { ProjectType } from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import Rate from "./Rate";
import Introduction from "./Introduction";
import "../Styles/container.scss";
import data from "../assets/data.json";

type Props = {};

export type Data = {
	projects: ProjectType[];
	skills: SkillType[];
};

export default function Container({}: Props) {
	return (
		<div className="container">
			<Header />
			<Introduction />
			<About />
			<Skills data={data} />
			<Projects data={data} />
			<Rate />
			<Contact />
			<Footer />
		</div>
	);
}
