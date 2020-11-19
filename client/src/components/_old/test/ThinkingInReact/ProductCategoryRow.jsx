import React from 'react'

function ProductCategoryRow(props) {
    return (
        <tr className="category-row">
           <td colSpan="2">{props.category}</td>
        </tr>
    )
}

export default ProductCategoryRow
