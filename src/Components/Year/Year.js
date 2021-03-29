import React, { useState } from "react";

const Year = ({ changedYear, deletedId}) => {
    const [currentYear, setCurrentYear] = useState("")

    const onYearChange = (e) => {
        setCurrentYear(e.target.value)
        
    }

    const YearSubmit = (e) => {
        e.preventDefault()
        changedYear(currentYear)
        deletedId("")
    }

    return(
        <form onSubmit={e => YearSubmit(e)}>
            Год:
            <input 
                type="number"
                value={currentYear}
                onChange={e => onYearChange(e)}
            ></input>
            <input type="submit" value="найти"></input>
        </form>
    )
}

export default Year;