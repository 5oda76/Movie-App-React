import React, { useState } from "react";
import { getJsonData } from "../../api.js";
import { useEffect } from "react";

function Search() {

    /* This has to use 'useState' to update the cards within the containers related to a set array / API */

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    async function fetchData(event) {
        
        const searchValue = event.target.value;

        if(searchValue.length >= 2) {
         
            try {

                /* Use API to fetch requests */
                /* This allows us to easily implement a filter to be honest. */
                const data = await getJsonData("movie", "array", searchValue);

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