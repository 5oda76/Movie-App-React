import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchButton from "./SearchButton";
import Filter from "./filter/Filter";
import FilterBoxen  from "./filter/FilterBoxen";

function SearchContainer() {

    /* This will render: Search, searchButton */
useEffect(() => {
async function fetchData(event) {
        
        const searchValue = event.target.value;

        if(searchValue.length >= 2) {
         
            try {

                /* Use API to fetch requests */
                /* This allows us to easily implement a filter to be honest. */
                useEffect
                const data = await getJsonData("movie", "array", searchValue);

                console.log(data);

                if(data) {

                    setResults(data.Search);

                    /* Idea: TODO: 

                        let this render the whole MainContent component with the props as param to then set the values 
                        to the cards after they are passed to the CardContainer (I have no clue if this works)
                    
                    */

                }

            } catch(error) {
                throw new Error("Error fetching data");
            }

        }
    }
});
    

    return (
        <div>
            <div className="searchContainer">
                <div className="search">
                    <Search />
                </div>
                <div className="searchButton">
                    <SearchButton />
                </div>
                <div className="filterButton">
                    <Filter />
                </div>
                <div className="filterBoxxen">
                    <FilterBoxen />
                </div>
            </div>
        </div>
    );
}
export default SearchContainer;