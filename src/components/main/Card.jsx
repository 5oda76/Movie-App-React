import React, { useState } from "react";

function Card(props) {

    const cardData = props.data;

    console.log(cardData);

    return (
        <div>
            <div className="card" key={props.i}>
                <div className="plotController">
                    <div className="cardHeader">
                        {cardData.Title}
                    </div>
                    <div className="cardContent">
                        <div className="imageContainer">
                            <img src={cardData.Poster} alt="No Card image found." />
                        </div>
                        <div className="plot">
                            <h4>
                                <p className="descTitle">{cardData.Title}</p>
                                {cardData.Plot}
                            </h4>
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
        </div>
    );
}

export default Card;