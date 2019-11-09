import React, { Component } from "react";

class MyTeam extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-deck upperDecks">
                <div className="card">
                    <div className="row no-gutters p-3">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-primary">28</h4>
                                <h6 className="card-text topText">Total Team Members</h6>
                                <p className="text-muted crdText mb-0"><small>Excellent Designer</small></p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src="/images/members.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row no-gutters p-3">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-danger">12k<small className="text-muted perText">+26%</small></h4>
                                <h6 className="card-text topText">Followers Of The Team</h6>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src="/images/followers.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row no-gutters p-3">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-primary">12</h4>
                                <div className="card-text">
                                    <h6 className="font-weight-bold">Team Tasks</h6>
                                    <ul className="pl-3">
                                        <li><small>UI/UX</small></li>
                                        <li><small>Painting</small></li>
                                        <li><small>Brand Design</small></li>
                                        <li><small>Animation</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <img src="/images/tasks.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyTeam;