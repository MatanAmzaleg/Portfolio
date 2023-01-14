import { NavLink } from "react-router-dom";

export const MyInfo = () => {
  return (
    <section className="info">
      <div className="info-section ">
        <h1 className="main-title">
          My name is <span className="title-span">Matan</span>
        </h1>
        <p className="info-p">
          Full-Stack / Frontend Web Developer, passionate about solving
          challenges, with experience in writing single-page-applications using
          the latest WEB technologies such as Node.js, Vue.js, Vuex, React,
          Redux, Angular and MongoDb. Graduate of the Coding Academy - An
          intensive coding bootcamp (640 hours) that qualifies Full Stack
          developers.
        </p>
        <NavLink className="rounded-btn" to={"/contact"}>
          Contact Me
        </NavLink>

        <div className="languages-section flex">
          <p className="java-script language">JavaScript</p>
          <p className="mongo-db language">MongoDB</p>
          <p className="node-js language">Node.js</p>
          <p className="vue language">Vue.js</p>
          <p className="react language">React</p>
          <p className="angular language">Angular</p>
        </div>
      </div>
      <div className="img-section">
        <img
          className="main-img"
          src={require("../assets/imgs/my-photo.jpg")}
          alt=""
        />
      </div>
    </section>
  );
};
