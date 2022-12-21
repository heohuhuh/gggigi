//Object key,value

const animal = {
    name : "monkey",
    weight :10,
    food: ["banana","grape","nuts"],
    location: {
        country : "Kongo",
        home:"forest",
        isAfrica: true
    }
}

console.log(animal)
console.log(animal["name"])
console.log(animal.food[0])
console.log(animal.location.country)

//JSON
const animalJSON = JSON.stringify(animal)
console.log(animalJSON)
console.log(JSON.parse(animalJSON))