import React, { Component } from "react";
import Layout from './components/layout';
import Gameboard from './components/gameboard';
import Detailboard from "./components/detailboard";

class App extends Component{
  render(){
    return(
      <div className="App">
       <Layout>
           <Gameboard></Gameboard>
           <Detailboard></Detailboard>
       </Layout>

      </div>
    );
  }
}

export default App;