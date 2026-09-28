import react from 'react';
import hero1 from '../assets/hero.png';
import wbd from '../assets/website-project-demo.png'
import gvt from '../assets/graph-viz-temp.jpg'
import gv from '../assets/GVVikes.png'

export default function Projects() {
    return(
        <div className={"wrapper"}>
            <section className={'project-grid'}>
                    <div className={'project'}>
                        <img className={'project-image'} src={ wbd } alt={''}/>
                        <div className={'project-content'}>
                            <h1>
                                My Portfolio Website
                            </h1>

                            <p>
                                This website was my first attempt at using React, and I really enjoyed coding it.
                                I learned a lot about JavaScript, CSS, and HTML in the process of creating this.

                            </p>

                            <h2>
                                Skills I learned:
                            </h2>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>

                    <div className={'project'}>
                        <img className={'project-image'} src={ gv } alt={''}/>
                        <div className={'project-content'}>
                            <h1>
                                MCS Website and App
                            </h1>
                        </div>

                    </div>

                    <div className={'project'}>

                        <img className={'project-image'} src={ gvt } alt={''}/>
                        <div className={'project-content'}>
                            <h1>
                                W.I.P. Graph Visualizer
                            </h1>
                        </div>


                    </div>
            </section>
        </div>
    )
}

