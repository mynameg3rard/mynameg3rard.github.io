import "../styles/styles.css"
import "../styles/presentation.css"

export default function Presentation() {
    return <div className="presentation" id="home">
        <div className="row">
            <div className="column1">
                <img id="presentation-img" src="../images/profile.jpg"/>
            </div>

            <div className="column2">
                <section className="cd-intro">
                    <h1 className="cd-headline slide">
                        <span>Hi, I am Gerard,</span>
                        <br/>
                        <span>a</span>
                        <span className="cd-words-wrapper">
                             <b className="adj1"> photographer.</b>
                             <br/><b className="adj2"> &nbsp;&nbsp;&nbsp;&nbsp;engineer.</b>
                             <br/><b className="adj3"> &nbsp;&nbsp;&nbsp;&nbsp;freelancer.</b>
                        </span>
                    </h1>
                </section>

                <div className="social-media-links">
                    <a href="https://www.linkedin.com/in/gerard-sáez-sánchez-42032a1a2/">Linkedin</a>
                    <a href="https://www.instagram.com/mynameg3rard">Instagram</a>
                    <a href="https://www.twitter.com/mynameg3rard">Twitter</a>
                </div>
            </div>
        </div>
    </div>
}