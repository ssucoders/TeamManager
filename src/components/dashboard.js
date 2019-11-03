
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
                        <h1 className="ml-3">My Teams</h1>
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
                        <h2>Players</h2>
                        <small>October 29,2019 Tuesday</small>
                         <div className="card-deck">
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
                                            <div class="btn-group">
                                                <a href="#" class="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    ...
                                                 </a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Followers</small><br/>
                                            <small className="font-weight-bold">12K</small>
                                            </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Works</small><br/>
                                            <small className="font-weight-bold bg-light text-dark">12</small>
                                            </div>
                                        <div className="col-md-4">
                                            <small className="font-weight-bold lowerText">Task</small><br/>
                                            <small className="font-weight-bold">02</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="/images/logo.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">12k<small className="text-muted  h6">+26%</small></h4>
                                            <small className="card-text">Followers Of The Team</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="/images/logo.png" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title">12</h4>
                                            <ul className="card-text"><b>Tasks</b>
                                                <li><small>UI/UX</small></li>
                                                <li><small>Painting</small></li>
                                                <li><small>Brand Design</small></li>
                                                <li><small>Animation</small></li>
                                            </ul>
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