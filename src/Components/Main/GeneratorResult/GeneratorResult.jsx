import React from "react";
import './GeneratorResult.css'

export const GeneratorResult = ({ generatedPass }) => {
    return (
        <div className="generatorResult">
            <p>Your generated results:</p>
            <ul>
                {
                    generatedPass.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}