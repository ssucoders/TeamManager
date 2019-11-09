import React, { Component } from "react";

class Players extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="font-weight-bold">Players</h2>
                <p className="players text-muted"><small>July 03rd 2018 Friday</small></p>
            <div className="card-deck mt-4">
                <div className="card">
                    <div className="card-body">
                        <div className="row no-gutters">
                            <div className="col-md-2">
                                <img src="/images/logo.png" className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="ml-2">
                                    <h6><small className="font-weight-bold">Rohan Rodriguez</small></h6>
                                    <p className="text-muted m-0 lowerDeckText"><small>abc@gmail.com</small></p>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="btn-group">
                                    <a href="#" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ...
                                                 </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Followers</small><br />
                                <small className="font-weight-bold text-danger">12K</small>
                                <p className="bg-light rounded-pill text-danger lowerText"><small className="font-weight-bold  ml-2">Top 1</small></p>
                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Works</small><br />
                                <small className="font-weight-bold text-primary">12</small>

                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Task</small><br />
                                <small className="font-weight-bold text-primary">02</small>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <p><small className="lowerText">UI/UX</small></p>
                                <p><small className="lowerText">Animation</small></p>
                                <p><small className="lowerText">Painting</small></p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress mb-4 mt-1">
                                    <div className="progress-bar bar1" role="progressbar" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">97%</div>
                                </div>
                                <div className="progress mb-4">
                                    <div className="progress-bar bar2" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bar3" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">36%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row no-gutters">
                            <div className="col-md-2">
                                <img src="/images/logo.png" className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="ml-2">
                                    <h6><small className="font-weight-bold">Robert Gonzalez</small></h6>
                                    <p className="text-muted m-0 lowerDeckText"><small>abc@gmail.com</small></p>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="btn-group">
                                    <a href="#" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ...
                                                 </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Followers</small><br />
                                <small className="font-weight-bold text-danger">11K</small>
                                <p className="bg-light rounded-pill text-danger lowerText"><small className="font-weight-bold  ml-2">Top 2</small></p>
                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Works</small><br />
                                <small className="font-weight-bold text-primary">11</small>

                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Task</small><br />
                                <small className="font-weight-bold text-primary">02</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p><small className="lowerText">UI/UX</small></p>
                                <p><small className="lowerText">Animation</small></p>
                                <p><small className="lowerText">Painting</small></p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress mb-4 mt-1">
                                    <div className="progress-bar bar1" role="progressbar" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">97%</div>
                                </div>
                                <div className="progress mb-4">
                                    <div className="progress-bar bar2" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bar3" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">36%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row no-gutters">
                            <div className="col-md-2">
                                <img src="/images/logo.png" className="card-img-top" alt="..." />
                            </div>
                            <div className="col-md-9">
                                <div className="ml-2">
                                    <h6><small className="font-weight-bold">Christopher Robinson</small></h6>
                                    <p className="text-muted m-0 lowerDeckText"><small>abc@gmail.com</small></p>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="btn-group">
                                    <a href="#" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ...
                                                 </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Followers</small><br />
                                <small className="font-weight-bold text-danger">10K</small>
                                <p className="bg-light rounded-pill text-danger lowerText"><small className="font-weight-bold ml-2">Top 3</small></p>
                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Works</small><br />
                                <small className="font-weight-bold text-primary">10</small>

                            </div>
                            <div className="col-md-4">
                                <small className="font-weight-bold lowerText">Task</small><br />
                                <small className="font-weight-bold text-primary">02</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p><small className="lowerText">UI/UX</small></p>
                                <p><small className="lowerText">Animation</small></p>
                                <p><small className="lowerText">Painting</small></p>
                            </div>
                            <div className="col-md-8">
                                <div className="progress mb-4 mt-1">
                                    <div className="progress-bar bar1" role="progressbar" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">97%</div>
                                </div>
                                <div className="progress mb-4">
                                    <div className="progress-bar bar2" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bar3" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">36%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    
    }
    
}

export default Players;