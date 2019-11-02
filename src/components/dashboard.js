
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
                        <div className="row">
                            <a href="#" id="logo" title="My Team">
                                <img src="images/logo.png" />
                                <div className="logoText">
                                    <b>Top Pick</b>
                                    <p className="text-muted">A group of young people<br /> with dreams</p>
                                </div>
                            </a>
                        </div>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul> 
                    </div>
                    <div className="col-lg-9 rightPanel">
                        <h1>My Teams</h1>
                            <div className="card-deck">
                                    <div className="card">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h4 className="card-title">28</h4>
                                                    <p className="card-text"><h5>Total Team Members</h5><small className="text-muted">Excellent Designer</small></p>
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
                                               <h5>ubaid awan</h5>
                                               <p>abc@gmail.com</p>
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
            </React.Fragment>

        )
    }
}

export default DashBoard;