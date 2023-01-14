import { useEffect } from "react";
import { useState } from "react";
import { projectService } from "../services/project-service";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const ProjectDetails = () => {
  let { id } = useParams();

  const [currProj, setCurrProj] = useState();

  useEffect(() => {
    setCurrProj(projectService.getById(id));
  });

  return currProj ? (
    <section className="details-section">
      <h1 className="main-title">{currProj.title}</h1>
      <h3>{currProj.description}</h3>
      <Carousel className="carousel" width="80%">
        <div>
          <img src={require(`../assets/imgs/projects/${currProj.title}/1.jpg`)} />
        </div>
        <div>
          <img src={require(`../assets/imgs/projects/${currProj.title}/2.jpg`)} />
        </div>
        <div>
          <img src={require(`../assets/imgs/projects/${currProj.title}/3.jpg`)} />
        </div>
        <div>
          <img src={require(`../assets/imgs/projects/${currProj.title}/4.jpg`)} />
        </div>
      </Carousel>
      
      <p className="p-expand">{currProj.expanding}</p>
      <a className="rounded-btn" target="_blank" href={currProj.link}>To the site</a>
    </section>
  ) : null;
};
