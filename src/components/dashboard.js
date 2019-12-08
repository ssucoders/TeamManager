
import React, { Component } from "react";
import Logo from "./logo";
import Sidenavbar from "./sidenav";
import MyTeam from "./info";
import Players from "./players"
import { fetchTeams } from "../API";
import TeamOverview from "./teamOverview";
import Teams from "./teams";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            selectedTeam: null
        }
        this.setupTeams = this.setupTeams.bind(this)
        this.selectTeam = this.selectTeam.bind(this)
    }

    setupTeams() {
        var self = this;    //fetch all teams from API server
        fetchTeams().then((response) => {
            self.setState({ teams: response.data })
        });
    }

    selectTeam(team) {
        this.setState({ selectedTeam: team }) //setstate team as selectedTeam
    }

    componentDidMount(){
        this.setupTeams();
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-3 leftPanel">
                        <Logo />
                        <Sidenavbar teams={this.state.teams} selectTeam={this.selectTeam} selectedTeam={this.state.selectedTeam} />
                    </div>
                    <div className="col-lg-9 rightPanel">
                        <div className="row">
                            <h1 className="ml-3 font-weight-bold mt-3">My Teams</h1>
                            <div className="topDataRight ml-auto mt-3">
                                <small className="text-muted mt-">Hi, Lundy</small>
                                <a href="#" className="topImage"><img src="images/logo.png" /></a>
                            </div>
                        </div>
                        {this.state.selectedTeam? <TeamOverview team={this.state.selectedTeam} />:
                        <Teams teams={this.state.teams} selectaction={this.selectTeam} />
                        }
                        
                        
                        {/* <MyTeam /> */}
                        {/* <Players/> */}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default DashBoard;