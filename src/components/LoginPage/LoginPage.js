import React from "react";
import { connect } from "react-redux";
import loginActionCreator from "../../actionCreators/login";
import "./loginpage.css";
import { LoginForm } from "../AuthForm/AuthForm";
class LoginPage extends React.Component {
  render() {
    return (
      <div className="hold-form">
        <LoginForm
          authUser={this.props.loginActionCreator}
          actionText="Login"
        />
      </div>
    );
  }
}

export default connect(null, { loginActionCreator })(LoginPage);
