import { html, LitElement, property } from 'lit-element';
import { plantas, store } from '../flux/Store';

class GardenModifier extends LitElement {
  plants: plantas[] = [];
  gardenName: string = '';

  static properties = {
    plants: { type: Array },
    gardenName: { type: String }
  };
}

  constructor() {
    super();
    this.plants = store.getState().planta;
  }

  render() {
    return html`
      <h1>Modificar Jardín</h1>
      <input type="text" @input=${this.handleGardenNameChange} value=${this.gardenName} placeholder="Nombre del jardín">
      <ul>
        ${this.plants.map((Planta) => html`
          <li>
            <img src=${Planta.img} alt=${Planta.commonName}>
            <span>${Planta.commonName} (${Planta.scientificName})</span>
            <button @click=${this.handleAddPlant(Planta)}>Añadir</button>
            <button @click=${this.handleRemovePlant(Planta)}>Eliminar</button>
          </li>
        `)}
      </ul>
    `;
  }

export default GardenModifier