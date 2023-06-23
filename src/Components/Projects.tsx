import { Data } from "./Container";
import Project from "./Project";

export type ProjectType = {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
  no_page?: boolean;
};

type Props = {
  data: Data | null;
};

export default function Projects({ data }: Props) {
  return (
    <section
      className="projects waves"
      id="projects">
      <h2>Projects</h2>
      <ul>
        {data?.projects.map((project, i) => (
          <Project
            project={project}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
}
