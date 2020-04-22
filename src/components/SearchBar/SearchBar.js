import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import "./searchbar.css";
class SearchBar extends React.Component {
  render() {
    return (
      <Form onSubmit={(e) => e.preventDefault()} style={{ width: "50vw" }}>
        <InputGroup>
          <FormControl
            placeholder="Search"
            onChange={(e) => console.log("olgy")}
          />
          <InputGroup.Append>
            <button
              className="btn btn-outline-secondary btn-app-search"
              type="submit"
              id="button-addon2"
            >
              <span className="search-app-icon">
                <i className="fas fa-search"></i>
              </span>
            </button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      // <form className="search-bar-form">
      //   <div className="input-group">
      //     <input
      //       className="form-control"
      //       type="text"
      //       placeholder="Search Songs"
      //     />
      //     <div className="input-group-append">
      //       <button
      //         className="btn btn-outline-secondary btn-app-search"
      //         type="submit"
      //         id="button-addon2"
      //       >
      //         <span className="search-app-icon">
      //           <i className="fas fa-search"></i>
      //         </span>
      //       </button>
      //     </div>
      //   </div>
      // </form>
    );
  }
}
export default SearchBar;
