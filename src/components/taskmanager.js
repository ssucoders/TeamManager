import React, { Component } from "react";
import Task from "./task"
import { today, currentMonth, localTime } from "./time";


class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            value: "",
            notes:""
        }
        this.addTask = this.addTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.handleNotesChange = this.handleNotesChange.bind(this)
    }


    addTask() {
        if (this.state.value.trim().length && this.state.notes.length > 0) {
            this.setState({
                tasks: [{ title: this.state.value, note:this.state.notes, done: false, time: localTime() }, ...this.state.tasks],
                value: "" , notes:""
            })
        } else {
            alert("Please dont leave the fields empty")
        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    handleNotesChange(e){
        console.log(e.target.value)
        this.setState({notes:e.target.value})
    }


    handleKeyDown(e) {
        console.log(e.which)
        if (e.which === 13) {
            this.addTask()
        }
    }


    deleteTask(index) {
        this.setState((state) => {
            let updatedTasks = state.tasks.filter((el, i) => {
                return i != index;
            })
            return { tasks: updatedTasks }
        })
    }
    updateTaskStatus(status, index) {
        console.log(status);
        console.log(index);
        this.setState((state) => {
            let updatedTasks = state.tasks.map((el, i) => {
                if (i === index) {
                    el.done = status
                }
                return el;
            })
            return { tasks: updatedTasks }
        })
    }

    render() {

        let tasks = this.state.tasks;
        let completedTasks = tasks.filter(el => {
            return (el.done == true)
        })

        let tasklist = tasks.map((el, i) => {
            return (
                <Task key={i} data-index={i} item={el} deleteTask={this.deleteTask} onChange={this.updateTaskStatus} />
            )
        });


        return (
            <React.Fragment>
                <div>
                    <h1>All Tasks ({tasks.length})</h1>
                    <h2>Completed Tasks({completedTasks.length})</h2>
                    <p id="date"> {currentMonth()} {today()}</p>
                </div>
                <div className="card p-4 taskCard">
                    <div className="card-body">
                        <h3 className="card-title list-inline-item font-weight-bold">Add Task</h3>
                        <button type="button" className="list-inline-item closee">x</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <label className="text-muted">Title</label>
                            <input type="text" placeholder="Add Tasks Title" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} className="form-control" />
                        </li>
                           <li className="list-group-item"><label className="text-muted">Notes</label>
                            <textarea placeholder="Add Some Notes" className="form-control" value={this.state.notes} onKeyDown={this.handleKeyDown} onChange={this.handleNotesChange} rows="4"></textarea></li>
                    </ul>
                    <div className="list-group-item">
                        <a href="#" className="btn btn-primary fr" onClick={this.addTask}>+ Add Task</a>
                    </div>
                </div>
                {tasks.length > 0 ? tasklist : <p>No tasks, add some Tasks</p>}
            </React.Fragment>
        )
    }
}

export default TaskManager;