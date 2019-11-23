import React, { Component } from "react";
import UserData from "./userdata";

class Players extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let playersData = [
            {
            "image" : "/logo.png" , "name" : "Sharon Rodriguez" , "email" : "abc@gmail.com" , "followers" : "12K" , "position" : "Top1" , "work" : "12", progress:[
                {title:"UIUX", value: "97"},
                {title:"Animation", value: "45"},
                {title:"Painting", value: "36"}

            ] 
            }
            ,
            {
                "image" : "/logo.png" , "name" : "Robert Gonzalez" , "email" : "abc@gmail.com" , "followers" : "11K" , "position" : "Top2" , "work" : "11" , progress:[
                    {title:"UIUX", value: "80"},
                    {title:"Animation", value: "34"},
                    {title:"Painting", value: "50"}
    
                ]
            }
            ,
            {
                "image" : "/logo.png" , "name" : "Christopher Robinson" , "email" : "abc@gmail.com" , "followers" : "10K" , "position" : "Top3" , "work" : "10" , progress:[
                    {title:"UIUX", value: "69"},
                    {title:"Animation", value: "39"},
                    {title:"Painting", value: "80"}
    
                ] 
            }
        ]
        return (
            <React.Fragment>
                <h2 className="font-weight-bold">Players</h2>
                <p className="players text-muted"><small>July 03rd 2018 Friday</small></p>
                <div className="card-deck mt-4">
                {playersData.map((el ,i)=>{
                    return(<UserData data={el} key={i}/>)
                })}
                </div>
            </React.Fragment>
        )

    }

}

export default Players;