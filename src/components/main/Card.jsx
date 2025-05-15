import React, { useState } from "react";

function Card(props) {

    const cardData = props.data;

    /* */
    return (
        <div>
            <div className="card" key={props.i}>
                <div className="cardHeader">
                    {cardData.Title}
                </div>
                <div className="cardContent">
                    <div className="imageContainer">
                        <img src={cardData.Poster} alt="CardElementPicture" />
                    </div>
                </div>
                <div className="cardFooter">
                    <p>{cardData.Year}</p>
                    <div className="cardInfo">
                        <p>Type: {cardData.Type}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;