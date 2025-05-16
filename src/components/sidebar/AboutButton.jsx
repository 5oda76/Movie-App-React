import { Link } from "react-router-dom";

function AboutButton() {
    return (
        <div>
            <div className="aboutButton">
                <Link to="/about">
                <div className="buttonContainer">
                    <i className="fa-solid fa-question"></i> <span>About</span>
                </div>
                </Link> 
            </div>
        </div>
    );
}

export default AboutButton;