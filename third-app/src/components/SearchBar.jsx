import React from "react";

export default class SearchBar extends React.Component {
  state = { term: '' }
  
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input 
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
