
import React, { Component } from "react";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-3 leftPanel">
                        <div className="row ml-4">
                            <a href="#" id="logo" title="My Team">
                                <img src="images/logo.png" />
                                <div className="logoText">
                                    <b>Top Pick</b>
                                    <p className="text-muted">A group of young people<br /> with dreams</p>
                                </div>
                            </a>
                        </div>
                        <ul className="nav flex-column ml-5 mt-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Overviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">My Teams</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tasks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" >Share</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" >Mail</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" >Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 rightPanel">
                        <h1 className="ml-3 font-weight-bold">My Teams</h1>
                        <div className="card-deck upperDecks">
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">28</h4>
                                            <h6 className="card-text topText">Total Team Members</h6>
                                            <p className="text-muted crdText mb-0"><small>Excellent Designer</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <img src="/images/logo.png" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">12k<small className="text-muted  h6">+26%</small></h4>
                                            <h6 className="card-text topText">Followers Of The Team</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <img src="/images/logo.png" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">12</h4>
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
                                        <img src="/images/logo.png" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="font-weight-bold">Players</h2>
                        <p className="players text-muted"><small>October 29,2019 Tuesday</small></p>
                        <div className="card-deck mt-3">
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
                                            <small className="font-weight-bold">12K</small>
                                            <p className="bg-light rounded-pill"><small className="font-weight-bold lowerText p-2">Top 1</small></p>
                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Works</small><br />
                                            <small className="font-weight-bold">12</small>

                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Task</small><br />
                                            <small className="font-weight-bold">02</small>
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
                                            <small className="font-weight-bold">11K</small>
                                            <p className="bg-light rounded-pill"><small className="font-weight-bold lowerText p-2">Top 2</small></p>
                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Works</small><br />
                                            <small className="font-weight-bold">11</small>

                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Task</small><br />
                                            <small className="font-weight-bold">02</small>
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
                                            <small className="font-weight-bold">10K</small>
                                            <p className="bg-light rounded-pill"><small className="font-weight-bold lowerText p-2">Top 3</small></p>
                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Works</small><br />
                                            <small className="font-weight-bold">10</small>

                                        </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Task</small><br />
                                            <small className="font-weight-bold">02</small>
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
                        </div>
                    </div>
            </React.Fragment>

        )
    }
}

export default DashBoard;