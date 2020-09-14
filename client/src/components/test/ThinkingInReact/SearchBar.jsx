import React from 'react'

function SearchBar(props) {
    return (
        <div className="search-bar">
            <div className="search-bar__item">
                <input
                    type="text"
                    name="filterName"
                    value={props.filterName}
                    placeholder="Search..."
                    onChange={props.handleChangeFilters}
                />
            </div>
            <div className="search-bar__item">
                <label>
                    <input
                        type="checkbox"
                        name="filterStock"
                        value={props.filterStock}
                        onChange={props.handleChangeFilters}
                    />
                    Only show products in stock
                </label>

            </div>
        </div>
    )
}

export default SearchBar
