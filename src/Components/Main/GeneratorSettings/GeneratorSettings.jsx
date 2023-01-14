import React from "react";
import './GeneratorSettings.css'
import { randomizer } from "../../../Functions/randomizer";

export const GeneratorSettings = () => {
    const [state1, setState1] = React.useState(true);
    const [state2, setState2] = React.useState(true);
    const [state3, setState3] = React.useState(true);
    const [state4, setState4] = React.useState('');
    const [lengthPass, setLengthPass] = React.useState(8);
    const [symbolsArr, setSymbolsArr] = React.useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    const [generatedPass, setGeneratedPass] = React.useState([]);

    const generate = () => {
        if (lengthPass > 20) return;

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
    }, [state1])

    React.useEffect(() => {
        if (state2 === false) {
            setSymbolsArr(symbolsArr.filter(item => !/[a-z]/g.test(item)));
        }
    }, [state2])

    React.useEffect(() => {
        if (state3 === false) {
            setSymbolsArr(symbolsArr.filter(item => !/[A-Z]/g.test(item)));
        }
    }, [state3])

    React.useEffect(() => {
        if (state4) {
            setSymbolsArr(prev => [...prev, '%', '*', ')', '(', '?', '@', '#', '$', '~']);
        }
    }, [state4])

    

    return (
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
                        <span>Length of password</span>
                        <input type='number' value={lengthPass} onChange={(e) => setLengthPass(e.target.value)} max='20' min='8' />
                        <span>symbols</span>
                    </label>
                </div>
                <button type="button" onClick={generate}>Generate</button>
            </section>
        </div>
    );
}