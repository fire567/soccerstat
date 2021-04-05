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
                <Link to="/teams/team" key={team.id}>
                    <div>{team.name}</div>
                </Link>
            )
        }else if(newId === String(team.id)){
            
            return(
                <Link to="/teams/team" key={team.id}>
                    <div>{team.name}</div>
                </Link>
            );
        }else if(newYear.getFullYear() === team.founded){
            
            return(
                <Link to="/teams/team" key={team.id}>
                    <div>{team.name}</div>
                </Link>
            ); 
        }   
    }

    return(
        <div>
           <Year changedYear={changedYear} deletedId={deletedId}/>
           <Search changedId={changedId} deleteYear={deleteYear}/>
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