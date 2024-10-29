import { Logo } from '../Logo'
import { Nav } from '../Nav'

import './header.css';


const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}

export { Header }
