import React from "react";
import GitHubCard from "./GithubCard";

class CardList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="cardList"> 
                {this.props.cards.map((item)=>(
                    <GitHubCard key={item.id} object={item}/>
                ))}
            </div>
        )
    }

}

export default CardList;