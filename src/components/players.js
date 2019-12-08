import React, { Component } from "react";
import UserData from "./userdata";

class Players extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
                <h2 className="font-weight-bold">Players</h2>
                <p className="players text-muted"><small>July 03rd 2018 Friday</small></p>
                <div className="card-deck mt-4">
                {data.map((el ,i)=>{
                    return(<UserData data={el} key={i}/>)
                })}
                </div>
            </React.Fragment>
        )

    }

}

export default Players;