import React from 'react'
import data from './productTableData.json'
import './FilterableProductTable.scss'

// import memoize from '../../../utils/helpers/memoize';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            tableCategory: [],
            filterName: '',
            filterStock: false,
        }
    }
    getData() {
        const category = [];
        data.forEach(el => {
            if (!category.includes(el.category)) {
                category.push(el.category)
            }
        });

        this.setState({
            tableData: data,
            tableCategory: category
        })
    }
    handleChangeFilters = (e) => {
        const input = e.target;
        const name = e.target.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [name]: value });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        const { tableCategory, tableData, filterName, filterStock } = this.state;

        return (
            <div className="filterable-table">
                <SearchBar
                    filterName={filterName}
                    filterStock={filterStock}
                    handleChangeFilters={this.handleChangeFilters}
                />
                <ProductTable
                    tableData={tableData}
                    categories={tableCategory}
                    filterName={filterName}
                    filterStock={filterStock}
                />
            </div>
        )
    }
}

export default FilterableProductTable
