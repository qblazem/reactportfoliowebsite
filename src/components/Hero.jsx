
import image4 from '../assets/linkedin-svgrepo-com.svg'
import image5 from '../assets/instagram.svg'
import image6 from '../assets/github.svg'

import linkedin from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github.svg'

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">
                <p className="hero-intro">HELLO, I'M</p>

                <h1 className="hero-name">
                    Quillan<br />
                    McMurry.
                </h1>

                <h2 className="hero-title">
                    Computer Science + Data Science Student
                </h2>

                <p className="hero-description">
                    I build software, interactive tools, and data-driven projects
                    while exploring new technologies and challenging problems.
                </p>

                <div className="hero-buttons">
                    <a href="/projects" className="hero-button">
                        View Projects
                    </a>

                    <a href="/about" className="hero-button secondary">
                        About Me
                    </a>
                </div>

                <div className="social-links">

                    <a
                        href="https://github.com/qblazem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="circle">
                            <img
                                className="hero-link-bubbles"
                                src={github}
                                alt="GitHub"
                            />
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/quillan-mcmurry-8971b7282/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="circle">
                            <img
                                className="hero-link-bubbles"
                                src={linkedin}
                                alt="LinkedIn"
                            />
                        </div>
                    </a>

                </div>
            </div>


            <div className="hero-right">

                <div className="terminal">

                    <div className="terminal-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="terminal-content">
                        <p>&gt; whoami</p>

                        <p className="terminal-response">
                            Quillan McMurry
                        </p>

                        <p>&gt; education</p>

                        <p className="terminal-response">
                            Computer Science<br />
                            Data Science
                        </p>

                        <p>&gt; currently_building</p>

                        <p className="terminal-response">
                            Graph Visualizer...
                        </p>

                        <p className="terminal-cursor">
                            &gt; _
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}