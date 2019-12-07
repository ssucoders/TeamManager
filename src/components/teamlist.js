import React, {Component} from "react";

class TeamListing extends Component{
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
                <a href="#" onClick={this.handleClick}>{team.name}</a>
            :null}
            </React.Fragment>
            
        )
    }
}

export default TeamListing;