// Dit is opdracht 5. referecne types: obects en Arrays
// Deel 1: Objecten
let person = {
    name: "Leonie",
    age: 47
};
console.log(person);
console.log(person.name);
console.log(person.age);
person.name = "Leo"
console.log(person.name)
person ["name"] = "Leonidas"
console.log(person["name"]);
person.age = 15;
console.log(person.age);
person["age"]=32;
console.log (person ["age"]);
let evaluations = [7, 10, 9];
console.log(evaluations);

// Deel 2 oefenen met Arrays
let kleuren = [ "groen", "blauw", "rood"];
console.log(kleuren);
console.log(kleuren.length);
console.log(kleuren[0]);
/* To get the last item without knowing beforehand how many items it contains, you can use the length property to determine it, 
and since the array count starts at 0, you can pick the last item by referencing 
the <array>. length -console.log(kleuren.lastIndexOf);*/ 
// Dus in dit geval: length is reeds bepaald, die is 3. dus om laatste element te bepalen, [2] gebruiken.
console.log(kleuren[2])
console.log(kleuren);
kleuren.push("geel")
kleuren.push(5);
console.log(kleuren);
kleuren.push({greeting: "hi ik ben een object"})
console.log(kleuren.length);
console.log(kleuren[5]);

// Deel 3
const catBreeds = [{
    name: "Abyssian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
},
    {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
},
    {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
}]
console.log("naam kat 3:", catBreeds[2].name);
console.log("energy level kat 1:", catBreeds[0].energy_level);
console.log("eerste temperament kat 2:", catBreeds[1].temperament[0]);
console.log("laatste temperament kat 3:", catBreeds[2].temperament[4])
console.log("favoriete voedsel kat 3:", catBreeds[2].food.favourite_food);
