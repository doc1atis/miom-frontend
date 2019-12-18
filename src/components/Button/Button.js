import React from "react";
import { connect } from "react-redux";
import logUserOut from "../../actionCreators/logout";
import { Link } from "react-router-dom";
import "./button.css";
class Button extends React.Component {
  renderButton = () => {
    if (this.props.authenticated) {
      return (
        <button
          onClick={this.props.logUserOut}
          className="rounded-pill btn skinny-button"
        >
          Logout
        </button>
      );
    }
    return (
      <>
        <Link to="/login" className="rounded-pill skinny-button">
          Login
        </Link>
        <Link to="/register" className="rounded-pill skinny-button ml-1">
          Register
        </Link>
      </>
    );
  };
  render() {
    return <>{this.renderButton()}</>;
  }
}
const mapStateToProps = entireState => {
  return { authenticated: entireState.authReducer.authenticated };
};
export default connect(mapStateToProps, { logUserOut })(Button);
