
import image4 from '../assets/linkedin-svgrepo-com.svg'
import image5 from '../assets/instagram.svg'
import image6 from '../assets/github.svg'

export default function Hero() {
    return(
        <div className={'hero'}>
            {/* <img className ={'hero-img'} src={ image3 }  alt={''}/> */}
            <div className={'hero-text'}>
                Hello! My name is Quillan!
                <div>
                    I'm a computer science and data science major!
                </div>
                <div>
                    Reach out to me here!
                </div>
                <div className={'social-links'}>
                    <a href={"https://www.linkedin.com/in/quillan-mcmurry-8971b7282/"} target={"_blank"} rel="noopener noreferrer">
                        <div className ={'circle'}>
                            <img className={'hero-link-bubbles'} src = { image4 }/>

                        </div>
                    </a>
                    <a href={"https://www.instagram.com/qblazem"} target={"_blank"} rel="noopener noreferrer">
                        <div className ={'circle'}>
                            <img className={'hero-link-bubbles'} src ={ image5 }/>
                        </div>
                    </a>
                    <a href={"https://github.com/qblazem"} target={"_blank"} rel="noopner noreferrer">
                        <div className ={'circle'}>
                            <img className={'hero-link-bubbles'} src ={ image6 }/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}