


import React, { Component } from "react";

class PointsListing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let abc = this.props.data;
        return (
            <React.Fragment>
                <h5 className="card-text">{abc.type}</h5>
                <p>{abc.details}
                    <br /><small>{abc.date}</small>
                </p>
            </React.Fragment>

        )
    }
}

export default PointsListing;