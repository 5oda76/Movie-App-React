import React from "react";

function SearchButton(props) {

    return (
        <div>
            <button onClick={()=>{props.handleSearchButtonClick(props.searchBarValue,props.selectedValue)}}>Suche</button>
        </div>
    );

}
export default SearchButton;