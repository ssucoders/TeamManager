
import React, { Component } from "react";

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <a href="#" id="logo" title="My Team">
                                        <img src="images/logo.png" />
                                    </a>
                                    <div className="logoText">
                                        <b>Top Pick</b>
                                        <div className="clear"></div>
                                        <p className="text-muted">A group of young people<br /> with dreams</p>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p className="h2">
                                My Team
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8" id="dashboard">
                                    <div className="d-flex" id="wrapper">
                                        <div className="bg-light border-right" id="sidebar-wrapper">
                                            <div className="list-group list-group-flush">
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Overviews</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light  on">My Team</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Task</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Report</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Share</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Mail</a>
                                                <a href="#" className="list-group-item list-group-item-action bg-light">Setting</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-deck">
                                <div className="card">
                                    <div className="row no-gutters">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">28</h4>
                                                <small className="card-text">Total Team Members</small>
                                                <p className="card-text"><small className="text-muted">Excellent Designer</small></p>
                                            </div>
                                        </div>
                                        <div className="col-md-4  mt-5">
                                            <img src="/images/logo.png" className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row no-gutters">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">12k<small className="text-muted  h6">+26%</small></h4>
                                                <small className="card-text">Followers Of The Team</small>
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
                                                <ul className="card-text"><b>Tasks</b>
                                                    <li><small>UI/UX</small></li>
                                                    <li><small>Painting</small></li>
                                                    <li><small>Brand Design</small></li>
                                                    <li><small>Animation</small></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-5">
                                            <img src="/images/logo.png" className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="players">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Players</p>
                                    <footer className="blockquote-footer">0ctober 29,2019 Tuesday</footer>
                                </blockquote>
                            </div>
                            <div className="card-deck">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row no-gutters">
                                            <div className="col-md-3">
                                                <img src="/images/logo.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                               <span>ubaid awan</span>
                                               <small>abc@gmail.com</small>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">...</a>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                try
                                            </div>
                                            <div className="col-md-4">
                                                try
                                            </div>
                                            <div className="col-md-4">
                                                try
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
                </div>
            </React.Fragment>

        )
    }
}

export default DashBoard;