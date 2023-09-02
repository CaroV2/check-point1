class Character extends HTMLElement {

    static get observedAttributes() {
        return ["name", "species", "gender", "house", "yearOfBirth"]
    }

    attributeChangedCallback(propValue, _, newValue) {
        switch (propValue) {
            case "name":
                this.characterName = newValue
                break;
            
            case "species":
                this.characterSpecies = newValue
                break;
            
            case "gender":
                this.characterGender = newValue
                break;

            case "house":
                this.characterHouse = newValue
                break;
            
            case "yearOfBirth":
                this.characterYearOfBirth = newValue
                break;
        
            default:
                break;
        }
    }

    constructor() {
        super();
        this.attachShadow ({mode:"open"})
    }
    
    connectedCallback() {
        this.render()
        /*if(this.selected === "")
            alternate_names;
        */
    }
    
    render() {
        this.shadowRoot.innerHTML = `
        <section>
            <h1>${this.characterName}</h1>
            <p>Especie: ${this.characterSpecies}</p>
            <p>Género: ${this.characterGender} </p>
            <p>Casa: ${this.characterHouse} </p>
            <p>Año: ${this.characterYearOfBirth} </p>
        </section>`;
    }
}
 
customElements.define("app-character", Character)
export default Character