import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-regular-svg-icons'
import TeamListing from "./teamlist";
class Sidenavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let teams = this.props.teams;
        return (
            <ul className="nav flex-column ml-5 mt-4">
                <li className="nav-item">
                    <a className="nav-link" href="#">Overviews</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropbtn" href="#"><FontAwesomeIcon icon={faCoffee} />My Teams</a>
                    <div className="dropdown-content">
                    {
                        teams.map((el, i) => {
                            return (<TeamListing item={el} key={i} selectaction={this.props.selectTeam} />)
                        })
                    }
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tasks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Share</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Mail</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Settings</a>
                </li>
            </ul>
        )
    }
}

export default Sidenavbar;