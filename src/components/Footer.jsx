import '../styles/Footer.css';


export default function Footer() {
    return (
        <footer className="footer-style">
            <div className="footer-container">

                <div className="footer-top">
                    <div>
                        <h2>quillan.dev</h2>
                        <p></p>
                    </div>

                    <div className="footer-links">
                        <a href="https://github.com/qblazem">
                            GitHub
                        </a>
                        <a href="www.linkedin.com/in/quillan-mcmurry-8971b7282">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Quillan McMurry</p>
                    <p>Built with React</p>
                </div>

            </div>
        </footer>
    );
}
