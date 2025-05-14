import React, { useState } from "react";
import FilterBoxen from "./FilterBoxen";



function Filter(props) {

    const [showFilters, setShowFilters] = useState("");

    function toggleFilters(){
        setShowFilters(!showFilters);
    }

    return (
        <div>
            <div className="filterContainer">
                <button onClick={toggleFilters}><i className="fa-solid fa-filter"></i></button>
                <FilterBoxen show={showFilters} handleFilterChange={props.handleFilterChange} selectedValue={props.selectedValue}/>
            </div>
        </div>

    );

}

export default Filter;