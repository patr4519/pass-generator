import React from "react";
import './GeneratorResult.css';
import copyIMG from '../../../img/copyButton.png';

export const GeneratorResult = ({ generatedPass }) => {
    return (
        <div className="generatorResult">
            <p>Your generated results:</p>
            <ul>
                {
                    generatedPass.map((item, index) => (
                            <li key={index}>{item}
                                <img src={copyIMG} alt='copy' className='copy'></img>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}