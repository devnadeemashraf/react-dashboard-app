import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

import { convertCelciusToFahrenheit } from "../utils/temperature";

const TEMPERATURE_IN_CELCIUS = faker.number.int({ min: -20, max: 50 });

export default Factory.extend({
  id() {
    return faker.string.uuid();
  },
  name() {
    return `${faker.location.city()} Sensor`;
  },
  location() {
    return {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  },
  metrics() {
    return {
      temperature: {
        celcius: TEMPERATURE_IN_CELCIUS,
        farenheit: convertCelciusToFahrenheit(TEMPERATURE_IN_CELCIUS),
      },
      humidity: faker.number.int({ min: 0, max: 100 }),
      battery: faker.number.int({ min: 0, max: 100 }),
    };
  },
  lastUpdated() {
    return faker.date.recent().toISOString();
  },
});
