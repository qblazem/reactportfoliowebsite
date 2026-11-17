
import mugshot from '../assets/Mugshot.png';

export default function About() {
    return (
        <div className="wrapper">

            <section className="about-header">
                <p className="about-label">
                    03 / ABOUT ME
                </p>

                <h1 className="about-h1">
                    Story of My Life
                </h1>
            </section>

            <section className="about-content">

                <div className="about-info">
                    <p className="about-p">
                        I was born and raised in Des Moines, Iowa.
                        I graduated from Norwalk High School and
                        am currently going to college at Grand View
                        University. I am double majoring in Computer
                        Science and Data Science. In my free time I
                        enjoy hiking and the outdoors, spending time
                        with friends and family, programming, and
                        exercising.

                    </p>

                    <div className="about-buttons">
                        <button>Contact Me</button>
                        <button>View Resume</button>
                    </div>
                </div>

                <figure className="about-figure">
                    <img
                        className="about-img"
                        src={mugshot}
                        alt="Quillan McMurry"
                    />

                    <figcaption className="fig-caption">
                        QUILLAN MCMURRY
                    </figcaption>
                </figure>

            </section>

        </div>
    );
}
