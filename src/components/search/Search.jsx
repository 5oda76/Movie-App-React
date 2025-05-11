import React, { useState } from "react";
import { getJsonData } from "../../api.js";
import { useEffect } from "react";

function Search() {

    /* This has to use 'useState' to update the cards within the containers related to a set array / API */

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    function fetchData(event) {
        
        const searchValue = event.target.value;

        if(searchValue.length > 0) {
         
            try {

                const data = getJsonData("movie", "array", searchValue);

                console.log(data);

                if(data) {

                    setResults(data.Search);

                }

            } catch(error) {
                throw new Error("Error fetching data");
            }

        }
    }

    return (
        <div>
            <input onChange={fetchData} type="text" placeholder="Find something..."/>
        </div>
    );
}
export default Search;