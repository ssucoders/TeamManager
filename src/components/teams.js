import React, { Component } from "react";
import Team from "./team";
import TeamOverview from "./teamOverview";

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    
    render() {
        let {pointTypes, teams, selectedTeam} = this.props
        return (
            <div>
                <div className="card-deck" >
                    {
                        teams.map((el, i) => {
                            return (<Team item={el} key={i} selectaction={this.props.selectaction} />)
                        })
                    }
                </div>
                <TeamOverview team={selectedTeam} pointTypes={pointTypes} />
            </div>
        )
    }
}

export default Teams;