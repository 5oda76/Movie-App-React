import React, { useState } from "react";
import CardContainer from "./CardContainer";

function MainContent(props) {

    function manageArray(arr, size) {

        const parts = [];
        for(let i = 0; i < arr.length; i+=size) {

            parts.push(arr.slice(i, i+size));

        }

        return parts;
    }

    const arrayPart = manageArray(props.results, 3);

    /* This will render: At least 3 'cardContainer' in the set of a list */
    return (
        <div>
            {
                arrayPart.map((part, index) => (
                    <CardContainer data={part} i={index}/>
                ))
            }
        </div>
    );
}
export default MainContent;