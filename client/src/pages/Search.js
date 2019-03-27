import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import List from "../components/List";

class Search extends Component {
    state = {
        productos: [],
        currentValue: "",
        results: []
    }

    componentDidMount() {
        API.getProducts().then((response) => {
            this.setState({
                productos: response.data
            });
        });
    }

    onInputChange = (event) => {
        this.setState({
            currentValue: event.target.value
        });
    }

    doSearch = () => {
        const product = this.state.currentValue
        API.getImagesByBreed(product).then((response) => {
            this.setState({
                results: response.data
            });
        });
    }

    render() {
        return (
            <div>
                <SearchForm productos={this.state.productos} value={this.state.currentValue} onChange={this.onInputChange} doSearch={this.doSearch} />
                <List results={this.state.results} />
            </div>
        );
    }
}

export default Search;