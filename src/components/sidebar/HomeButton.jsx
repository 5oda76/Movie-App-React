import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <div>
            <div className="homeButton">
                <div className="buttonContainer"> 
                    <i className="fa-solid fa-house"></i><Link to="/"> Home </Link> 
                </div>
            </div>
        </div>
    );
}
export default HomeButton;