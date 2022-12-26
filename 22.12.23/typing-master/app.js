
//변수
const SETTING_TIME = 5;
let words = ["Banana","apple","monkey","car"];
let time;
let isReady = false;
let isPlaying = false;
let score = 0;
let lastIndex = 0;
let timeInterval = 0;
let isStarting =false;

const url ="https://random-word-api.herokuapp.com/word?number=100";
const wordDispaly= document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");


//functions
runToast = (text) =>{
    const option = {
        text : text,
        duration : 3000,
        newWindow : true,
        gravity : 'top',
        position: "left",
        background : "linear-gradient(#00b09b,#96c3d)"
    }
    Toastify(option).showToast()
}
const getWrods= ()=>{
    axios.get(url).then(res=>{
        words = res.data//.filter(res=>{ return res.lenths<8;})//   = .filter(word=>word.lenths<8)
        button.innerText = '게임 시작하기'
        button.classList.remove('loading')
        button.classList.remove('stop')
        isReady =true;
    } ).catch(err=>console.log(err))
}

const checkMatch = () => {
    if(isStarting === false){
        wordDispaly.classList.remove('ready');
        time = SETTING_TIME;   
        button.classList.add('stop')
        button.innerText = '일시정지'
        timeDisplay.innerText = time;        
        score = 0;
        scoreDisplay.innerText = score;
        clearInterval(timeInterval)
        timeInterval = setInterval(countDown,1000)
        const randomIndex = numberCheck(words);
        wordDispaly.innerText = words[randomIndex];
        isStarting = true;
    }
    if(isPlaying === false) return;
    if(wordInput.value.toLowerCase() === wordDispaly.innerText.toLowerCase()){
        score++;
        timeDisplay.innerText = SETTING_TIME;
        time = SETTING_TIME;
        clearInterval(timeInterval)
        timeInterval = setInterval(countDown,1000)
        runToast(wordDispaly.innerText)
        randomIndex = numberCheck(words);
        while(1){
            if(words[randomIndex] === "" ){
                randomIndex = numberCheck(words);
            }else{
                wordDispaly.innerText = words[randomIndex];
                words[randomIndex] ="";
                break;
            }
        }
    }
    wordInput.value = "";
    scoreDisplay.innerText = score;
}
const numberCheck = (word)=>{
    return Math.floor(Math.random()*word.length)
}
const countDown = ()=>{
    if(time >0){
        time--; 
    }else{        
        isPlaying = false;
        isReady = false;
        clearInterval(timeInterval)
        wordDispaly.innerText = '패배'
        button.innerText = '새로운 게임하기'
        button.classList.remove('stop')
    }
    timeDisplay.innerText = time
}
const run = ()=>{   
    switch(button.innerText){
        case '게임 시작하기': 
            wordDispaly.classList.add('ready');
            wordDispaly.innerText = 'Enter를 누르면 시작'
            if(isReady === false){
                return;
            }
            wordInput.value = ""
            isPlaying = true;
            break;
        case '일시정지':         
            button.classList.remove('stop')
            button.innerText = '다시 시작'
            isPlaying = false;
            clearInterval(timeInterval)
            break;
        case '다시 시작':
            button.classList.add('stop')
            button.innerText = '일시정지'
            isPlaying = true;
            timeInterval = setInterval(countDown,1000)
            break;
        case '새로운 게임하기':
            timeDisplay.innerText = "-";
            scoreDisplay.innerText = "-";
            button.innerText = '게임을 불러오는 중...'
            button.classList.add('loading')
            isStarting = false;
            getWrods(); 
            break;
                
    }
}

//event handler
wordInput.addEventListener("keypress", (e)=>{
    if(e.keyCode === 13){
        checkMatch();
    }
})
