import React, { useState } from "react";


const Search = ({ changedId, deleteYear }) => {
    const [ id, setId ] = useState("")

    const changeId = (e) => {
        setId(e.target.value)
    }

    const onSubmitChange = (e) => {
        e.preventDefault()
        changedId(id)
        deleteYear("")
    }

    return(
        <form onSubmit={e => onSubmitChange(e)}>
             Поиск по id:
             <input 
                type="text"
                onChange={e => changeId(e)}
                value={id}
            >
             </input>
             <input type="submit" value="поиск" />
        </form>
    );
};

export default Search;