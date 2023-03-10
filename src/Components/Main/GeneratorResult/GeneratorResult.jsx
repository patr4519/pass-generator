import React from "react";
import './GeneratorResult.css';
import copySVG from '../../../img/copySVG.svg';

export const GeneratorResult = ({ generatedPass }) => {
    return (
        <div className="generatorResult">
            <p>Your generated results:</p>
            <ul>
                {
                    generatedPass.map((item, index) => (
                        <li key={index}>{item}
                            <img src={copySVG} alt='copy' className='copy'></img>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}