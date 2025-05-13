import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import SearchContainer from "../search/SearchContainer";
import { getJsonData } from "../../api.js";
import Search from "../search/Search.jsx";

function Main() {
    const [search, setSearch] = useState({
        value: "",
        filter: ""
    });
    const [results, setResults] = useState([]);

    function handleSearchButtonClick(searchBarValue,filterValue) {
        setSearch({
            value: searchBarValue,
            filter: filterValue
        });
    }

    useEffect(() => {
        console.log(search);
            /* async function fetchData() { //wirft Fehler
                if(search.value.length >= 2) {
            
                    try {
                        const data = await getJsonData(search.value, "array", search.filter);

                        console.log(data);

                        if(data) {
                            setResults(data.Search);
                        }

                    } catch(error) {
                        throw new Error("Error fetching data");
                    }

                }
            }fetchData(); */
        }),[search];

    return (
        <div>
            <div className="main">
                <div className="search">
                    <SearchContainer handleSearchButtonClick={handleSearchButtonClick} />
                </div>
                <div className="mainContent">
                    <MainContent results={results}/>
                </div>
            </div>
        </div>
    );
}
export default Main;