import React, { Component } from "react";

class AddTasks extends Component {
    constructor(props) {
        super(props);
    }

    handleTitleChange(e) {
        this.props.onChange(e.target.value);
    }

    // handleChange(e){
    //     this.props.onChange(this.props.value)
    // }
    // handleKeyDown(e){
    //     this.props.onKeyDown(e)
    // }
    
    render() {
        let value=this.props.value;
        return (
           
            <div className="card p-4 taskCard">
                    <div className="card-body">
                        <h3 className="card-title list-inline-item font-weight-bold">Add Task</h3>
                        <button type="button" className="list-inline-item closee">x</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <label className="text-muted">Title</label>
                            <input type="text" placeholder="Add Tasks Title" value={value} onKeyDown={this.props.handleKeyDown} onChange={this.handleTitleChange} className="form-control" />
                        </li>
                           {/* <li className="list-group-item"><label className="text-muted">Notes</label>
                            <textarea placeholder="Add Some Notes" className="form-control" value={this.state.notes} onKeyDown={this.handleKeyDown} onChange={this.handleNotesChange} rows="4"></textarea></li> */}
                    </ul>
                    <div className="list-group-item">
                        <a href="#" className="btn btn-primary fr" onClick={this.addTask}>+ Add Task</a>
                    </div>
                </div>
        )
    }
}

export default AddTasks;