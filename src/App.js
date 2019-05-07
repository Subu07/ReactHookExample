import React, { Component } from 'react';
import './App.css';
import Counter from "./Component/counter";
import AllPosts from "./Component/AllPosts";
import Comp1 from "./Component/Comp1";
import HComp1 from "./Component/HComp1";
import Address from "./Component/Address";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <AllPosts/>
        <Comp1/>
        <HComp1/>
        <Address/>

      </div>
    );
  }
}

export default App;
