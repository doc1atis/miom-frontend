import React from "react";
import "./footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="app-footer">
        <div className="d-flex justify-content-center">
          <h3 className="contact-us">contact us</h3>
        </div>
        <div className="contact-icons d-flex justify-content-center">
          <span className="contact-icon-app">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="contact-icon-app">
            <i className="fab fa-facebook"></i>
          </span>
          <span className="contact-icon-app">
            <i className="fab fa-instagram"></i>
          </span>
          <span className="contact-icon-app">
            <i className="fas fa-mail-bulk"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
