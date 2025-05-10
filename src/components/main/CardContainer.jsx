import React, { useState } from "react";
import Card from "./Card";

function CardContainer() {

    /* This will render: 5 Card components */

    /* We should use map to get the films of an array */


    /*  */
    return (
        <div className="cardContainer">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardContainer;