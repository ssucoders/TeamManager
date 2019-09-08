import React, {Component} from "react";
import Team from "./team";

class TeamOverview extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let team = this.props.team;
        return (
            <React.Fragment>
                {team?
                    <React.Fragment>
                        <h2>{team.name} Overview</h2>
                        <Team item={team}/>
                    </React.Fragment>
            :null}
            </React.Fragment>
            
        )
    }
}

export default TeamOverview;