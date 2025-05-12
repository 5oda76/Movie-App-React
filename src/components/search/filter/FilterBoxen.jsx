import React, { useState } from "react";

function FilterBoxen(props) {

    const [selected, setSelected] = useState(null);

    const handleCheckboxChange = (value) => {
        if (selected === value) {
            setSelected(null); // Uncheck if clicked again
        } else {
            setSelected(value);
        }
    };

    return(
        <div>
            <div className="filterCheckboxContainer" style={{ display: props.show ? 'block' : 'none' }}>
            <label>
                <input
                    type="checkbox"
                    checked={selected === 'series'}
                    onChange={() => handleCheckboxChange('series')}
                />
                Series
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={selected === 'movies'}
                    onChange={() => handleCheckboxChange('movies')}
                />
                Movies
            </label>
            </div>
        </div>
    );


}
export default FilterBoxen;