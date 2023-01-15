import React from "react";
import './GeneratorSettings.css'
import { randomizer } from "../../../Functions/randomizer";
import { GeneratorResult } from "../GeneratorResult/GeneratorResult";

export const GeneratorSettings = () => {
    const [state1, setState1] = React.useState(true);
    const [state2, setState2] = React.useState(true);
    const [state3, setState3] = React.useState(true);
    const [state4, setState4] = React.useState('');
    const [lengthPass, setLengthPass] = React.useState(12);
    const [symbolsArr, setSymbolsArr] = React.useState([]);
    const [generatedPass, setGeneratedPass] = React.useState([]);

    const generate = () => {
        if (lengthPass > 20) return;
        if (lengthPass < 6) return;

        let passwords = []

        for (let i = 0; i < 10; i++) {
            passwords.push(randomizer(symbolsArr, lengthPass))
        }

        setGeneratedPass(passwords);
    }

    React.useEffect(() => {        
        if (state1 === false) {
            setSymbolsArr(symbolsArr.filter(item => !/[0-9]/g.test(item)));
        }
        if (state1 === true) {
            setSymbolsArr((prev) => [...prev, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
        }
    }, [state1])

    React.useEffect(() => {
        if (state2 === false) {
            setSymbolsArr(symbolsArr.filter(item => !/[a-z]/g.test(item)));
        }
        if (state2 === true) {
            setSymbolsArr((prev) => [...prev, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
        }
    }, [state2])

    React.useEffect(() => {
        if (state3 === false) {
            setSymbolsArr(symbolsArr.filter(item => !/[A-Z]/g.test(item)));
        }
        if (state3 === true) {
            setSymbolsArr((prev) => [...prev, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
        }
    }, [state3])

    React.useEffect(() => {
        if (state4) {
            setSymbolsArr(prev => [...prev, '%', '*', ')', '(', '?', '@', '#', '$', '~']);
        }
        if (state4 === false ) {
            setSymbolsArr(symbolsArr.filter(item => !/[%*)(?@#$~]/g.test(item)));
        }
    }, [state4])



    return (
        <>
            <div className="genSetWrapper">
                <section>
                    <div className="checkBoxes">
                        <label>
                            <input type="checkbox" checked={state1} onChange={() => setState1(!state1)} /><span>Numbers</span>
                        </label>
                        <label>
                            <input type="checkbox" checked={state2} onChange={() => setState2(!state2)} /><span>Lower case letters</span>
                        </label>
                        <label>
                            <input type="checkbox" checked={state3} onChange={() => setState3(!state3)} /><span>Upper case letters</span>
                        </label>
                        <label>
                            <input type="checkbox" checked={state4} onChange={() => setState4(!state4)} /><span>Spec symbols</span>
                        </label>
                        <label>
                            <span>Length of password: </span>
                            <input className="inputLength" type='number' value={lengthPass} onChange={(e) => setLengthPass(e.target.value)} max='20' min='6' />
                            <span> symbols</span>
                        </label>
                    </div>
                    <button className="generateButton" type="button" onClick={generate}>Generate</button>
                </section>
            </div>
            {
                generatedPass.length > 0 && <GeneratorResult generatedPass={generatedPass} />
            }
        </>
    );
}