import React, { useState } from "react";
import { Link } from "react-router-dom";

function AboutButton() {
    return (
        <div>
            <div className="aboutButton">
                <div className="buttonContainer">
                    <i className="fa-solid fa-question"></i><Link to="/about"> About </Link>  
                </div>
            </div>
        </div>
    );
}

export default AboutButton;