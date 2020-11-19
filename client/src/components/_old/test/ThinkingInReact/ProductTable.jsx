import React from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const { categories, tableData, filterStock, filterName } = props
    const re = new RegExp(filterName + '.+$', 'i')
    const rows = [];

    categories.forEach(category => {
        const filterdCategoryData = [];

        tableData.forEach(row => {
            if (
                row.category !== category ||
                row.name.search(re) === -1 ||
                (filterStock && !row.stocked)
            ) {
                return
            }
            filterdCategoryData.push(row);
        })

        if (filterdCategoryData.length) {
            rows.push(<ProductCategoryRow key={category} category={category} />)
            filterdCategoryData.forEach(row => rows.push(<ProductRow key={row.name} row={row} />))
        }
    })

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default ProductTable
