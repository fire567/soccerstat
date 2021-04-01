import React, { useState, useEffect} from "react";
import Header from "./Header/header";
import Leagues from "./Leagues/Leagues";
import Matches from "./Matches/Matches";
import {Context} from "./context";
import API from "../apis/API.js";
import { Route } from "react-router-dom";


const App = () => {

  const [ competitions, setCompetitions ] = useState(null)
  const [ matches, setMatches ] = useState(null)
  const [newSinceDate, setNewSinceDate] = useState("")
  const [newEndDate, setNewEndDate] = useState("")
  const [ currentLink, setCurrentLink ] = useState("competitions")
 


  useEffect(() => {
    const onTermSubmit = async () => {
      const response = await API.get(`${currentLink}`)
      setCompetitions(response.data.competitions)
      setMatches(response.data.matches)
      console.log(currentLink)
    }
    onTermSubmit()
  }, [currentLink, newSinceDate,newEndDate])

  

  const changedLink = (link) => {
    setCurrentLink(link)
  }

  const changedDates = (since, end) => {
    setNewSinceDate(since)
    setNewEndDate(end)
    console.log(since)
  }
  

  
  return (
    <Context.Provider value={}>
    <div className="App">
      <Header changedLink={changedLink}/>
      <div className="content">
          <div> 
            <Route path="/leagues"  render={() => <Leagues competitions={competitions} changedLink={changedLink}/>} exact/>
            <Route path="/leagues/matches"  render={() => <Matches matches={matches} changedDates={changedDates}/>}  exact/>
          </div>
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
