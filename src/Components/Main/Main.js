import React from "react";
import "./Main.css";


const Main = () => {
    return(
        <div className="text-form">
            <div className="text">
                Здравствуй, это моё приложение по ведению футбольной статистике. 
                Предоставленный API позволил мне взять только лиги с id: 2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021.
                Проверки производятся только по ним.
            </div>
        </div>
    );
};


export default Main;