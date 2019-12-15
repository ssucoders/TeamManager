import React, { Component } from "react";
class TaskListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       
        return (
            <React.Fragment>
         <input type="text"/>
         <a href="#" className="btn btn-primary">SUBMIT</a>
         </React.Fragment>
        )
    }
}

export default TaskListing;