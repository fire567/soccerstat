import React from "react";
import Section from "./Section/Section";
import "./Header.css";

const Header = ({ changedLink }) => {

<<<<<<< HEAD
    const changeLink = () => {
        changedLink('competitions')
        localStorage.setItem('data', 'competitions')
=======
    const changeLink = (request) => {
        changedLink(request)
        localStorage.setItem('Link', request);
>>>>>>> 93b7febe3c443141bcac7de6f0fcc6863a0b419a
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