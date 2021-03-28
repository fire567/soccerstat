import React, { useState, useEffect } from "react";
import Year from "../Year/Year"
import "./Leagues.css";

const Leagues = ({ competitions }) => {
   const [year, setYear] = useState(0);

   const changedYear = (year) => {
    setYear(year)
   }



const show = (item) => {
    if( year === 0){
        return(
            <div>{item.name}</div>
        )
    }else if(item.currentSeason !== null){
        var date = new Date(item.currentSeason.startDate); 
        console.log(date.getFullYear())
        if(year === date.getFullYear()){
            return(
                <div>{item.name}</div>
            )
        }
        
    }
}



    return(
        <div>
            <Year changedYear={changedYear}/>
            <div className="column">
                {competitions ? 
                    competitions.map((item) => (
                        show(item)
                    ))
                    : "asd"
                    }
            </div>
       </div>
    );
};

export default Leagues;