import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className={"navbar"}>
                <Link to="/about" className="logo-link">
                    <div className={'logo'}>
                        quillan.dev
                    </div>
                </Link>
                <nav>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                </nav>
            </div>
        </header>

    );
}

export default Navbar;