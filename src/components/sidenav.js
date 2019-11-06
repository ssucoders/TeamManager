import React, { Component } from "react";

class Sidenavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="nav flex-column ml-5 mt-4">
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#">Overviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My Teams</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#">Tasks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#">Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#" >Share</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#" >Mail</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted" href="#" >Settings</a>
                </li>
            </ul>
        )
    }
}

export default Sidenavbar;