import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  state = {
    query: '',
    results: []
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    })
  }

  handleClick = () => {
    this.getBook(this.state.query);
  }

  getBook = (query) => {
    axios.get('/search', {params: {search: query}}).then((response)=>{
      console.log('back from GET:', response.data);
      this.setState({
        results: response.data
      })
    }).catch((err)=>{
      console.log('error with GET', err);
    })
  }

  render() {
    return (
      <div>
        <h1>Book Search!</h1>
        <input onChange={this.handleChange} placeholder="search"></input>
        <button onClick={this.handleClick}>Search</button>
        {/* {JSON.stringify(this.state.results)} */}
        {this.state.results ? this.state.results.map((item, index)=>{
          return <div key={index}>
            <p>{item.title_suggest}, {item.author_name}, {item.publish_year ? item.publish_year : 'N/A'}, Published by: {item.publisher}</p>
            </div>
        }) : '' }
      </div>
    );
  }
  
}

export default App;
