/* const output = document.getElementById("output")
const wrapper = document.getElementsByClassName("wrapper") */
const output = document.querySelector("#button");
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item")
const target = document.querySelector(".target")
const title = document.querySelector("h1")
const userID = document.querySelector("#userID")
const point = document.querySelector(".point")

target.style.color = "red"
target.style.fontSize = "36px"

title.addEventListener("click", function(){
    title.style.color = "red" //this.style.color = "red" 둘이 같음
})
userID.addEventListener("input",function(e){
    target.innerText = this.value
})
button.addEventListener("click",()=>{
    target.style.width = "50px"
    target.style.height = "50px"
    target.style.backgroundColor = userID.value;
    target.style.borderRadius = "50%"
})
items.forEach(item => {
    item.addEventListener("click", ()=>{
        point.innerHTML = item.innerText
    })
})
console.log(items)