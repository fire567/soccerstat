import React, { useState } from "react";
import Year from "../Period/Period";
import "./Matches.css";

const Matches = ({ changedDates, matches }) => {
    const [newSinceDate, setNewSinceDate] = useState("")
    const [newEndDate, setNewEndDate] = useState("")

    const getNewDate = (firstDate, secondDate) => {
        setNewSinceDate(firstDate);
        setNewEndDate(secondDate);
        changedDates(firstDate, secondDate);
    };
    
    const showMatches = (match) => {
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
                    </div>
                    <div>
                        {match.utcDate}
                    </div>
                </div>
            )
        }
        else{
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