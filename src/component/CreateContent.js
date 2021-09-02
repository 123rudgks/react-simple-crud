import React from "react";

class CreateContent extends React.Component {
  render() {
    return (
      <article>
        <form
          action="/"
          onSubmit={(e) => {
            e.preventDefault();
            this.props._create(e.target.title.value, e.target.desc.value);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" placeholder="description" />
          </p>
          <button type="submit">create</button>
        </form>
      </article>
    );
  }
}

export default CreateContent;
