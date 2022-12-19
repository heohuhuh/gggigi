const animals = [
    { name:"monkey", size: "medium", isAggressive: true, weight: 20},
    { name:"lion", size: "big", isAggressive: true, weight: 100},
    { name:"tiger", size: "big", isAggressive: true, weight: 200},
    { name:"hippo", size: "big", isAggressive: true, weight: 1000},
    { name:"cat", size: "small", isAggressive: true, weight: 10},
]

//console.log(animals)

/* //old
for(let i=0; i<animals.length; i++){
    console.log(animals[i])
}


for(let animal of animals){//animal은 그냥 i같은 변수
   console.log(animal.name)
}

let i;
while(i<10){
    i++
} */

// forEach, map, reduce, filter

/* animals.forEach(function(animal){
    console.log(animal)
})
animals.forEach(function(animal, index){
    console.log(animal, index)
}) */

/* //map 재정의
const mappedAnimal_1 = animals.map(function(animal){
    return animal
})
console.log(mappedAnimal_1)

const mappedAnimal_2 = animals.map(function(animal){
    return animal.name
})
console.log(mappedAnimal_2)

const mappedAnimal_3 = animals.map(function(animal){
    return { name: animal.name, size: animal.size}
})
console.log(mappedAnimal_3)

const mappedAnimal_4 = animals.map(function(animal){
    return `${animal.name} is ${animal.size}`
})
console.log(mappedAnimal_4)

const mappedAnimal_5 = animals.map((animal)=>{
    return `${animal.name} is ${animal.size}`
})
console.log(mappedAnimal_5)

const mappedAnimal_5_1 = animals.map(animal=> `${animal.name} is ${animal.size}`)
console.log(mappedAnimal_5_1)

const mappedAnimal_6 = animals.forEach(function(animal){
    return `${animal.name} is ${animal.size}`
})
console.log(mappedAnimal_6) */

/* //filter 필터 if랑 비슷
const filteredAnimal_1 = animals.filter(animal=>{
    return animal.size =='big'
})
console.log(filteredAnimal_1)

const filteredAnimal_2 = animals.filter(animal=>{
    return animal.weight >= 100 && animal.size == 'big';
})
console.log(filteredAnimal_2) */

//reduce 합,변형 출력 등
const reducedAnimal_1 = animals.reduce((acc,cur)=>{
    return acc + cur.weight
},0)
console.log(reducedAnimal_1)
const reducedAnimal_2 = animals.reduce((acc,cur)=>{
    return acc + cur.size
},0)
console.log(reducedAnimal_2)
