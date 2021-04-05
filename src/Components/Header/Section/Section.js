import React from "react";
import { Link } from "react-router-dom";
import "../Header.css"

const Section = ({ changeLink }) => {
    const sections = [
        {name: "Главная", request: "/", link: "/"},
        {name: "Лиги", request: "competitions", link: "/leagues"},
        {name: "Команды", request: "teams", link: "./teams"}
    ]

    const changeRequest = (request) => {
        changeLink(request)
    }

    return(
        sections.map((section) => (
            <Link to={section.link} onClick={() => changeRequest(section.request)} key={section.name}>
                <li className="ui red header">{section.name}</li>
            </Link>
        ))
    );
};

export default Section;