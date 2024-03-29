
import React, { Component } from "react";

function getToday(locale) {
    let today = new Date();
    return locale? today.toLocaleString(): today.toString()
}

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                    <h4 className="media align-items-center font-weight-bold py-3 mb-4">
                        <img src="/products/appwork/v131/assets_/img/avatars/1.png" alt="" className="ui-w-50 rounded-circle" />
                        <div className="media-body ml-3">
                            Welcome back, Mike!
                            <div className="text-muted text-tiny mt-1"><small className="font-weight-normal">Today is {getToday(true)}</small></div>
                        </div>
                    </h4>
            </React.Fragment>

        )
    }
}

export default Welcome;