import React from "react";
import './Header.css'
import key from '../../img/keyW.png';

export const Header = () => {
    return (
        <header>
            <div className="myName">Alex(patr)</div>
            <div className="title">
                <p className="titleName">Password Generator</p>            
                <img className="key" alt="key" src={key}></img>
            </div>
            <div className="myLink"><a target='_blank' href='https://github.com/patr4519' alt='my github'>My GitHub</a></div>
        </header>
    );
}

