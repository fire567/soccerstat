import React, { useState } from "react";
import Period from "../Period/Period";
import "./Leagues.css";

const Leagues = ({ competitions }) => {
   const [firstDate, setFirstDate] = useState("");
   const [secondDate, setSecondDate] = useState("");

   const changedDate = (start, last) => {
    setFirstDate(start)
    setSecondDate(last)
   }
   
   const condition = (index) => {
        if(firstDate === ""){
            return true;
        }else if( firstDate > competitions[index].currentSeason.startDate){
            
            return false;
        }
   }

   console.log(competitions[0].currentSeason.startDate)

   
        

    return(
        <div>
            <Period changedDate={changedDate}/>
            <div className="column">{competitions.map((competition, index) =>  (
                 !condition(index) &&
                <div key={competition.id}>{competition.id}</div>
        ))}</div>
       </div>
    );
};

export default Leagues;