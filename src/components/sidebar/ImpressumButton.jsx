import React, { useState } from "react";
import { Link } from "react-router-dom";

function ImpressumButton() {
    return (
        <div>
            <div className="impressumButton">
                <div className="buttonContainer">   
                    <i className="fa-regular fa-file"></i><Link to="/impressum"> Impressum </Link> 
                </div>
            </div>
        </div>
    );
}
export default ImpressumButton;