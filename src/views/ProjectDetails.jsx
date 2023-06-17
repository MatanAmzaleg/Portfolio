import { useEffect } from "react";
import { useState } from "react";
import { projectService } from "../services/project-service";
import { Route, Router, useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Pagination } from "@mui/material";

export const ProjectDetails = () => {
  let { id } = useParams();

  const [currProj, setCurrProj] = useState();
  const [activePage, setActivePage] = useState();
  const navigate  = useNavigate();

  const projectsLength = projectService.query().length


  useEffect(() => {
    console.log(id);
    setCurrProj(projectService.getById(id));
    const projIdx = projectService.query().findIndex(proj => proj.id === id) + 1;
    setActivePage(projIdx)
  },[id]);

  const onChangeProjPage = (ev, newPage) => {
    console.log(newPage);
    const newProjId = newPage;
    navigate(`/project/p${newProjId + 99}`);
  };

  return currProj ? (
    <section className="details-section">
      <h1 className="main-title">{currProj.title}</h1>
      <h3>{currProj.description}</h3>
      <Carousel className="carousel" width="80%">
        {currProj.imgs.map((img) => (
          <div>
            <img
              src={require(`../assets/imgs/projects/${currProj.title}/${img}.jpg`)}
            />
          </div>
        ))}
      </Carousel>

      <p className="p-expand">{currProj.expanding}</p>
      <a className="rounded-btn" target="_blank" href={currProj.link}>
        To the site
      </a>
      <Pagination page={activePage} onChange={(event, newPage) => onChangeProjPage(event, newPage)} size="large" variant="outlined" /*sx={ {"Button.MuiPaginationItem-circular" : {bgcolor:'#f58f59'}}}*/ count={projectsLength} />
    </section>
  ) : null;
};
