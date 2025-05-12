import React, { useState } from "react";
import FilterBoxen from "./FilterBoxen";



function Filter() {

    const [showFilters, setShowFilters] = useState("");

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    }

    return (
        <div>
            <div className="filterContainer">
                <button onClick={toggleFilters}><i className="fa-solid fa-filter"></i></button>
                <FilterBoxen show={showFilters} />
            </div>
        </div>

    );

}

export default Filter;