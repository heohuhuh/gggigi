// Array
const users = ["june", "mike", "chulsoo", "sumin", 10, 22];

users.push("soo")
users.unshift("근호")

console.log(users[users.length-1])
console.log(users)

users.pop()
users.pop()
users.pop()
console.log(users)
users[users.indexOf("mike")] = "michael"
console.log(users)

console.log(Array.isArray(users))
console.log(Array.isArray("hello"))

users.splice(1,2)
console.log(users)
// ... spread operator
console.log(...users)
