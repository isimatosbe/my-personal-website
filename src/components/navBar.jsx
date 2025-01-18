import { NavLink } from "react-router";

export default function NavBar() {
    return (
        <nav className="navBar">
            <NavLink to="/" className="navBar-item">Home</NavLink>
            <NavLink to="/projects" className="navBar-item">Projects</NavLink>
        </nav>
    )
}