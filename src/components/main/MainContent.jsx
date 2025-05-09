import React, { useState } from "react";
import CardContainer from "./CardContainer";

function MainContent() {

    /* This will render: At least 3 'cardContainer' in the set of a list */

    return (
        <div>
            <CardContainer />
            <CardContainer />
            <CardContainer />
        </div>
    );
}
export default MainContent;