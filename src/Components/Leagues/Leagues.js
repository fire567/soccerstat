import React, { useState } from "react";
import Year from "../Year/Year";
import Search from "../Search/Search";
import "./Leagues.css";

const Leagues = ({ competitions }) => {
   const [year, setYear] = useState("");
   const [id, setid] = useState("")

   const changedYear = (year) => {
    setYear(year)
   }

   const changedId = (id) => {
       setid(id)
   }

   const deletedId = (id) => {
    setid(id)
    }

    const deleteYear = (year) => {
        setYear(year)
    }

    const filteredTeams = (item) => {
        if( year === "" && id === ""){
            return(
                <div key={item.id}>{item.name}</div>
            )
        }else if(item.currentSeason !== null){
            var date = new Date(item.currentSeason.startDate); 
            var years = new Date(year);
            if(years.getFullYear() === date.getFullYear() && id === ""){
                return(
                    <div key={item.id} >{item.name}</div>
                )  
            }  
            else if(id === String(item.id) && year === ""){
                return(
                     <div key={item.id} >{item.name}</div>
            )  
            }     
            
        }
    }



    return(
        <div>
            <Year changedYear={changedYear} deletedId={deletedId}/>
            <Search changedId={changedId} deleteYear={deleteYear}/>
            <div className="column">
                {competitions ? 
                    competitions.map((item) => (
                        filteredTeams(item)
                    ))
                    : "Loading"
                    }
            </div>
       </div>
    );
};

export default Leagues;