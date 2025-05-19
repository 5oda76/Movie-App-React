import React, { useState, useEffect } from "react";
import MainContent from "./MainContent";
import SearchContainer from "../search/SearchContainer";
import { getJsonData } from "../../api.js";
import { getEmitHelpers } from "typescript";

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
            /* 
                If the type is empty here or not clicked/used at all, it will be handled by api.js 
            */
            async function fetchData() {
                if(search.value.length >= 2) {
                    try {
                        const data = await getJsonData(search.filter, "array", search.value);

                        if(data) {

                            async function getObj(filter, elementTitle){
                                const aobj = await getJsonData(filter, "char", elementTitle);
                                console.log(aobj);
                                return aobj;
                            }

                            const promises = data.Search.map((element) => getObj(element.filter,element.Title));
                            const arr = await Promise.all(promises);
                            console.log(arr);
                            setResults(arr);

                        }

                        

                    } catch(error) {
                        throw new Error("Error fetching data");
                    }

                }
            }fetchData();
        },[search]);

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