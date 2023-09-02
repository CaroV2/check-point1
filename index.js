import Character from "./src/components/character/character.js";
import data from "./data.js"

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow ({mode:"open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
    console.log(data)
    const characters = data.map(
        (character) =>
        `<app-character name="${character.name}"
        species="${character.species}" 
        gender="${character.gender}" 
        house="${character.house}" 
        yearOfBirth="${character.yearOfBirth}">
        </app-character>`)

        const charactersJoined = characters.join("");
        this.shadowRoot.innerHTML = `${charactersJoined}`;
    }
}

customElements.define("app-container", App)