import React from "react";
import './Main.css';
import { GeneratorSettings } from "./GeneratorSettings/GeneratorSettings";

// make handling clicking only generator result (not all document)

document.addEventListener('click', (event) => {
  const elem = event.target;
  if (elem.classList.contains('copy')) {
    navigator.clipboard.writeText(elem.closest('li').firstChild.textContent);
  }
})

export const Main = () => {
  return (
    <main>
      <GeneratorSettings />
    </main>
  );
}