import React from "react";
import Header from "./Header/header";
import Leagues from "./Leagues/Leagues";
import API from "../apis/API.js";
import { Route } from "react-router-dom";


class App extends React.Component {

  constructor() {
    super();
    this.state = {competitions: null}
  }


  componentDidMount(){
    this.onTermSubmit();
  }

  onTermSubmit = async () => {
    const response = await API.get('/' ,{
        headers: { "X-Auth-Token":"541d3a3e77434134b7eebc7ded2a5e46", }, 
      
    })
    this.setState({ competitions: response.data.competitions })
   console.log(this.state.competitions)
  }
  
  render(){
  return (
    <div className="App">
      <Header />
      <div className="content">
        {this.state.competitions &&
          <Route path="/leagues"  render={() => <Leagues competitions={this.state.competitions}/>} exact/>
        }
      </div>
    </div>
  );
  }
}

export default App;
