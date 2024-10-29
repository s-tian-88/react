import { NavItem } from "../NavItem";

import './nav.css';

const Nav = () => {
    const navItems = [
        {label: 'home', link: '/'},
        {label: 'posts', link: '/posts'},
        {label: 'addPost', link: '/add'},
        {label: 'login', link: '/login'},
    ];
    return (
        <nav className="nav">
            <ul className="nav_item">
                {navItems.map((i) => (
                    <NavItem key={i.label} label={i.label} link={i.link} />
                ))}
            </ul>
        </nav>
    );
};

export { Nav };
