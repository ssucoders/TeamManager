import React, { Component } from "react";


class ProgressBar extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        let data = this.props.data;
        return (
            <div className = "progress mb-4 mt-1" >
    <div className="progress-bar " role="progressbar" aria-valuenow={data.value} aria-valuemin="0" aria-valuemax="100" style={{ width: data.value }}>{data.value}</div>
            </div>

        )
}
}


export default ProgressBar;