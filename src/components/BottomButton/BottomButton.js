import React from "react";
import "./style.css";
export default props => {
  return (
    <button type="submit" className="bottom-button btn btn-primary">
      <i className="fas fa-sign-in-alt"></i> {props.actionText}
    </button>
  );
};
