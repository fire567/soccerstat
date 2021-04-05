import React, { useState, useEffect} from "react";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Leagues from "./Leagues/Leagues";
import Matches from "./Matches/Matches";
<<<<<<< HEAD
//import {Context} from "./context";
=======
import Teams from "./Teams/Teams";
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
import API from "../apis/API.js";
import { Route } from "react-router-dom";


const App = () => {

  const [ competitions, setCompetitions ] = useState(null)
  const [ matches, setMatches ] = useState(null)
  const [ teams, setNewTeams ] = useState(null)
  const [newSinceDate, setNewSinceDate] = useState("")
  const [newEndDate, setNewEndDate] = useState("")
  const [ currentLink, setCurrentLink ] = useState("/")

<<<<<<< HEAD
  
=======
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
 


  useEffect(() => {
    const onTermSubmit = async () => {
<<<<<<< HEAD
      const response = await API.get(`${localStorage.getItem("data")}`)
      setCompetitions(response.data.competitions)
      setMatches(response.data.matches)
      console.log(response)
=======
      const response = await API.get(`${localStorage.getItem('Link')}`)
      setCompetitions(response.data.competitions)
      setMatches(response.data.matches)
      setNewTeams(response.data.teams)
      console.log(response.data.teams)
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
    }
    onTermSubmit()
  }, [ currentLink, newSinceDate, newEndDate])

  

  const changedLink = (link) => {
    setCurrentLink(link)
  }

  const changedDates = (since, end) => {
    setNewSinceDate(since)
    setNewEndDate(end)
  }
  

  
  return (
    <div className="App">
      <Header changedLink={changedLink}/>
      <div className="content">
<<<<<<< HEAD
          <div> 
            <Route path="/"  render={() => <div>asd</div>} exact/>
=======
          <div>
            <Route path="/" render={() => <Main />} exact />
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
            <Route path="/leagues"  render={() => <Leagues competitions={competitions} changedLink={changedLink}/>} exact/>
            <Route path="/leagues/matches"  render={() => <Matches matches={matches} changedDates={changedDates}/>}  exact/>
            <Route path="/teams" render={() => <Teams teams={teams}/>} exact/>
          </div>
      </div>
    </div>
<<<<<<< HEAD

=======
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
  );
}

export default App;
