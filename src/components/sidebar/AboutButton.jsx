import React, { useState } from "react";

function AboutButton() {
    return (
        <div>
            <div className="aboutButton">
                <div className="buttonContainer">
                    <i class="fa-solid fa-question"></i><button>About</button>  
                </div>
            </div>
        </div>
    );
}

export default AboutButton;