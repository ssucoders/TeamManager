import React, { Component } from "react";
import Task from "./task"
import { today, currentMonth } from "./time";
import AddTasks from "./addtasks";

function getMembers(teams) {
    let members = [];
    teams.map(el=>{
        console.log("currentTeam", el)
        el.members.map(me => {
            //add check if memeber is already in members array, then don't push it
            if(checkIfItemExists(members, me, "id")==false){
                members.push(me);
            }
        })
    })
    return members;
}

function checkIfItemExists(items, item, prop){
    let exists = false;
    items.map(el=>{
        if(el[prop] == item[prop]){
            exists = true;
        }
    })
    return exists;
}

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

    toggleAddTask() {
        this.setState({ showAddTasks: !this.state.showAddTasks });
    }

    addTask(task) {
        if (task.title.trim().length && task.description.length > 0) {
            this.setState({ tasks: [task, ...this.state.tasks] })
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
        let members = getMembers(this.props.teams);

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
                <div className="mt-3">
                <ul className="list-inline group-horizontal-md fr">
                    <li className="list-inline-item"></li>
                    <li className="list-inline-item font-weight-bold ml-3">All Tasks ({tasks.length})</li>
                    <li className="list-inline-item font-weight-bold ml-3">Completed Tasks({completedTasks.length})</li>
                    <li className="list-inline-item ml-3" ><small className="text-muted" id="date">{currentMonth()} {today()}</small></li>
                </ul>
                <div className="addtask  mb-2">
                {this.state.showAddTasks ? <AddTasks data={members} tasks={this.state.tasks} addTask={this.addTask} hide={this.toggleAddTask} /> : <button className="btn btn-primary list-inline-item" onClick={this.toggleAddTask}>+ Add Task</button>}
                </div>
                {tasks.length > 0 ? tasklist : <p className="text-muted">No tasks, add some Tasks</p>}  
                </div>
            </React.Fragment>
        )
    }
}

export default TaskManager;