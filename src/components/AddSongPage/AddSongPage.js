import React from "react";
export default class addSongPage extends React.Component {
  componentDidMount() {
    console.log("the album id is: ", this.props.match.params);
  }
  render() {
    return <div>add song</div>;
  }
}
