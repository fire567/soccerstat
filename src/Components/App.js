import React from "react";
import Header from "./Header/header";
import Leagues from "./Leagues/Leagues";
import API from "../apis/API.js";
import { Route } from "react-router-dom";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      competitions: null,
      currentLink: "competitions"
    }
  }


  componentDidMount(){
    this.onTermSubmit();
  }

  onTermSubmit = async () => {
    const response = await API.get(`/${this.state.currentLink}`)
    this.setState({ competitions: response.data.competitions })
    console.log(response.data)
  }

  changedLink = (link) => {
    this.setState({ currentLink: link })
  }
  
  render(){
    console.log(this.state.currentLink)
  return (
    <div className="App">
      <Header changedLink={this.changedLink}/>
      <div className="content">
          <div> 
            <Route path="/leagues"  render={() => <Leagues competitions={this.state.competitions}/>} exact/>
          </div>
      </div>
    </div>
  );
  }
}

export default App;
