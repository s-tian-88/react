import { Link, NavLink } from "react-router-dom";
import './navItem.css'


const NavItem = (props: {label: string, link: string}) => {
    const {label, link} = props

    const active = ({isActive}: {isActive: boolean}) => isActive ? "nav_link_active" : ''

    return (
        <li className="nav__item">
            <NavLink className={active} to={link}>{ label }</NavLink>
        </li>
    )
};

export { NavItem }
