import React, { Component } from "react";
export default class SearchResults extends Component {
  state = { marginTop: "0px" };
  componentDidMount() {
    const navi = document.getElementById("app-nav-bar");
    window.onresize = function (e) {
      const myres = document.getElementById("my-results");
      myres.style.marginTop = `${navi.clientHeight}px`;
    };
    this.setState({ marginTop: `${navi.clientHeight}px` });
  }
  render() {
    const styles = {
      marginTop: `${this.state.marginTop}`,
      backgroundColor: "red",
    };
    return (
      <div id="my-results" style={styles}>
        results
      </div>
    );
  }
}
