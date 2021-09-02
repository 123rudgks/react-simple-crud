import React from "react";
import MainContent from "./MainContent";

class Content extends React.Component {
  render() {
    if (this.props._mode === "read") {
      return <MainContent _title="he" _desc="she" />;
    } else {
      return (
        <article>
          <h1>{this.props._mode}</h1>
        </article>
      );
    }
  }
}

export default Content;
