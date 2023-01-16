import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { useEffect } from "react";

export const AppHeader = () =>{

    const [menuToggled, setMenuToggle] = useState(false)

    useEffect(()=> {

    })

    const onToggleMenu = () =>{
        setMenuToggle(!menuToggled)
        console.log(menuToggled);
    }
    return(
        <header>
            <nav>       
                <NavLink className="nav-link" exact to="/about">About me</NavLink>
                <NavLink className="nav-link" to="/">Portfolio</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact me</NavLink>
                <NavLink className="nav-link" to="/my-projects">My projects</NavLink>
                <div className="hamburger" onClick={onToggleMenu}>
                <FontAwesomeIcon className="bars-icon" icon={faBars} />
                </div>
            </nav>
            <NavLink to={"/contact"} className="rounded-btn">Contact Me</NavLink>
            <Hamburger menuToggled={menuToggled} toggleMenu={onToggleMenu}></Hamburger>
        </header>
    )
}
