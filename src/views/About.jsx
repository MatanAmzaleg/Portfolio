import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
// import { faForm } from "@fortawesome/free-regular-svg-icons";

export const About = () => {
  return (
    <section className="about">
      <section className="about-me">
        <h1 className="main-title">About me</h1>
        <section className="info-sec flex column">
          <article className="first-paragrap flex align-center">
            <div className="details">
              <h1 className="parag-title">
                2013-2018 - Makif Vav <span className="orange">"Exellent"</span>{" "}
                Class
              </h1>
              <p>
                I'm proud to say I graduated from Makif Vav High School with a
                full high school diploma and an{" "}
                <span className="bolder">outstanding average</span> of{" "}
                <span className="orange">102.</span> My time in the
                highly-regarded "Excellent" class enabled me to immerse myself
                in the subjects of Computer Science (10 units) and Physics (5
                units), further enhancing my knowledge and skills in these
                areas.
              </p>
            </div>
            <img
              className="graduate-img"
              src={require("../assets/imgs/about/graduate.jpg")}
              alt=""
            />
          </article>
          <article className="second-paragraph flex align-center column">
            <div className="details">
              <h1 className="parag-title">08.2018-03.2021 - IDF "Magal"</h1>
              <p> Filling variuos commanding positions such as:</p>
              <div className="positions">
                <div className="flex align-center">
                  <p>
                    <span className="bolder">Commander - </span> Responsible for
                    a team of 10-15 soldiers on a daily basis. Management of
                    staff training and compliance with a tight and intensive
                    schedule. Transferring study material in the instructional
                    aspect in a professional way.
                  </p>
                </div>
                <div className="flex align-center">
                  <p>
                    <span className="bolder">Sergeant - </span> Preform the role
                    of the deputy to the platoon commander and replacing him in
                    his absence. Initiation and management of learning processes
                    of new and veteran commanders within the department.
                    Managing the logistics aspect at the platoon level. <br />
                  </p>
                </div>
                <div className="flex align-center">
                  <p>
                    <span className="bolder">Company sergeant major - </span>{" "}
                    Management of a logistics forum numbering about 4 sergeants
                    and a deputy to the company commander. Preparation of a
                    document that realizes the logistical requirements of the
                    company from the base two weeks in advance. (vehicles, food
                    requirements etc..) Administrative work with many senior
                    base NCO`s. Planning and giving orders to various forums in
                    the company, and their actual implementation. Management of
                    a food complex during the Corona period.
                  </p>
                </div>
                <div>
                  <p>
                    This was a very meaningful experience for me. Under my
                    command passed hundreds of soldiers, and dozens of
                    commanders from different backgrounds and i got the
                    opportunity to touch and design each and every one of them.
                  </p>
                </div>
              </div>
            </div>
            <div className="images flex ">
              <img
                className="commander-img"
                src={require("../assets/imgs/about/commander.jpg")}
                alt=""
              />
              <img
                className="sergeant-img"
                src={require("../assets/imgs/about/sergeant.JPG")}
                alt=""
              />
              <img
                className="company-sm-img"
                src={require("../assets/imgs/about/company-sm.JPG")}
                alt=""
              />
            </div>
          </article>
          <article className="third-paragraph flex align-center">
            <div className="details">
              <h1 className="parag-title">
                05.2021-03.2022 - C.a.l Salesperson
              </h1>
              <p>
                After I was released from the army, I decided to start a new
                chapter in my life and began working at C.a.l as a salesperson.
                I was determined to make a difference in the company and quickly
                established myself as a top performer. In December of 2021, I
                was honored to be named the{" "}
                <span className="orange">"Excellent Employee"</span> for my hard
                work and dedication to both meeting my sales goals and
                prioritizing the needs of my customers. My time at C.a.l was
                full of challenges and changes, but I always remained adaptable
                and committed to excellence. I was consistently recognized for
                my achievements, winning several team and center competitions. I
                am proud to have been a part of such a dynamic and successful
                organization, and I am grateful for the opportunities that my
                time there provided me.
              </p>
            </div>
          </article>
          <article className="fourth-paragraph">
            <h1 className="parag-title">
              03.2022-08.2022 - Trip to South America
            </h1>
            <p>
              After i resigned C.a.l I started my trip to South America with my
              partner Adi. We traveled for five months visiting Argentina,
              Brasil, the Amazonas, Peru, Colombia, Mexico & Belize. This trip
              was an incredible experience and allowed me to immerse myself in
              different cultures and learn more about the world. It also
              expanded my perspective and made me more open-minded to different
              ways of thinking.
            </p>
            <div className="south-america images flex ">
              <img
                className="argentina-img"
                src={require("../assets/imgs/about/argentina.jpg")}
                alt=""
              />
              <img
                className="brasil-img"
                src={require("../assets/imgs/about/brasil.jpg")}
                alt=""
              />
              <img
                className="peru-img"
                src={require("../assets/imgs/about/peru.jpg")}
                alt=""
              />
              <img
                className="amazonas-img"
                src={require("../assets/imgs/about/amazonas.jpg")}
                alt=""
              />
              <img
                className="colombia-img"
                src={require("../assets/imgs/about/colombia.jpg")}
                alt=""
              />
              <img
                className="belize-img"
                src={require("../assets/imgs/about/belize.jpg")}
                alt=""
              />
              <img
                className="peru2-img"
                src={require("../assets/imgs/about/peru2.jpg")}
                alt=""
              />
              <img
                className="mexico-img"
                src={require("../assets/imgs/about/mexico.jpg")}
                alt=""
              />
            </div>
            <Carousel className="carousel" width="40%">
              <div>
                <img
                  src={require("../assets/imgs/about/argentina.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/brasil.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/peru.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/amazonas.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/colombia.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/belize.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/peru2.jpg")}
                />
              </div>
              <div>
                <img
                  src={require("../assets/imgs/about/mexico.jpg")}
                />
              </div>
            </Carousel>
          </article>
          <article className="third-paragraph flex align-center">
            <div className="details">
              <h1 className="parag-title">
                08.2022-01.2023 - Coding Academy intensive bootcamp
              </h1>
              <p>
                When i returned home from my trip i signed for the Coding
                Academy bootcamp. The intensive program provided me with the
                necessary tools and knowledge to succeed in the tech industry.
                The course required a lot of time and dedication, including
                sacrificing some weekends to study, but it was all worth it. I
                learned a variety of technologies including Vue.js, Vuex,
                MongoDB, SQL, Angular, React, Rest API, and Socket Io. These
                skills have given me a strong foundation to continue growing in
                my career as a fullstack developer.
              </p>
            </div>
          </article>
          <article className="fifth-paragraph">
            <p className="bolder center">
              So, if you're looking for a driven and skilled Full-Stack
              developer, with high self-discipline, who strives for excellence,
              good vibes and has a high work ethic. <br />
              I'd love if you could leave me a message right here below😄
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
