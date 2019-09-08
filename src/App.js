import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
// import UsersList from "./components/userslist"
import Teams from "./components/teams"


class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="container-fluid App">
        {/* <UsersList /> */}
        <Teams />
      </div>
    );
  }
}

export default hot(module)(App);