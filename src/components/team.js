import React, {Component} from "react";

class Team extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let team = this.props.item;
        return (
            <div>
                {team?
                <div className="card">
                    <img src={"/images/teams/"+ team.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{team.name}</h4>
                        <h5 className="card-text">{team.description}</h5>
                        <h5 className="card-text">{team.members.length}</h5>
                    </div>
                </div>
            :null}
            </div>
            
        )
    }
}

export default Team;