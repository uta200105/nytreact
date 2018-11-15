import React, { Component } from "react";
import Search from "./search";
import Results from "./results";
import API from "../utils/API";
import Saved from './saved'

class SearchResultContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
          search: "",
          startDate: "",
          endDate: "",
          results: [],
          saved: [],
          deleted: false
        };
    }

    // Getting all articles when the component mounts
    componentDidMount() {
      this.getArticles();
    }

    getArticles = () => {
        API.getArticles().then((res) => {
            this.setState({ saved: res.data,
                            deleted: false 
                          });
        });
    }

    searchAPI = () => {
        let search = this.state.search
        let startDate = this.state.startDate;
        let endDate = this.state.endDate;
        let query = search + 
                    "&begin_date=" + 
                    startDate + "0101" +
                    "&end_date=" +  
                    endDate + "0101"; 

      API.search(query)
        .then(res => {this.setState({ results: res.data.response.docs })})
        .catch(err => console.log(err));

      this.setState({
                  search: "",
                  startDate: "",
                  endDate: ""
      })
  };

  handleInputChange = event => {
    const name = event.target.name;
    let value  = event.target.value;
    if (name === "startDate" || name === "endDate") {
      value = value.substring(0, 4);
    }
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let valid = this.validateDates();
    if (valid) {
        this.searchAPI();
    }
  };

  validateDates = () => {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    if (startDate.length < 4 || endDate.length < 4) {
        alert("please check your dates: year needs to be 4 digits long")
    }
    else return true
  }

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} getArticles={this.getArticles} />
        <Saved savedItems={this.state.saved} deleted={this.state.deleted} getArticles={this.getArticles} />
      </div>
    );
  }
}

export default SearchResultContainer;