const animal = [
  "elephant",
  "dragon",
  "dragonfly",
  "monkey",
  "kingdom",
  "lizard",
  "platinum"
];

//track animal sightings;
const animalFunc = (...rest) => {
  rest.forEach((animal) => {
    console.log(`I've seen a ${animal}!`);
  });
};

animalFunc(...animal);

//Merge Habitat Areas;
const habitat1 = [
  "amazon jungle",
  "africa jungle",
  "Wetland",
  "Tundra",
  "Savanna"
];
const habitat2 = ["Desert", "Coral reef", "Grassland", "Coast"];

const mergedHabitat = [...habitat1, ...habitat2];

console.log(mergedHabitat);

// Update Conservation Status;

const animalStatus = {
  elephant: "Endangered",
  dragon: "Critically Endangered",
  dragonfly: "Vulnerable",
  monkey: "Critically Endangered",
  kingdom: "Vulnerable",
  lizard: "Critically Endangered",
  platinum: "Critically Endangered"
};

console.log(animalStatus);

const updatedAnimalStatus = {
  ...animalStatus,
  family: "Mammals",
  population: 10000,
  adapability: "different habitat zone"
};

console.log(updatedAnimalStatus);

//Catalog Genetic Diversity;
const animalCatalog = {
  species: "Loxodonta africana",
  genus: "Loxodonta",
  family: "Mammalia",
  habitat: "Africa",
  diet: "Carnivore"
  //... other animals
};

const copyAnimalCatalog = {
  ...animalCatalog,
  genetics: "DNA dragons"
};

console.log(animalCatalog);
console.log(copyAnimalCatalog);

/*
 * Observations:
 * Modifying a property in the copied object does not affect the original object because the spread operator creates a shallow copy of the object.
 * This means top-level properties are duplicated and assigned new memory space.
 */

//analyze Ecosystem Health;

const ecosystemHealth = {
  waterQuality: "Good",
  animals: {
    total: 1000,
    endangered: 500,
    vulnerable: 500
  },
  habitats: {
    total: 100,
    suitable: 50,
    unsuitable: 50
  },
  species: {
    total: 100,
    threatened: 50,
    vulnerable: 50
  }
};

const updatedEcosystemHealth = {
  ...ecosystemHealth,
  waterQuality: "Moderate",
  species: {
    total: 150,
    threatened: 25,
    vulnerable: 125
  },
  footSupply: {
    total: 1000,
    available: 800,
    unreliable: 200
  }
};

console.log(ecosystemHealth);
console.log(updatedEcosystemHealth);
/*   Observations:
Modifying a nested property in a shallow copy also affects the original object.
 This occurs because the spread operator performs a shallow copy, meaning that nested objects are not duplicated but rather reference the same object in memory.
  */
