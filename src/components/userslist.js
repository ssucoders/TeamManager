import React, {Component} from "react";
import User from "./user";
import {fetchEmployees} from "../API";
import Header from "./header";

class UsersList extends Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        }
        this.setupUsers = this.setupUsers.bind(this)
    }

    componentDidMount(){
        this.setupUsers();
    }

    setupUsers(){
        var self = this;
        fetchEmployees().then((response)=>{
            self.setState({users:response.data})
        });
    }

    render(){

        let users = this.state.users
      
        return (
            <div>
                <Header/>
                <ul className="row">
                {
                    users.map((el, i)=>{
                        return (<li key={i} >
                            <User item={el} />
                            </li>)
                    })
                }
                </ul>
        </div>
        )
    }
}

export default UsersList;