import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="about">
      <section className="about-me">
        <h1 className="main-title">Matan Amzaleg</h1>
        <section className="info-sec flex column">
          <article className="first-paragraph">
            <p>
              As a Full-Stack and Front-end Developer, I am passionate about
              solving challenging problems and creating innovative solutions for
              Web apps.
              <br /> With experience in developing single-page-applications
              using the latest technologies such as Node.js, Vue.js, Vuex,
              React, Redux, Angular, and MongoDb, I have the skills and
              expertise to tackle any project. <br /> I recently completed an
              intensive coding bootcamp (640 hours) at Coding Academy which
              equipped me with the knowledge and skills to become a Full Stack
              developer. <br />
              <NavLink to={"/project/p101"}>My latest project</NavLink> , a
              Trello-clone app, showcases my abilities and was developed using
              Vue, Node.js, and MongoDB.
            </p>
          </article>
          <article className="second-paragraph">
            <p>
              I have a passion for learning and self-improvement, which is why I
              have also completed a Full-Stack Web Coding Bootcamp and a
              Full-Stack Web course on Udemy. I am a graduate of Makif Vav,
              where I studied at an excellent class and completed full high
              school diploma including Computer science (10 units), Physics and
              Math (5 units) in 2013-2018.
            </p>
          </article>
          <article className="third-paragraph">
            <p>
              In addition to my technical skills, I have experience working as a
              Salesman, where I was nominated as an “Excellent Employee” for Dec
              2021.<br /> I have also served in the military, where I held various
              commanding positions, such as a commander, sergeant, and company
              sergeant major. I am a highly adaptable and driven individual who
              is always striving for excellence.
            </p>
          </article>
          <article className="fourth-paragraph">
            <p>
              I am fluent in Hebrew, English and have basic knowledge of
              Spanish. My language proficiency has been an asset to me in my
              travels, I have traveled to South America visiting Argentina,
              Brazil, Peru, Colombia, Mexico and Belize. This trip was an
              incredible experience and allowed me to immerse myself in
              different cultures and learn more about the world. It also
              expanded my perspective and made me more open-minded to different
              ways of thinking.
            </p>
          </article>
          <article className="fifth-paragraph">
            <p>
              If you're looking for a driven and skilled Full-Stack developer,
              I'd love the opportunity to discuss how my skills and experience
              can contribute to your team.
            </p>
          </article>
          <NavLink className="rounded-btn" to={"/contact"}>
            Contact Me
          </NavLink>
        </section>
      </section>
    </section>
  );
};
