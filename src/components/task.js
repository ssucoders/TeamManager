import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.props.onChange(e.target.checked, this.props["data-index"]);
    }

    removeTask(e) {
        this.props.deleteTask(this.props["data-index"]);
    }
    render() {
        return (
            <div className={this.props.item.done ? "task task-done list-group mb-2" : "task list-group mb-2"}>
                <div  className={this.props.item.done ? "list-group-item  list " : "list-group-item tasklist"}>
                <input type="checkbox"  checked={this.props.item.done} onChange={this.handleChange} />
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="m-0 font-weight-bold adjust">Title: {this.props.item.title}</h5>
                        <small><button className="del btn btn-danger" onClick={this.removeTask}>X</button></small>
                    </div>
                <p className="adjust"><small className="text-muted">Description: {this.props.item.description}</small></p>
                </div>
            </div>
        )
    }
}

export default Task;