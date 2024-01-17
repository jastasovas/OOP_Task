import { Animal } from "./animal";

class Cats extends Animal {
  constructor(name, age, gender, colour, fur) {
    super(name, age, gender, colour);
    this.fur = fur;
  }
}

export { Cats };

// function catInputs() {
//   const animalContainer = document.getElementById("animalContainer");
//   animalContainer.innerHTML = "";

//   const catInputs = createInputs("dogInput", [
//     { label: "Name", type: "text" },
//     { label: "Age", type: "number" },
//     { label: "Gender", type: "text" },
//     { label: "Colour", type: "text" },
//     { label: "Fur", type: "text" },
//   ]);

//   catInputs.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const catInfo = new CatInfo(catInputs);
//     const cat = new Cats(
//       catInfo.get("name"),
//       catInfo.get("age"),
//       catInfo.get("gender"),
//       catInfo.get("colour"),
//       catInfo.get("fur")
//     );
//     console.log(cat);
//   });
//   animalContainer.append(catInputs);
// }
