import React, { useState } from "react";
import Year from "../Year/Year";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./Teams.css";

const Teams = ({ teams }) => {
    const [ year, setYear ] = useState("");
    const [ newId, setNewId ] = useState("")

    console.log(teams)

    const changedYear = (year) => {
        setYear(year)
    }

    const changedId = (id) => {
        setNewId(id)
    }

    const deleteYear = (year) => {
        setYear(year)
    }

    const deletedId = (id) => {
        setNewId(id)
    }

    const showTeam = (team) => {
        var newYear = new Date(year);
        //console.log(newYear.getFullYear())
            console.log(team.founded)
        if(year === "" && newId === ""){
            return(
                    <div>{team.name}</div>
            )
        }else if(newId === String(team.id)){
            
            return(
                    <div>{team.name}</div>
            );
        }else if(newYear.getFullYear() === team.founded){
            
            return(
                    <div>{team.name}</div>
            ); 
        }   
    }

    return(
        <div>
            <div className="search">
                <Year changedYear={changedYear} deletedId={deletedId}/>
                <Search changedId={changedId} deleteYear={deleteYear}/>
            </div>    
                    <div className="column">
                        {teams ? 
                            teams.map((team) => (
                                showTeam(team)
                            ))
                            : "Loading"
                        }
            </div>
       </div>
    );
};

export default Teams;