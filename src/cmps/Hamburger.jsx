import { NavLink } from "react-router-dom";

export const Hamburger = (props) => {
  const menuOpen = props.menuToggled;
  return (
    <section className={`hamburger-section ${menuOpen ? 'open' : ''}`}>
      <NavLink onClick={()=> props.toggleMenu()} className="nav-link" exact to="/about">
        About me
      </NavLink>
      <NavLink onClick={()=> props.toggleMenu()} className="nav-link" to="/">
        Portfolio
      </NavLink>
      <NavLink onClick={()=> props.toggleMenu()} className="nav-link" to="/Contact">
        Contact me
      </NavLink>
      <NavLink onClick={()=> props.toggleMenu()} className="nav-link" to="/my-projects">
        My projects
      </NavLink>
    </section>
  );
};
