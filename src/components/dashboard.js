
import React, { Component } from "react";
import Logo from "./logo";
import Sidenavbar from "./sidenav";
import MyTeam from "./info";
import Players from "./players"


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
                        <Logo />
                        <Sidenavbar />
                    </div>
                    <div className="col-lg-9 rightPanel">
                        <div className="row">
                            <h1 className="ml-3 font-weight-bold">My Teams</h1>
                            <div className="topDataRight ml-auto">
                                <small className="text-muted">Hi, Lundy</small>
                                <a href="#" className="topImage"><img src="images/logo.png" /></a>
                            </div>
                        </div>
                        <MyTeam />
                        <Players/>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default DashBoard;