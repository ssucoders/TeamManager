import React, { Component } from "react";
import { fetchTeams } from "../API";
import Team from "./team";
import TeamOverview from "./teamOverview";

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            selectedTeam: null
        }
        this.setupTeams = this.setupTeams.bind(this)
        this.selectTeam = this.selectTeam.bind(this)
    }

    componentDidMount() {
        this.setupTeams();
    }

    setupTeams() {
        var self = this;
        fetchTeams().then((response) => {
            self.setState({ teams: response.data })
        });
    }

    selectTeam(team) {
        this.setState({ selectedTeam: team })
    }

    render() {

        let teams = this.state.teams

        return (
            <div>
                <div className="card-deck mt-5" >
                    {
                        teams.map((el, i) => {
                            return (<Team item={el} key={i} selectaction={this.selectTeam} />)
                        })
                    }
                </div>
                <TeamOverview team={this.state.selectedTeam} />
            </div>
        )
    }
}

export default Teams;