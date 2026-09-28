import react from 'react';
import mugshot from '../assets/Mugshot.png'

export default function About() {
    return (
        <div className="wrapper">
            <section className="about-hero">

                <div className="about-image">
                    <img src={ mugshot } alt="Quillan McMurry" />
                </div>

                <div className="about-content">
                    <h1>About Me</h1>

                    <h2>Computer Science & Data Science Student</h2>

                    <p>
                        I'm a Computer Science and Data Science student with an interest in software development, problem solving, and building projects that combine creativity with technical challenges. I enjoy learning new technologies and experimenting with different approaches to development. Outside of programming, I spend much of my time competing in athletics, working on personal projects, and exploring new ideas.

                    </p>

                    <div className="about-actions">
                        <button>Contact Me</button>
                        <button>View Resume</button>
                    </div>
                </div>

            </section>
        </div>
    );
}