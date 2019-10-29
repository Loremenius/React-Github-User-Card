import React from "react";
import CardList from "./CardList";

class GithubCard extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.object.avatar_url}/>
                <h1>{this.props.object.login}</h1>
                <p>Link to Github: {this.props.object.html_url}</p>
            </div>
        )
    }

}

export default GithubCard;