import React from "react";
import './Main.css';
import { GeneratorSettings } from "./GeneratorSettings/GeneratorSettings";
import { GeneratorResult } from "./GeneratorResult/GeneratorResult";

export const Main = () => {
    return (
        <main>
            <GeneratorSettings />
            <GeneratorResult />
        </main>
    );
}