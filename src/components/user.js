import React, {Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        let user = this.props.item;
        return (
            <div>
                {user?
                <div className="card">
                    <img src={"/images/users/"+ user.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{user.name}</h4>
                        <h5 className="card-text">{user.designation}</h5>
                    </div>
                </div>
            :null}
            </div>
            
        )
    }
}

export default User;