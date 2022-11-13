import "../styles/images-container.css"
import "../styles/styles.css"

export default function ImagesContainer() {
    return <div className="images-container">
        <div className="images-area">
            <div className="row">
                <div className="column">
                    <img id="img-area1-1" src="../images/football1.jpg"/>
                </div>
                <div className="column">
                    <img id="img-area1-2" src="../images/football3.jpg"/>
                </div>
                <div className="column">
                    <img id="img-area1-3" src="../images/football2.jpg"/>
                </div>
                <div className="column">
                    <img id="img-area1-3" src="../images/football5.jpg"/>
                </div>
                <div className="column">
                    <img id="img-area1-3" src="../images/football4.jpg"/>
                </div>
            </div>
        </div>
    </div>
}