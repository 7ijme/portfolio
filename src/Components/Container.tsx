import React from "react";
import Header from "./Header";
import "../Styles/container.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {};

export default function Container({}: Props) {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
