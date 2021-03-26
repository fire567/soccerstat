import React, { useState } from 'react';


const Period = ({ changedDate }) => {
    const [ firstDate, setFirstDate ] = useState("")
    const [ secondDate, setSecondDate ] = useState("")

    const sinceDate = (e) => {
        setFirstDate(e.target.value)
    }

    const endDate = (e) => {
        setSecondDate(e.target.value)
    }

    const submitChange = (e) => {
        e.preventDefault();
        changedDate(firstDate, secondDate)
    }

    return(
        <form onSubmit={e => submitChange(e)}>
            С: 
            <input type="date" id="start" name="trip-start"
                onChange={e => sinceDate(e)}
                value={firstDate}
                min="2018-01-01" max="2020-12-31">
            </input>
            По:
            <input type="date" id="start" name="trip-start"
                onChange={e => endDate(e)}
                value={secondDate}
                min="2018-01-01" max="2020-12-31">
            </input>
            <input type="submit" />
        </form>
    );
};

export default Period;