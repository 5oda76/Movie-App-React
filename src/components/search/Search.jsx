import React from "react";

function Search(props) {
    
    /* This has to use 'useState' to update the cards within the containers related to a set array / API */
    return (
        <div>
            <input type="text" placeholder="Find something..." onChange={props.handleSearchChange} onKeyDown={props.handleSearchChange}value={props.searchBarValue}/>
        </div>
    );
}
export default Search;