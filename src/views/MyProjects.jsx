import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectService } from "../services/project-service";
import Aos from "aos";

export const MyProjects = () => {
  useEffect(()=> {
    Aos.init({duration:20000})
  },[])

  const history = useNavigate();

  const onNavigate = (id) => {
    history(`/project/${id}`);
  };

  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(projectService.query());
  });

  console.log(projects);

  return projects ? (
    <section className="my-projects">
      <h1 className="main-title">My projects</h1>
      <section data-aos="fade-down" data-aos-duration="1000" className="all-projects flex">
        {projects.map((prj, idx) => {
          return (
            <div 
              onClick={() => onNavigate(prj.id)}
              key={prj.id}
              className="project flex"
            >
              <h1>{prj.title}</h1>
              <div
                className="square"
                style={{
                  backgroundImage: `url(${require(`../assets/imgs/projects/${prj.title}/1.jpg`)})`,
                }}
              >
                <div className="black-square">{idx + 1}</div>
              </div>
              <p>{prj.description}</p>
              <p className="tech-p bolder">{prj.technologies}</p>
            </div>
          );
        })}
      </section>
    </section>
  ) : null;
};
