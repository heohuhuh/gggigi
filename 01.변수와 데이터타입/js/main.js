//var, let = 바꿀 수 있음, const = 바꿀 수 없음
// String, Number, boolean, null, undifined

const name ="Heo Huh"
const age = 35;
const weight = 86.3;
const isMale = true;
const money = null;
const girlFriend = undefined;
const hobbies = ["game", "programming", "tv", "youtube"]
const homework = "eng+kor+math,history"

console.log(name.substring(4, 7).toUpperCase())
console.log(name.split("o"))
console.log(hobbies)
console.log(hobbies.join().split(","))
console.log(homework.split("+"))
console.log(homework.split(",")[0])

console.log("저는 " + name + "이고 나이는 " + age + "입니다.")
console.log(`저는 ${name}이고 나이는 ${age}입니다.`)