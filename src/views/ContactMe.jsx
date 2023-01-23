import TextField from "@mui/material/TextField";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 20000 });
  }, []);

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !fnameRef.current.value ||
      !lnameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      swal("Please fill in all fields!","", "error");
      return;
    }

    // validate phone number
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phoneRegex.test(phoneRef.current.value)) {
      swal("Please enter a valid phone number!","", "error");
  
      return;
    }

    // validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailRef.current.value)) {
      swal("Please enter a valid email address!","", "error");
      return;
    }

    // const message = {
    //   firstName: fnameRef.current.value,
    //   lastName: lnameRef.current.value,
    //   email: emailRef.current.value,
    //   phone: phoneRef.current.value,
    //   text: messageRef.current.value,
    // };
    // console.log(message);

    emailjs.sendForm('service_i9y75an', 'template_g9r2ycv', formRef.current, 'FOcKwoYz5oedzVUbQ')
    .then((result) => {
        console.log(result.text);
        console.log("email sent successfully");
        swal("Thanks for contacting me!", "", "success");
    }, (error) => {
        console.log(error.text);
    });

    formRef.current.reset();
  };

  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      className="contact flex column"
    >
      <h1>
        I would love to hear from you, <br /> Get in touch👋
      </h1>
      <section className="form-section flex column">
        <form
          ref={formRef}
          className="details-sec column flex wrap"
          onSubmit={handleSubmit}
        >
          <div className="name-sec flex">
            <TextField
              color="warning"
              className="f-name-input"
              name="fname"
              label="First name"
              size="small"
              inputRef={fnameRef}
            />
            <TextField
              className="l-name-input"
              color="warning"
              name="lname"
              label="Last name"
              size="small"
              inputRef={lnameRef}
            />
          </div>
          <div className="email-sec">
            <TextField
              className="email-input"
              color="warning"
              name="email"
              label="Youre Email"
              size="small"
              inputRef={emailRef}
            />
          </div>
          <div className="phone-sec">
            <TextField
              type="number"
              className="phone-input"
              color="warning"
              name="phone"
              label="Youre phone"
              size="small"
              inputRef={phoneRef}
            />
          </div>
          <div className="message-sec">
            <p>Type your message here</p>
            <textarea
              className="message-input"
              name="message"
              id=""
              cols="30"
              rows="10"
              ref={messageRef}
            ></textarea>
          </div>
          <input value="Send" type="submit" className="rounded-btn" />
          <p>or</p>
          <div className="buttons flex">
            <a
              className="email-btn"
              target="_blank"
              href="mailto:matanamz@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
            <a
              className="whatsapp-btn"
              target="_blank"
              href="https://wa.me/+972525568144?text=Hello+Matan,"
            >
              <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
            </a>
          </div>
        </form>
      </section>
    </section>
  );
};
