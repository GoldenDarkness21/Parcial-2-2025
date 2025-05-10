import { store } from '../flux/Store';
import '../components/GardenModifier';

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        store.unsubscribe(() => this.render());
    }

    render() {

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        
        <style>
        </style>

        <garden-modifier></garden-modifier>
        `;
    }
}

export default Root;