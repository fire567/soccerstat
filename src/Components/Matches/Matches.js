import React, { useState } from "react";
import Year from "../Period/Period";
<<<<<<< HEAD
//import { Context } from '../context'
import "./Matches.css";

const Matches = ({ matches, changedDates }) => {
=======
import "./Matches.css";

const Matches = ({ changedDates, matches }) => {
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
    const [newSinceDate, setNewSinceDate] = useState("")
    const [newEndDate, setNewEndDate] = useState("")
    
    
   

<<<<<<< HEAD
    //const matches = useContext(Context)
    //console.log(matches)

=======
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
    const getNewDate = (firstDate, secondDate) => {
        setNewSinceDate(firstDate);
        setNewEndDate(secondDate);
        changedDates(firstDate, secondDate);
    };
    
    const showMatches = (match) => {
<<<<<<< HEAD
       // console.log(match.utcDate)
        
        if(match.utcDate >= newSinceDate && match.utcDate <= newEndDate){
            console.log("asd")
            console.log(match.utcDate)
            return(
                <div key={match.id} className="match-form">
                <div className="teams">
                    {match.awayTeam.name} vs {match.homeTeam.name}
                </div>
                <div className="score-form">
                    <div className="away-team">
                        {match.score.fullTime.homeTeam}
=======
        var since = new Date(newSinceDate);
        var end = new Date(newEndDate);
        var matchDate = new Date(match.utcDate);
        
        if(matchDate >= since && matchDate <= end.setHours(23,59,59)){
            console.log(matchDate)
            console.log(end)
            return(
                <div className="match-form" key={match.id}>
                    <div className="teams">
                        {match.awayTeam.name} vs {match.homeTeam.name}
                    </div>
                    <div className="score-form">
                        <div className="away-team">
                            {match.score.fullTime.homeTeam}
                        </div>
                        :
                        <div className="away-team">
                            {match.score.fullTime.awayTeam}
                        </div>
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
                    </div>
                    :
                    <div className="away-team">
                        {match.score.fullTime.awayTeam}
                    </div>
                </div>
                <div>
                    {match.utcDate}
                </div>
            </div>
            )
        }
        else{
            return(
<<<<<<< HEAD
            <div key={match.id} className="match-form">
=======
            <div className="match-form" key={match.id}>
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
                    <div className="teams">
                        {match.awayTeam.name} vs {match.homeTeam.name}
                    </div>
                    <div className="score-form">
                        <div className="away-team">
                            {match.score.fullTime.homeTeam}
                        </div>
                        :
                        <div className="away-team">
                            {match.score.fullTime.awayTeam}
                        </div>
                    </div>
                    <div>
                        {match.utcDate}
                    </div>
                </div>
            )
        }
<<<<<<< HEAD
        
=======
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
       
    }

    return(
        <div>
            <div className="year-input">
                <Year changedDate={getNewDate}/>
            </div>
            <div className="matches-form">
                {matches ? 
                    matches.map((match) => (
                        showMatches(match)
                    ))
                : "loading"

                }
            </div>
        </div>
    );
};

export default Matches;