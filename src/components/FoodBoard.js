import React from "react";


import '../App.css'
import VoteButton from "./VoteButton";

class FoodBoard extends React.Component{
    constructor(){
        super();
        this.state = {voteCount : 0}
    }

    increaseVote = () =>{
        if(this.state.voteCount < 10){
            this.setState({voteCount:this.state.voteCount+1});
        }
        else{
            alert("You cannot vote anymore!")
        }
    }

    decreaseVote = () =>{
        if(this.state.voteCount > 0){
            this.setState({voteCount:this.state.voteCount-1});
        }
        else{
            alert("You cannot unvote anymore!");
        }
    }

    voteResult = () =>{
        if(this.state.voteCount === 10){
            return "MAX";
        }
        else if(this.state.voteCount === 0){
            return "MIN";
        }
        return this.state.voteCount;
    }

    render(){
        return(
            <div className="Board-container">
                <div className="Board_body">
                    <div className="info">
                        <h2>{this.props.header}</h2>
                        <h3>{this.props.subheader}</h3>
                        <p>{this.props.detail}</p>
                    </div>
                    <div className="food_img">
                        <img alt={this.props.imgalt} src={this.props.imgsrc} width={300}/>
                    </div>
                </div>
                <div className="voteZone">
                    <VoteButton content='Click to Vote' voteClick={this.increaseVote}/>
                    <div className="vote-res">{this.voteResult()}</div>
                    <VoteButton content='Click to Unvote' voteClick={this.decreaseVote}/>
                </div>
            </div>


        );
    }
    
}

export default FoodBoard;
