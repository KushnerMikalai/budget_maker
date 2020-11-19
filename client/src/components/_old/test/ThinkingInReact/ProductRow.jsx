import React from 'react'

function ProductRow(props) {
    const { row } = props

    return (
        <tr className={`product-row ${row.stocked ? '' : 'product-row_no-stocked'}`}>
            <td>{row.name}</td>
            <td>{row.price}</td>
        </tr>
    )
}

export default ProductRow
