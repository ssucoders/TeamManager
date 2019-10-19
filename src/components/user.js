import React, { Component } from "react";
import PointsListing from "./pointslisting";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let user = this.props.item;
        return (
            <React.Fragment>
                {user ?
                    <div className="card">
                        <img src={"/images/users/" + user.picture} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{user.name} <span class="badge badge-secondary">7</span></h4>
                            <h5 className="card-text">{user.designation}</h5>
                            {user.points.map((el, i) => {
                                return (<PointsListing data={el} key={i}/>)
                            })}
                            {/* <PointsListing data={user.points.pop()}/> */}
                        </div>
                    </div>
                    : null}
            </React.Fragment>

        )
    }
}

export default User;