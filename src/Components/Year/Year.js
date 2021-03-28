import React, { useState } from "react";

const Year = ({ changedYear }) => {
    const [currentYear, setCurrentYear] = useState(0)

    const onYearChange = (e) => {
        setCurrentYear(e.target.value)
        
    }

    const YearSubmit = (e) => {
        e.preventDefault()
        changedYear(currentYear)
    }

    return(
        <form onSubmit={e => YearSubmit(e)}>
            <input 
                type="text"
                value={currentYear}
                onChange={e => onYearChange(e)}
            ></input>
            <input type="submit"></input>
        </form>
    )
}

export default Year;