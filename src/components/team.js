import React, {Component} from "react";

class Team extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log(this.props.item)
        this.props.selectaction(this.props.item)
    }

    render(){
        let team = this.props.item;
        return (
            <React.Fragment>
                {team?
                <div className="card" onClick={this.handleClick}>
                    <img src={"/images/teams/"+ team.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{team.name}</h4>
                        <h5 className="card-text">{team.description}</h5>
                        <h5 className="card-text">{team.members.length}</h5>
                    </div>
                </div>
            :null}
            </React.Fragment>
            
        )
    }
}

export default Team;