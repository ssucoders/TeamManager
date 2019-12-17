import React, { Component } from "react";
import Task from "./task"
import { today, currentMonth } from "./time";
import AddTasks from "./addtasks";


class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showAddTasks: false
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.toggleAddTask = this.toggleAddTask.bind(this)
        
    }

    toggleAddTask(){
        this.setState({showAddTasks: !this.state.showAddTasks});
    }

    addTask(task) {
        if (task.title.trim().length && task.description.length > 0) {
            this.setState({tasks: [task, ...this.state.tasks]})
        } else {
            alert("Please dont leave the fields empty")
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
                {this.state.showAddTasks?<AddTasks tasks={this.state.tasks} addTask={this.addTask} hide={this.toggleAddTask} />: <button onClick={this.toggleAddTask}>Add Task</button>}
                {tasks.length > 0 ? tasklist : <p>No tasks, add some Tasks</p>}
            </React.Fragment>
        )
    }
}

export default TaskManager;