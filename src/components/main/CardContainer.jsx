import React, { useState } from "react";
import Card from "./Card";

function CardContainer(props) {

    /* This will render: 5 Card components */

    /* We should use map to get the films of an array */

    const data = props.data;
    console.log(data);
    /*  */
    return (
        <div className="cardContainer">
            {
                data.map((element, index) => (
                    <Card data={element} i={index}/>
                ))
            }
        </div>
    );
}

export default CardContainer;