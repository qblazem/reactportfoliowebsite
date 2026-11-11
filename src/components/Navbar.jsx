import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    const[menuOpen, setMenuOpen] = React.useState(false);

    const menuRef = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current &&
                !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("pointerdown", handleClickOutside);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className={"navbar"}>
                <Link to="/about" className="logo-link">
                    <div className={'logo'}>
                        quillan.dev
                    </div>
                </Link>

                <div className={"menu-container"} ref={menuRef}>
                    <button onClick={() =>setMenuOpen(!menuOpen)} className={"burger"}>
                        ☰
                    </button>

                    <nav className={menuOpen ? "nav-open" : "nav-closed"}>
                        <Link to="/">Home </Link>
                        <Link to ="/projects">Projects </Link>
                        <Link to="/about">About</Link>
                    </nav>

                </div>

                <nav className="navbar-menu">
                    <Link to="/">Home </Link>
                    <Link to ="/projects">Projects </Link>
                    <Link to="/about">About</Link>
                </nav>

            </div>
        </header>

    );
}

export default Navbar;