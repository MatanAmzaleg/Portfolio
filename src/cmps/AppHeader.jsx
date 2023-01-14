import { NavLink } from "react-router-dom";

export const AppHeader = () =>{
    return(
        <header>
            <nav>
                <NavLink className="nav-link" exact to="/about">About me</NavLink>
                <NavLink className="nav-link" to="/">Portfolio</NavLink>
                <NavLink className="nav-link" to="/Contact">Contact me</NavLink>
                <NavLink className="nav-link" to="/my-projects">My projects</NavLink>
            </nav>
            <button className="rounded-btn">Contact Me</button>
        </header>
    )
}
