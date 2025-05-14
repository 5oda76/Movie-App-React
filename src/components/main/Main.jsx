import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import SearchContainer from "../search/SearchContainer";
import { getJsonData } from "../../api.js";

function Main() {
    const [search, setSearch] = useState({
        value: "",
        filter: ""
    });
    const [results, setResults] = useState([]);

    function handleSearchButtonClick(searchBarValue,selectedValue) {
        let filterValue = null;
        if(selectedValue.series && selectedValue.movies) {
            filterValue = "series,movies";
        }
        else if(selectedValue.series) {
            filterValue = "series";
        }
        else if(selectedValue.movies) {
            filterValue = "movies";
        }
        setSearch({
            value: searchBarValue,
            filter: filterValue
        });
    }

    useEffect(() => {
            console.log(search.filter);
            async function fetchData() {
                if(search.value.length >= 2) {
                    try {
                        const data = await getJsonData(search.filter, "array", search.value);

                        console.log(data);

                        if(data) {
                            setResults(data.Search);
                        }

                    } catch(error) {
                        throw new Error("Error fetching data");
                    }

                } else {
                    console.log("Search value not valid.");
                }
            }fetchData();
            console.log(results);
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