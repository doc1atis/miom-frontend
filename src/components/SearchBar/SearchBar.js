import React from "react";
import "./searchbar.css";
class SearchBar extends React.Component {
  render() {
    return (
      <form className="search-bar-form">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search Songs"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn-app-search"
              type="submit"
              id="button-addon2"
            >
              <span className="search-app-icon">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;
