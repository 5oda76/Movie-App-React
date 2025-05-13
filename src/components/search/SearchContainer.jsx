import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchButton from "./SearchButton";
import Filter from "./filter/Filter";

function SearchContainer(props) {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [filterValue, setFilterValue] = useState("");

    function handleSearchChange(event) {
        setSearchBarValue(event.target.value);
    }
    function handleFilterChange(selectedValue) {
        setFilterValue(selectedValue);
    }

    return (
        <div>
            <div className="searchContainer">
                <div className="search">
                    <Search handleSearchChange={handleSearchChange} searchBarValue={searchBarValue}/>
                </div>
                <div className="searchButton">
                    <SearchButton handleSearchButtonClick={props.handleSearchButtonClick} searchBarValue={searchBarValue} filterValue={filterValue}/>
                </div>
                <div className="filterButton">
                    <Filter handleFilterChange={handleFilterChange} filterValue={filterValue}/>
                </div>
            </div>
        </div>
    );
}
export default SearchContainer;