import React, { useState } from "react";
import Search from "./Search";
import SearchButton from "./SearchButton";

function SearchContainer() {

    /* This will render: Search, searchButton */

    return (
        <div>
            <div className="searchContainer">
                <div className="search">
                    <Search />
                </div>
                <div className="searchButton">
                    <SearchButton />
                </div>
            </div>
        </div>
    );
}
export default SearchContainer;