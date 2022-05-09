import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {})
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}
