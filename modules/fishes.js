import { Animal } from "./animal";

class Fishes extends Animal {
  constructor(name, age, gender, colour, predation) {
    super(name, age, gender, colour);
    this.predation = predation;
  }
}

export { Fishes };
