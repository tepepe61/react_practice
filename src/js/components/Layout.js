import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    // setTimeout(
    //   () => { this.setState({title: "Welcome changed! tepepe"}); },
    //   2000
    // );
    return (
      <div>
        {/* <Header title={this.state.title} /> */}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        {/* /* 1. 'this'はそのthisが書かれている場所のコンポーネントで得た情報が入ってる。今回で言うならば、Layout.jsで得た情報。
        changeTitle={this.changeTitle.bind(this)}の左辺に、Layout内で定義したchangeTitle関数を子のコンポーネント内でも使えるようにしてる、
        且つ子たちに関数と一緒にlayoutコンポーネントで得た情報(this)の値を.bindによってしっかりデータを渡してる。
        仮に、bindがないと、子のHeaderないでchangeTitle関数は呼べるけど、読んだ時に親のコンポーネントで得た情報(this)を使用することができない。(スコープの拡張のために.bind(this)が必要だね)
        // アロー関数とか種類によって.bindをうまく省きながら定義する方法もあるらしい */}
        <Footer />
      </div>
    );
  }
}


// export default class Layout extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {name: "teppei"};
//     // 1. 最初にthis.stateの初期設定をしてる。name: teppeiをぶち込んでる
//   // }
//   render(){
//     // setTimeout(
//     //   () => {this.setState({name: "Hello~"});}
//     // , 1000);
//     // 2. ここのsetTimeはrender内だし、thisに紐づくnameの値を一定時間後に変更しようとしてる
//     return(
//       <div>
//         {/* {this.state.name} */}
//         {/* // 3. 最初に1の初期値を表示し、一定時間後2のnameの値を入れてる。差分だけrender */}
//         <Header />
//         <Footer />
//       </div>
//     );
//   }
// }