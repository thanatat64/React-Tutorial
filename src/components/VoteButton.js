import React from "react";
import '../App.css'
class VoteButton extends React.Component{
        clicky = () =>{
            this.props.voteClick();
        }
        render(){
            return(
                <button className="vote-bt" onClick={this.clicky}>{this.props.content}</button>
            );
        }
}

export default VoteButton;