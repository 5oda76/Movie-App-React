import React, { useState } from "react";
import MainContent from "./MainContent";
import SearchContainer from "../search/SearchContainer";

function Main() {

    /* This will render: searchContainer, mainContent */

    return (
        <div>
            <div className="main">
                <div className="searchContainer">
                    <input type="text" />
                    <button>Suche</button>
                </div>
                <div className="mainContent">
                    <MainContent />
                </div>
            </div>
        </div>
    );
}
export default Main;