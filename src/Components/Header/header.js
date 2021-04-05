import React from "react";
import Section from "./Section/Section";
import "./Header.css";

const Header = ({ changedLink }) => {

    const changeLink = (request) => {
        changedLink(request)
        localStorage.setItem('Link', request);
    }

    return(
        <div className="ui center aligned block Block header">
            <div className="buttons">
                <Section changeLink={changeLink}/>
            </div>
        </div>
    );
};

export default Header;