import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render () {
    return (
      <div>
        <Title title={this.props.title} />
        {/* 1. Layout.jsの<Header />内で具体的に定義した値をlayout→header→title.jsと孫まで渡そうとしてる */}
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}