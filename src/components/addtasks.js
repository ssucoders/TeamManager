import React, { Component } from "react";
import { localTime } from "./time";
class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            description:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    handleDescriptionChange(e){
        console.log(e.target.value)
        this.setState({description:e.target.value})
    }

    handleAddTask(){
        this.props.addTask({ title: this.state.value, description:this.state.description, done: false, time: localTime() })
        this.setState({value: "" , description:""})
    }


    handleKeyDown(e) {
        console.log(e.which)
        if (e.which === 13) {
            this.handleAddTask()
        }
    }
    
    render() {
        return (
            <div className="card p-4 taskCard">
                    <div className="card-body">
                        <h3 className="card-title list-inline-item font-weight-bold">Add Task</h3>
                        <button type="button" className="list-inline-item closee" onClick={this.props.hide}>x</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <label className="text-muted">Title</label>
                            <input type="text" placeholder="Add Tasks Title" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} className="form-control" />
                        </li>
                        <li className="list-group-item"><label className="text-muted">Description</label>
                            <textarea placeholder="Add Some description" className="form-control" value={this.state.description} onKeyDown={this.handleKeyDown} onChange={this.handleDescriptionChange} rows="4"></textarea></li>
                    </ul>
                    <div className="list-group-item">
                        <a href="#" className="btn btn-primary fr" onClick={this.handleAddTask}>+ Add Task</a>
                    </div>
                </div>
        )
    }
}

export default AddTasks;