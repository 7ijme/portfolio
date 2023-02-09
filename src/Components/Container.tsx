import React from "react";
import Header from "./Header";
import "../Styles/container.scss";
import About from "./About";
import Skills, { SkillType } from "./Skills";
import Projects, { ProjectType } from "./Projects";
import Footer from "./Footer";
import data from "../assets/data.json";
import Contact from "./Contact";
import Rate from "./Rate";

type Props = {};

export type Data = {
  projects: ProjectType[];
  skills: SkillType[];
};

export default function Container({}: Props) {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills data={data} />
      <Projects data={data} />
      <Rate />
      <Contact />
      <Footer />
    </div>
  );
}
