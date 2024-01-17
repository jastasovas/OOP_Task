import { Animal } from "./animal";

class Birds extends Animal {
  constructor(name, age, gender, colour, wings) {
    super(name, age, gender, colour);
    this.wings = wings;
  }
}
export { Birds };
