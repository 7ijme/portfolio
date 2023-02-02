import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <img
        src="./small-logo.png"
        draggable="false"
        alt=""
      />
      <ul>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
