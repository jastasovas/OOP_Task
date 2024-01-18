class Animal {
  constructor(name, age, gender, colour) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.colour = colour;
  }
}

class Cats extends Animal {
  constructor(name, age, gender, colour, fur) {
    super(name, age, gender, colour);
    this.fur = fur;
  }
}

class Fishes extends Animal {
  constructor(name, age, gender, colour, predation) {
    super(name, age, gender, colour);
    this.predation = predation;
  }
}

class Birds extends Animal {
  constructor(name, age, gender, colour, wings) {
    super(name, age, gender, colour);
    this.wings = wings;
  }
}

document.getElementById("cato").addEventListener("click", () => {
  catInputs();
});

document.getElementById("fishy").addEventListener("click", () => {
  fishInputs();
});

document.getElementById("birdy").addEventListener("click", () => {
  birdInputs();
});

function createInputs(animalType, elements) {
  const form = document.createElement("form");
  form.className = animalType;

  elements.forEach((element) => {
    const label = document.createElement("label");
    label.innerText = element.label;
    const input = document.createElement("input");
    input.type = element.type;
    input.name = element.name;

    form.append(label, input);
  });
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Submit";
  form.append(submitBtn);
  return form;
}

function catInputs() {
  const animalContainer = document.getElementById("animalContainer");
  animalContainer.innerHTML = ""; // cia neveikia su remove()

  const catInputs = createInputs("catInput", [
    { label: "Name", type: "text", name: "name" },
    { label: "Age", type: "number", name: "age" },
    { label: "Gender", type: "text", name: "gender" },
    { label: "Colour", type: "text", name: "colour" },
    { label: "Fur", type: "text", name: "fur" },
  ]);

  catInputs.addEventListener("submit", (event) => {
    event.preventDefault();
    const catInfo = new FormData(catInputs);
    const cat = new Cats(
      catInfo.get("name"),
      catInfo.get("age"),
      catInfo.get("gender"),
      catInfo.get("colour"),
      catInfo.get("fur")
    );
    const inputsContainer = document.getElementById("savedInputs");
    const inputsTable = document.createElement("div");
    const catName = document.createElement("p");
    catName.innerText = "Name: " + cat.name;
    const catAge = document.createElement("p");
    catAge.innerText = "Age: " + cat.age;
    const catGender = document.createElement("p");
    catGender.innerText = "Gender: " + cat.gender;
    const catColour = document.createElement("p");
    catColour.innerText = "Colour: " + cat.colour;
    const catFur = document.createElement("p");
    catFur.innerText = "Fur: " + cat.fur;
    document.body.append(inputsTable);
    inputsTable.append(catName, catAge, catGender, catColour, catFur);
    inputsContainer.append(inputsTable);
    console.log(cat);
    catInputs.reset();
  });
  animalContainer.append(catInputs);
}

function fishInputs() {
  const animalContainer = document.getElementById("animalContainer");
  animalContainer.innerHTML = ""; // cia neveikia su remove()

  const fishInputs = createInputs("fishInput", [
    { label: "Name", type: "text", name: "name" },
    { label: "Age", type: "number", name: "age" },
    { label: "Gender", type: "text", name: "gender" },
    { label: "Colour", type: "text", name: "colour" },
    { label: "Predation", type: "text", name: "predation" },
  ]);

  fishInputs.addEventListener("submit", (event) => {
    event.preventDefault();
    const fishInfo = new FormData(fishInputs);
    const fish = new Fishes(
      fishInfo.get("name"),
      fishInfo.get("age"),
      fishInfo.get("gender"),
      fishInfo.get("colour"),
      fishInfo.get("predation")
    );
    const inputsContainer = document.getElementById("savedInputs");
    const inputsTable = document.createElement("div");
    const fishName = document.createElement("p");
    fishName.innerText = "Name: " + fish.name;
    const fishAge = document.createElement("p");
    fishAge.innerText = "Age: " + fish.age;
    const fishGender = document.createElement("p");
    fishGender.innerText = "Gender: " + fish.gender;
    const fishColour = document.createElement("p");
    fishColour.innerText = "Colour: " + fish.colour;
    const fishPredation = document.createElement("p");
    fishPredation.innerText = "Predation: " + fish.predation;
    document.body.append(inputsTable);
    inputsTable.append(
      fishName,
      fishAge,
      fishGender,
      fishColour,
      fishPredation
    );
    inputsContainer.append(inputsTable);
    console.log(fish);
    fishInputs.reset();
  });
  animalContainer.append(fishInputs);
}

function birdInputs() {
  const animalContainer = document.getElementById("animalContainer");
  animalContainer.innerHTML = ""; // cia neveikia su remove()

  const birdInputs = createInputs("birdInput", [
    { label: "Name", type: "text", name: "name" },
    { label: "Age", type: "number", name: "age" },
    { label: "Gender", type: "text", name: "gender" },
    { label: "Colour", type: "text", name: "colour" },
    { label: "Wings", type: "text", name: "wings" },
  ]);

  birdInputs.addEventListener("submit", (event) => {
    event.preventDefault();
    const birdInfo = new FormData(birdInputs);
    const bird = new Birds(
      birdInfo.get("name"),
      birdInfo.get("age"),
      birdInfo.get("gender"),
      birdInfo.get("colour"),
      birdInfo.get("wings")
    );
    const inputsContainer = document.getElementById("savedInputs");
    const inputsTable = document.createElement("div");
    const birdName = document.createElement("p");
    birdName.innerText = "Name: " + bird.name;
    const birdAge = document.createElement("p");
    birdAge.innerText = "Age: " + bird.age;
    const birdGender = document.createElement("p");
    birdGender.innerText = "Gender: " + bird.gender;
    const birdColour = document.createElement("p");
    birdColour.innerText = "Colour: " + bird.colour;
    const birdWings = document.createElement("p");
    birdWings.innerText = "Wings: " + bird.wings;
    document.body.append(inputsTable);
    inputsTable.append(birdName, birdAge, birdGender, birdColour, birdWings);
    inputsContainer.append(inputsTable);
    console.log(bird);
    birdInputs.reset();
  });
  animalContainer.append(birdInputs);
}
