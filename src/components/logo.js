import React, { Component } from "react";

class Logo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row ml-4">
            <a href="#" id="logo" title="My Team">
                <img src="images/logo.png" />
                <div className="logoText">
                    <b>Top Pick</b>
                    <p className="text-muted">A group of young people<br /> with dreams</p>
                </div>
            </a>
            </div>
            
        )
    }
}

export default Logo;