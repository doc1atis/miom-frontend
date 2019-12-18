import React from "react";
import { Link } from "react-router-dom";
import "./linktext.css";
class LinkText extends React.Component {
  render() {
    return (
      <div className="link-text d-flex align-items-center pl-3">
        <span className="front-icon">{this.props.frontIcon}</span>
        <Link
          className="nav-link text-white d-inline pl-0 ml-1"
          to={this.props.goTo}
        >
          {this.props.text}
        </Link>
      </div>
    );
  }
}
export default LinkText;
