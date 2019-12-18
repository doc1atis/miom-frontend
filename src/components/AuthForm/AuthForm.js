import React from "react";
import "./authform.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import clearError from "../../actionCreators/clearError";
import BottomButton from "../BottomButton/BottomButton";
class LogRegForm extends React.Component {
  componentWillUnmount() {
    this.props.clearError();
  }
  renderError = ({ error, touched }) => {
    if (touched && error) {
      this.props.clearError();
      return (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta, type }) => {
    const myErrorClass = `form-control ${
      meta.error && meta.touched ? "border-danger" : ""
    }`;
    return (
      <div className="form-group">
        <label className="form-label-app" htmlFor={input.name}>
          {label}
        </label>
        <input
          {...input}
          id={input.name}
          className={myErrorClass}
          type={type}
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onFormSubmit = formInputs => {
    // feed the formInputs values to login() action
    this.props.authUser(formInputs); // this is a prop that comes from a parent component
  };
  renderInValid = errorMessage => {
    if (errorMessage) {
      return (
        <div className="alert alert-danger mt-2" role="alert">
          {errorMessage}
        </div>
      );
    }
  };
  render() {
    return (
      <form
        className="mt-5 m-auto p-3 rounded auth-form"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
      >
        <Field
          name="email"
          component={this.renderInput}
          label="enter email"
          type="text"
          autoComplete="on"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="enter password"
          type="password"
        />
        {this.renderInValid(this.props.errorMessage)}
        <div className="d-flex justify-content-center">
          <BottomButton actionText={this.props.actionText} />
        </div>
      </form>
    );
  }
}
// validate user inputs here
const validateUserInputs = formInputs => {
  const errors = {};
  if (!formInputs.email) {
    errors.email = "You must enter an email";
  }
  if (!formInputs.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};
function returnForm(name) {
  return reduxForm({
    form: name,
    validate: validateUserInputs
  });
}
const mapStateToProps = entireState => {
  return { errorMessage: entireState.authReducer.errorMessage };
};
export const LoginForm = compose(
  connect(mapStateToProps, { clearError }),
  returnForm("loginForm")
)(LogRegForm);

export const RegisterForm = compose(
  connect(mapStateToProps, { clearError }),
  returnForm("registerForm")
)(LogRegForm);
