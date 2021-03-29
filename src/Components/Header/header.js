import React from "react";
import { Link } from "react-router-dom";

const Header = ({ changedLink }) => {

    const changeLink = () => {
        changedLink("competitions")
    }

    return(
        <div className="ui center aligned block Block header">
            <Link to="/leagues" onClick={changeLink}>
                <li className="ui red header">Leagues</li>
            </Link>
        </div>
    );
};

export default Header;