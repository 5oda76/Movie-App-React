import React, { useState } from "react";

function Card(props) {

    /* */
    return (
        <div>
            <div className="card">
                <div className="cardHeader">
                    Title
                </div>
                <div className="cardContent">
                    <div className="imageContainer">

                    </div>
                    <div className="cardInfo">
                        <p>Info text bla</p>
                    </div>
                </div>
                <div className="cardFooter">
                    <p>Footer content bla</p>
                </div>
            </div>
        </div>
    );
}

export default Card;