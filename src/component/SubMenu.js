import React from "react";

class SubMenu extends React.Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props._contents === newProps._contents) {
      return false;
    }
    return true;
  }
  render() {
    console.log("this");
    const _contents = this.props._contents;
    const lists = [];
    _contents.map((current, index) => {
      lists.push(
        <li key={index}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props._onClick(index);
            }}
          >
            {current.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default SubMenu;
