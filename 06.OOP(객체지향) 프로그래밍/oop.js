class Song{
    constructor(title, singer, year){
        this.title = title;
        this.singer = singer;
        this.year = year;
    }
    getInfo(){
        return `이곡의 제목은 ${this.title}이고 가수는 ${this.singer}입니다.`
    }
    
}

const song1 = new Song("christmas", "mariah", "2020-12-16")
console.log(song1.getInfo())

/* //constructor function
function Song(title,singer,year){
    this.title = title;
    this.singer = singer;
    this.year = new Date(year);
}

Song.prototype.getInfo = function(){
    return `이곡의 제목은 ${this.title}이고 가수는 ${this.singer}입니다.`
}
Song.prototype.getYear = function(){
    return this.year.getFullYear();
}

const song1= new Song("christmas", "Carrey","1995-11-23");
const song2= new Song("sulnal", "chulsoo","2005-10-23");
const song3= new Song("chuseok", "sooyoung","2015-07-23");

console.log(song1, song2, song3) */
