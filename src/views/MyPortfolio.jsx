import { MyInfo } from "../cmps/MyInfo";
import { LatestProjects } from "../cmps/LatestProjects";
import { projectService } from "../services/project-service";
import { useEffect, useState } from 'react'

export const MyPortfolio = () => {
  const [top3 , setTop3] = useState()

 
  useEffect(() => {
    setTop3(projectService.getTop3())
  }, [])


  return (
    <section className="my-portfolio flex">
        <MyInfo></MyInfo>
        {top3 &&  <LatestProjects top3={top3}></LatestProjects>}
       
    </section>
  );
};
