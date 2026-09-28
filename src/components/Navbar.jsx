import React from 'react';

function Navbar() {
    return (
        <header>
            <div className={"navbar"}>
                <div className={'logo'}>
                    quillan.dev
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                </nav>
            </div>
        </header>

    );
};

export default Navbar;