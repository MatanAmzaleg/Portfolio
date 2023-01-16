import Aos from "aos";
import { useEffect } from "react";
import { NavLink, useNavigate  } from "react-router-dom";


export const LatestProjects = ({ top3 }) => {
  useEffect(()=> {
    Aos.init({duration:20000})
  },[])
  
  const history = useNavigate();

  const onNavigate = (id) => {
    history(`/project/${id}`)
  }

  return  (
    <section className="latest-projects">
      <div className="title-section flex">
        <h1 className="main-title">Features</h1>
        <NavLink to={"/my-projects"} className="all-proj flex">
          <p>To all projects</p>
          <img
            className="list-img"
            src={require("../assets/imgs/list-text.png")}
            alt=""
          />
        </NavLink>
      </div>
      <section className="projects-section flex">
        {top3.map((prj, idx) => {
          return (
            <div data-aos="fade-right" data-aos-duration="1000" onClick={()=> onNavigate(prj.id)} key={prj.id} style={{marginTop: `${idx * 60}px`}} className="project flex">
              <div className="square" style={{backgroundImage: `url(${require(`../assets/imgs/projects/${prj.title}/1.jpg`)})`}}>
                <div className="black-square">{idx +1}</div>
              </div>
              <h1>{prj.title}</h1>
              <p>{prj.description}</p>
              <p className="tech-p bolder">{prj.technologies}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};
