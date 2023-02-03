import React from "react";
import Header from "./Header";
import "../Styles/container.css";
import About from "./About";
import Skills, { SkillType } from "./Skills";
import Projects, { ProjectType } from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {};

export type Data = {
  projects: ProjectType[];
  skills: SkillType[];
};

export default function Container({}: Props) {
  const [data, setData] = React.useState<Data | null>(null);

  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };

  React.useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className="container">
      <Header />
      <About />
      <Skills data={data} />
      <Projects data={data} />
      <Footer />
    </div>
  );
}
