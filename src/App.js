import React from 'react';
import './App.css';
import axios from "axios";
import CardList from "./components/CardList"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cards:[]
    }
  }

  componentDidMount(){
    console.log("CDM");
    axios.get("https://api.github.com/users/loremenius")
      .then( (response) =>{
        console.log(response.data);
        this.setState({
          cards: [...this.state.cards, response.data]
        });
      })
      .catch(function (error) {
        // handle error
         console.log(error);
       });

    axios.get("https://api.github.com/users/Loremenius/followers")
      .then( (response) =>{
        console.log(response.data);
        response.data.map((item)=>{
          this.setState({
            cards: [...this.state.cards, item]
          });
        })
      })
      .catch(function (error) {
        // handle error
         console.log(error);
       });
  }

  render(){
    return(
      <div>
          <CardList cards={this.state.cards}/>
      </div>
    )
  }

}

export default App;
