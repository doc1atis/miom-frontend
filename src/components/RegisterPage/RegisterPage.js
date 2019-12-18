import React from "react";
import "./registerpage.css";
import { connect } from "react-redux";
import registerUser from "../../actionCreators/register";
import { RegisterForm } from "../AuthForm/AuthForm";
class RegisterPage extends React.Component {
  render() {
    return (
      <div className="hold-form">
        <RegisterForm authUser={this.props.registerUser} actionText="SignUp" />
      </div>
    );
  }
}

export default connect(null, { registerUser })(RegisterPage);
