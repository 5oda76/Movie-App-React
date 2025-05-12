import React, { useState } from "react";
import { getJsonData } from "../../api.js";
import { useEffect } from "react";

function SearchButton(props) {


    return (
        <div>
            <button onClick={props.fetchData}>Suche</button>
        </div>
    );

}
export default SearchButton;