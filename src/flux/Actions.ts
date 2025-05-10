import { AppDispatcher } from './Dispatcher';
import { Planta } from '../services/planta';

export class Action {
  static ADD_PLANT_TO_GARDEN = 'ADD_PLANT_TO_GARDEN';
  static REMOVE_PLANT_FROM_GARDEN = 'REMOVE_PLANT_FROM_GARDEN';
  static UPDATE_GARDEN_NAME = 'UPDATE_GARDEN_NAME';

  static addPlantToGarden(plant: Planta) {
    AppDispatcher.dispatch({
      type: Action.ADD_PLANT_TO_GARDEN,
      payload: plant,
    });
  }

  static removePlantFromGarden(plant: Planta) {
    AppDispatcher.dispatch({
      type: Action.REMOVE_PLANT_FROM_GARDEN,
      payload: plant,
    });
  }

  static updateGardenName(name: string) {
    AppDispatcher.dispatch({
      type: Action.UPDATE_GARDEN_NAME,
      payload: name,
    });
  }
}

