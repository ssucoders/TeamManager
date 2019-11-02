import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
// import UsersList from "./components/userslist"
import Teams from "./components/teams"
import Header from "./components/header";
import Welcome from "./components/welcome";
import DashBoard from "./components/dashboard"
import { fetchPointTypes } from "./API"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pointTypes: []
    }
  }
  
  componentDidMount () {
    var self = this;
    fetchPointTypes().then(function (response) {
      self.setState({pointTypes: response.data})
    })
  }

  render(){
    return(
      <React.Fragment>
        {/* <Header/> */}
      <div className="container-fluid App">
      <DashBoard/>
        {/* <UsersList /> */}
        {/* <Welcome/> */}
        {/* <Teams pointTypes={this.state.pointTypes}/> */}

      </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);