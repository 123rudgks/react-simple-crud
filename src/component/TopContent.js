import React from "react";

class TopContent extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props._onClick();
            }}
          >
            {this.props._title}
          </a>
        </h1>
        {this.props._sub}
      </header>
    );
  }
}

export default TopContent;
