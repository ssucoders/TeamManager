import React, {Component} from "react";
import Team from "./team";
import User from "./user";
import Players from "./players";

class TeamOverview extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let team = this.props.team;
        // let {pointTypes} = this.props
        return (
            <React.Fragment>
                {team?
                    <React.Fragment>
                        <h2>{team.name} Overview</h2>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={"/images/teams/"+ team.picture} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{team.name}</h5>
                                        <p className="card-text">{team.description}</p>
                                        <small>Members: {team.members.length}</small>
                                        
                                    </div>
                                </div>
                                </div>
                        </div>
                        <Players data={team.members} />
                    </React.Fragment>
            :null}
            </React.Fragment>
            
        )
    }
}

export default TeamOverview;