import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cards:[]
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/loremenius")
      .then( (response) =>{
        console.log(response);
        this.setState({
          cards: [...this.state.cards, response]
        });
      })
      .catch(function (error) {
        // handle error
         console.log(error);
       });
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }

}

export default App;
