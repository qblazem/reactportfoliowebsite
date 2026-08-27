import React from 'react';

const Navbar = () => {
    return (
        <ul>
            <nav className={"navbar"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
            </nav>
        </ul>
    );
};

export default Navbar;