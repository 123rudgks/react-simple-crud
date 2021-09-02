import React from "react";

class CrudMenu extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                this.props._onClick("create");
              }}
              href="/"
            >
              create
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                this.props._onClick("update");
              }}
              href="/"
            >
              update
            </a>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={(e) => {
                e.preventDefault();
                this.props._onClick("delete");
              }}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default CrudMenu;
