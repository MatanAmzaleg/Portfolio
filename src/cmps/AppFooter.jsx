import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export const AppFooter = () =>{
    return(
        <section className="app-footer flex">
            <div className="a-section flex">
            <a href="https://www.linkedin.com/in/matan-amzaleg-058050252/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/MatanAmzaleg" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.facebook.com/matan.amzaleg.7" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>  
            <a href="https://www.instagram.com/matan_321/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <p>&copy; CoffeRights Matan Amzaleg</p>
        </section>
    )
}