import React from 'react';

function Navbar() {
    return (
        <header className={'navbar'}>
            <div className={'logo'}>
                test.dev
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </nav>

        </header>

    );
};

export default Navbar;