import React, { Component } from "react";


class ProgressBar extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let value = this.props.data.value
        let cssClass = "red"
        if(value>79){
            cssClass = "green"
        }else if(value>39){
            cssClass = "blue"
        }
        return (
            <div className="progress mb-4 mt-1" >
                <div className={"progress-bar " + cssClass} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ width: value + "%" }}>{value}</div>
            </div>

        )
    }
}


export default ProgressBar;