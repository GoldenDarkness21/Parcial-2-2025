export class Planta {
  id: number;
  commonName: string;
  scientificName: string;
  img: string;
  type: string;
  origin: string;
  floweringSeason: string;
  sunExposure: string;
  watering: string;

  constructor(id: number, commonName: string, scientificName: string, img: string, type: string, origin: string, floweringSeason: string, sunExposure: string, watering: string) {
    this.id = id;
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.img = img;
    this.type = type;
    this.origin = origin;
    this.floweringSeason = floweringSeason;
    this.sunExposure = sunExposure;
    this.watering = watering;
  }
}