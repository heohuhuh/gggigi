const age = 20;
let group = ""
if(age > 20){
    group = "senior"
}else{
    group = "junior"
}

//조건 ? 참일경우 : 아닐경우;

age > 20 ? group = "senior" : group = "junior";
console.log(group)

const animal = "liondasasd";

switch(animal){
    case 'lion':
        console.log("big");
        break;
    case 'tiger':
        console.log("big");
        break;
    default:
        console.log("not animal")
        break;
}

/* function add(a=0,b=0){
    return a + b;
}
console.log(add(5)); */

const sum_1 = function(a,b){
    return a + b;
}

console.log(sum_1(5,6))

const sum_2 = (a,b) => {
    return a + b
}

console.log(sum_2(5,6))

const sum_3 = (a,b) => a + b

console.log(sum_3(5,6))