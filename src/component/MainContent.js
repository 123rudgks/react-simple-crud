import React from "react";

class MainContent extends React.Component {
  render() {
    return (
      <article>
        <h1>{this.props._title}</h1>
        {this.props._desc}
      </article>
    );
  }
}

export default MainContent;
