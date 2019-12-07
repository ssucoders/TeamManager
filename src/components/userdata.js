import React, { Component } from "react";
import ProgressBar from "./progressbar";

class UserData extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {

        let data = this.props.data;
        return (
                    <div className="card">
                        <div className="card-body">
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img src={"/images/users/" + data.picture} className="card-img-top" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="ml-2">
                                        <h6><small className="font-weight-bold">{data.name}</small></h6>
                                        <p className="text-muted m-0 lowerDeckText"><small>{data.email}</small></p>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="btn-group">
                                        <a href="#" className="color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ...
                                                 </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                            <div className="row mt-2 ml-1">
                                <div className="col-md-5 ">
                                    <small className="font-weight-bold lowerText">Followers</small><br />
                                    <small className="font-weight-bold text-danger">{data.followers}</small>
                                    <p className="bg-light rounded-pill text-danger lowerText"><small className="font-weight-bold  ml-2">{data.position}</small></p>
                                </div>
                                <div className="col-md-4">
                                    <small className="font-weight-bold lowerText">Works</small><br />
                                    <small className="font-weight-bold text-primary">{data.work}</small>

                                </div>
                                <div className="col-md-3">
                                    <small className="font-weight-bold lowerText">Task</small><br />
                                    <small className="font-weight-bold text-primary">02</small>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-3 pr-0">
                                    <p><small className="lowerText ">UI/UX</small></p>
                                    <p><small className="lowerText">Animation</small></p>
                                    <p><small className="lowerText">Painting</small></p>
                                </div>
                                <div className="col-md-9">
                                    {data.progress.map((el , i)=>{
                                        return(<ProgressBar data={el} key={i}/>)
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

             )

    }

}

export default UserData;



