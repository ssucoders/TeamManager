import React, {Component} from "react";
import {fetchTeams} from "../API";
import Header from "./header";
import Team from "./team";

class Teams extends Component{
    constructor(props){
        super(props);
        this.state={
            teams: []
        }
        this.setupTeams = this.setupTeams.bind(this)
    }

    componentDidMount(){
        this.setupTeams();
    }

    setupTeams(){
        var self = this;
        fetchTeams().then((response)=>{
            self.setState({teams:response.data})
        });
    }

    render(){

        let teams = this.state.teams
      
        return (
            <div>
                <Header/>
                <div class="card-group">
                {
                    teams.map((el, i)=>{
                        return (<Team item={el} key={i} />)
                    })
                }
                </div>
        </div>
        )
    }
}

export default Teams;