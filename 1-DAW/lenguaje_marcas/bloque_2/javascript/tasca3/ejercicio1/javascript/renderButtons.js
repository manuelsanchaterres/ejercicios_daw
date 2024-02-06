import { buttonsEvents } from "./buttonsEvents.js";

let buttonsContainer = document.querySelector(".buttons");

export let renderButtons = () => {
    let buttonElement;
    buttonsEvents.forEach(button => {
        buttonsContainer.innerHTML += `<button id=${button.text}>${button.text}</button>\n`;
        buttonElement = document.getElementById(`${button.text}`);

        buttonElement.addEventListener(button.eventType, button.function);

    });

}