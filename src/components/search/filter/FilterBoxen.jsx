import {react, useState} from 'react';

function FilterBoxen(props) {
    

    return(
        <div>
            <div className="filterCheckboxContainer" style={{ display: props.show ? 'block' : 'none' }}>
            <label>
                <input
                    type="checkbox"
                    onChange={props.handleFilterChange}
                    value="series"
                    checked={props.selectedValue.series}
                />
                Series
            </label>
            <label>
                <input
                    type="checkbox"
                    onChange={props.handleFilterChange}
                    value="movies"
                    checked={props.selectedValue.movies}
                />
                Movies
            </label>
            </div>
        </div>
    );
}

export default FilterBoxen;