


import React, { Component } from "react";

class PointsListing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let data = this.props.data;
        return (
            <React.Fragment>
                <h5 className="card-text">{data.type}</h5>
                <p>{data.details}
                    <br /><small>{data.date}</small>
                </p>
            </React.Fragment>

        )
    }
}

export default PointsListing;