import React, { Component } from "react";
import Team from "./team";

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    
    render() {
        // let  {teams} = this.props
        let teams = this.props.teams;
        return (
            <div>
                <div className="card-deck" >
                    {
                        teams.map((el, i) => {
                            return (<Team item={el} key={i} selectaction={this.props.selectaction} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Teams;