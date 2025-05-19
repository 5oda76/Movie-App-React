import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchButton from "./SearchButton";
import Filter from "./filter/Filter";

function SearchContainer(props) {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [selectedValue, setSelectedValue] = useState({
            series: false,
            movies: false,
    });

    function handleSearchChange(event) {
        if(event.key == "Enter"){
            props.handleSearchButtonClick(searchBarValue, selectedValue);
        }else{
            setSearchBarValue(event.target.value);
        }
    }

    function handleFilterChange(event) {
        const obj = { [event.target.value]: event.target.checked};
        setSelectedValue((prev)=>{
            return({...prev, ...obj});
        });
    }

    return (
        <div>
            <div className="searchContainer">
                <div className="search">
                    <Search handleSearchChange={handleSearchChange} searchBarValue={searchBarValue}/>
                </div>
                <div className="searchButton">
                    <SearchButton handleSearchButtonClick={props.handleSearchButtonClick} searchBarValue={searchBarValue} selectedValue={selectedValue}/>
                </div>
                <div className="filterButton">
                    <Filter handleFilterChange={handleFilterChange} selectedValue={selectedValue}/>
                </div>
            </div>
        </div>
    );
}
export default SearchContainer;