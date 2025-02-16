import { NavLink } from 'react-router';

import { navBarItems } from '../data/constants.js';

export default function NavBar( { lang }) {
    return (
        <nav className="navBar">           
            <NavLink to="/" className="navBar-item">{navBarItems[lang]['home']}</NavLink>
            <NavLink to="/projects" className="navBar-item">{navBarItems[lang]['projects']}</NavLink>
        </nav>
    )
}