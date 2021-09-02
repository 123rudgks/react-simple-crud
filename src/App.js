import "./App.css";
import React from "react";
import TopContent from "./component/TopContent";
import SubMenu from "./component/SubMenu";
import CrudMenu from "./component/CrudMenu";
import Content from "./component/Content";
import MainContent from "./component/MainContent";
import CreateContent from "./component/CreateContent";
import UpdateContent from "./component/UpdateContent";
import DeleteContent from "./component/DeleteContent";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topcontent: { title: "Web", sub: "World Wide Web" },
      mode: "read",
      welcome: { title: "Welcome", desc: "Welcome to the React World" },
      contents: [
        { title: "HTML", desc: "HTML is for constructing" },
        { title: "CSS", desc: "CSS is for design" },
        { title: "JavaScrip", desc: "JavaScript is for interaction" }
      ],
      contentsIndex: 0
    };
  }

  // 모드에 따라 mainContent 창 변경하는 함수
  contentByMode() {
    let mainContent,
      _title,
      _desc = null;
    let index = this.state.contentsIndex;
    mainContent = <MainContent _title={_title} _desc={_desc} />;

    if (this.state.mode === "welcome") {
      // welcome page
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      // read page
      // 현재 contentsIndex에 따른 페이지
      _title = this.state.contents[index].title;
      _desc = this.state.contents[index].desc;
      mainContent = <MainContent _title={_title} _desc={_desc} />;
    } else if (this.state.mode === "create") {
      // create page
      mainContent = (
        <CreateContent
          _create={(_title, _desc) => {
            this.setState({
              // contents에 새로 create한 객체 추가
              contents: this.state.contents.concat({
                title: _title,
                desc: _desc
              })
            });
          }}
        />
      );
    } else if (this.state.mode === "delete") {
      this.setState({
        contents: this.state.contents.splice(index, 1)
      });
    } else if (
      this.state.mode === "update" &&
      this.state.contentsIndex !== null
    ) {
      _title = this.state.contents[index].title;
      _desc = this.state.contents[index].desc;
      mainContent = (
        <UpdateContent
          _index={index}
          _title={_title}
          _desc={_desc}
          _update={(newTitle, newDesc) => {
            const newContents = Array.from(this.state.contents);
            newContents[index] = { title: newTitle, desc: newDesc };
            this.setState({ contents: newContents, mode: "read" });
          }}
        />
      );
    }

    return mainContent;
  }

  render() {
    return (
      <div>
        <TopContent
          _title={this.state.topcontent.title}
          _sub={this.state.topcontent.sub}
          _onClick={() => {
            this.setState({ mode: "welcome", contentsIndex: null });
          }}
        />
        <SubMenu
          _onClick={(i) => {
            // 클릭한 메뉴의 인덱스로 contentsIndex 변경
            this.setState({ mode: "read", contentsIndex: i });
          }}
          _contents={this.state.contents}
        />
        <CrudMenu
          _onClick={(_mode) => {
            // crud중 클릭한 모드로 mode 변경
            this.setState({ mode: _mode });
          }}
        />

        {/* mode에 따라 mainContent의 페이지 변경 */}
        {this.contentByMode()}
      </div>
    );
  }
}
