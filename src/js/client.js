import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  constructor(){
    super();
    this.name = "Tsutomu~~";
  }

  render() {
    let name = "Tsututomu";
    return (
    <div>
      <h1>Welcome!</h1>
      <h1>It's works!</h1>
      <h1>It's {name}!</h1>
      <h1>It's {1 + 2}</h1>
      <h1>It's {this.get_result(3)}!</h1>
      <h1>It's {((num) => {return 1 + num;})(3)}!!!!!!!!</h1>
      <h1>It's {this.name}</h1>
    </div>
    );
  }
  get_result(num) {
    return 1 + num;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);