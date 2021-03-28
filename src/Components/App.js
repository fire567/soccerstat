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
    const response = await API.get('/')
    this.setState({ competitions: response.data.competitions })
    
  }
  
  render(){
    //console.log(this.state.competitions[0].id)
  return (
    <div className="App">
      <Header />
      <div className="content">
        
          <Route path="/leagues"  render={() => <Leagues competitions={this.state.competitions}/>} exact/>
        
      </div>
    </div>
  );
  }
}

export default App;
