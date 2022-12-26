const container = document.querySelector('.image-container')
const startButton = document.querySelector('.start-button')
const gameText = document.querySelector('.game-text')
const playTime = document.querySelector('.play-time')
const tiles = document.querySelectorAll(".image-container > li")
const hintButton = document.querySelector(".clear-button")

let isPlaying = false;
let timeInterval = null;
let time = 0;

const draged = {
    el : null,
    class : null,
    index : null
}

hintButton.addEventListener("click",()=>{
    [...container.children].forEach(child=>{
        child.innerText = child.getAttribute("data-type")
    })
})
startButton.addEventListener("click",()=>{
    setGame();
})
function setGame(){
    time = 0;
    gameText.style.display = "none"
    timeInterval = setInterval(()=>{
        time++;
        playTime.innerText = time
    },1000)
    const gameTiles = shuffle([...tiles])
    container.innerHTML = ""
    gameTiles.forEach(tile=>{
        container.appendChild(tile)
    })
    console.log(gameTiles)
}

const testArray = [0,1,2,3,4,5,6,7,8,9]
shuffle(testArray)
function shuffle(array){
    let index = array.length -1;
    while(index >0){
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index],array[randomIndex]] = [array[randomIndex],array[index]]
        index--;
    }
    return array;
}

function checkStatus(){
    const currentList = [...container.children]
    const unMatched = currentList.filter((list,index)=>{
        return Number(list.getAttribute("data-type")) !== index
    })
    if(unMatched.length === 0){
        isPlaying = false;
        clearInterval(timeInterval)
        gameText.style.display = "block"
    }
    /* currentList.forEach((list,index)=>{
        console.log(list,index)
    }) */
    console.log(unMatched)
}

container.addEventListener('dragstart',e =>{
    const obj = e.target;
    draged.el = obj;
    draged.class = obj.className;
    draged.index = [...obj.parentNode.children].indexOf(obj);
    //console.log(e)
})
container.addEventListener('dragover', e =>{
    e.preventDefault()
    //console.log(e)
})
container.addEventListener('drop', e =>{
    console.log(draged.el.nextSibling)
    const obj = e.target;
    let originPlace;
    let isLast = false;
    if(draged.el.nextSibling){
        originPlace = draged.el.nextSibling;
    }else{
        originPlace = draged.el.previousSibling;
        isLast = true
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj);
    draged.index > droppedIndex ? obj.before(draged.el) : obj.after(draged.el) //?가 의미가 있나?
    isLast ? originPlace.after(obj) : originPlace.before(obj)
    checkStatus()
})