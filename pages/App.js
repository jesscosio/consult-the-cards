import React, { Component } from "react";
import Layout from '../components/layout';
import Gameboard from '../components/gameboard';

class App extends Component{
  render(){
    return(
      <div className="App">
       <Layout>
           <Gameboard></Gameboard>
       </Layout>

      </div>
    );
  }
}

export default App;