import React, { useState, useContext } from "react";
import Year from "../Period/Period";
import "./Matches.css";

const Matches = ({ matches, changedDates }) => {
    const [newSinceDate, setNewSinceDate] = useState("")
    const [newEndDate, setNewEndDate] = useState("")
    
    

    const getNewDate = (firstDate, secondDate) => {
        setNewSinceDate(firstDate);
        setNewEndDate(secondDate);
        changedDates(firstDate, secondDate);
    };
    
    const showMatches = (match) => {
        
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
            <div key={match.id} className="match-form">
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