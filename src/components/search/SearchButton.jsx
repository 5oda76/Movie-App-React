import React from "react";

function SearchButton(props) {

    return (
        <div>
            <button onClick={()=>{props.handleSearchButtonClick(props.searchBarValue,props.selectedValue)}}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );

}
export default SearchButton;