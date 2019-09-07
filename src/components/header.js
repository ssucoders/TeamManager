import React, {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Team Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
    </nav>
        )
    }
}

export default Header;