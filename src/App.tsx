import React, { Component } from "react";
import Add from "./components/Add";
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Add title="新增" />
      </div>
    );
  }
}

export default App;
