import React from "react";

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props._index,
      title: this.props._title,
      desc: this.props._desc
    };
    this.changeText = this.changeText.bind(this);
  }
  changeText(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <form
          action="/"
          onSubmit={(e) => {
            e.preventDefault();
            this.props._update(
              this.state.title,
              this.state.desc,
              this.state.index
            );
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.changeText}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.changeText}
            />
          </p>
          <button type="submit">update</button>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
