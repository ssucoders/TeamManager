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
                        <Team item={team}/>
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