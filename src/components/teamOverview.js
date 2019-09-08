import React, {Component} from "react";
import Team from "./team";
import User from "./user";

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
                        <div class="card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={"/images/teams/"+ team.picture} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{team.name}</h5>
                                        <p class="card-text">{team.description}</p>
                                        <p class="card-text"><small class="text-muted">{team.members.length}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-group">
                            {team.members.map((el, i)=>{
                                return (<User item={el} key={i} />)
                            })}
                        </div>
                    </React.Fragment>
            :null}
            </React.Fragment>
            
        )
    }
}

export default TeamOverview;