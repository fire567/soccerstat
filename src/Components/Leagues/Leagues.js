import React, { useState } from "react";
import {Link} from "react-router-dom";
import Year from "../Year/Year";
import Search from "../Search/Search";
import "./Leagues.css";

const Leagues = ({ competitions, changedLink }) => {
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

    const changeLink = (id) => {
        changedLink(`competitions/${id}/matches`)
        localStorage.setItem('Link', `competitions/${id}/matches`);
    }

    const showLeags = (item) => {
        if( year === "" && id === ""){
            return(
                <Link to="leagues/matches" key={item.id} onClick={() => changeLink(item.id)}>
                        <div>{item.name}</div>
                </Link>
            )
        }else if(item.currentSeason !== null){
            var date = new Date(item.currentSeason.startDate); 
            var years = new Date(year);
            if(years.getFullYear() === date.getFullYear() && id === ""){
                return(
                    <Link to="leagues/matches" key={item.id} onClick={() => changeLink(item.id)}>
                        <div>{item.name}</div>
                    </Link>
                )  
            }  
            else if(id === String(item.id) && year === ""){
                return(
                    <Link to="leagues/matches" key={item.id} onClick={() => changeLink(item.id)}>
                        <div>{item.name}</div>
                    </Link>
            )  
            }     
            
        }
    }



    return(
        <div>
            <div className="serches-form">
                <Year changedYear={changedYear} deletedId={deletedId}/>
                <Search changedId={changedId} deleteYear={deleteYear}/>
            </div>
            <div className="leags-list">
                {competitions ? 
                    competitions.map((item) => (
                        showLeags(item)
                    ))
                    : "Loading"
                    }
            </div>
       </div>
    );
};

export default Leagues;