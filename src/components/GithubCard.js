import React from "react";
import CardList from "./CardList";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class GithubCard extends React.Component{


    render(){
        return(
            <Card className="card">
                <CardTitle>{this.props.object.login}</CardTitle>
                <CardImg width="100%" src={this.props.object.avatar_url}/>
                <CardBody>
                    <CardText>Link to Github: {this.props.object.html_url}</CardText>
                </CardBody>
            </Card>
        )
    }

}

export default GithubCard;