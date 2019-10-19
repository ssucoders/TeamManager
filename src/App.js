import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
// import UsersList from "./components/userslist"
import Teams from "./components/teams"
import Header from "./components/header";
import Welcome from "./components/welcome";


class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <React.Fragment>
        <Header/>
      <div className="container-fluid App">
        {/* <UsersList /> */}
        <Welcome/>
        <Teams />
      </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);