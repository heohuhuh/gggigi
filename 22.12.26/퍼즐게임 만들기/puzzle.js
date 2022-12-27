const container = document.querySelector('.image-container')
const startButton = document.querySelector('.start-button')
const gameText = document.querySelector('.game-text')
const loseText = document.querySelector('.lose-text')
const playTime = document.querySelector('.play-time')
const tiles = document.querySelectorAll(".image-container > li")
const hintButton = document.querySelector(".hint-button")
const clearButton = document.querySelector(".clear-button")

let hintCheck = false;
let isPlaying = false;
let timeInterval = null;
let time = 0;

const draged = {
    el : null,
    class : null,
    index : null
}

clearButton.addEventListener("click",()=>{
    console.log(container.children)
    const checkBox = [...container.children]
    console.log(checkBox)
    console.log()
        let unMatched =null;
        checkBox.forEach(child=>{
            draged.el = child;
            draged.class = child.className
            draged.index = checkBox.indexOf(child)
                for(let i=0; i<checkBox.length; i++){
                    
                    if(child.dataset.type == i){
                        console.log('hello')
                        checkBox[i].after(child);
                        checkBox[draged.index].after(checkBox[i]);
                    }
                    
                }
                child.innerText = child.getAttribute("data-type")
        })
        unMatched = checkBox.filter((list,index)=>{
            return list.getAttribute("data-type") != index
        })
        if(unMatched.length === 0){
            isPlaying = false;
            clearInterval(timeInterval)
            gameText.style.display = "block"
        }
        console.log(unMatched.length)
})
hintButton.addEventListener("click",()=>{

    hintCheck == true ? hintCheck = false : hintCheck = true;
    if(hintCheck == true){
        [...container.children].forEach(child=>{
            child.innerText = child.getAttribute("data-type")
        })
    }else{
        [...container.children].forEach(child=>{
            child.innerText = ""
        })
    }
})

startButton.addEventListener("click",()=>{
    setGame();
})
function setGame(){
    isPlaying = true;
    time = 5;
    playTime.innerText = time
    loseText.style.display = "none"
    gameText.style.display = "none"
    timeInterval = setInterval(()=>{
        if(time==0){
            clearInterval(timeInterval)
            loseGame()
            isPlaying = false;
        }else{
            time--;
            playTime.innerText = time
        }
    },1000)
    const gameTiles = shuffle([...tiles])
    container.innerHTML = ""
    gameTiles.forEach(tile=>{
        container.appendChild(tile)
    })
}
function loseGame(){
    loseText.style.display = "block"
}
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
        isPlaying = false;
    }
    tiles.forEach(tile =>{
        tile.draggable = false
    })
    /* currentList.forEach((list,index)=>{
        console.log(list,index)
    }) */
    console.log(unMatched)
}
container.addEventListener('dragstart',e =>{
    if(isPlaying ==true){
        const obj = e.target;
        draged.el = obj;
        draged.class = obj.className;
        draged.index = [...obj.parentNode.children].indexOf(obj);
        //console.log(e)
    }
})
container.addEventListener('dragover', e =>{
    if(isPlaying ==true){
        e.preventDefault()
        //console.log(e)
    }
})
container.addEventListener('drop', e =>{
    if(isPlaying ==true){
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
    }
})