/**
 * Created by Stefan on 20.7.2017 г..
 */
class Player {
    constructor(nickName){
        this.nickName = nickName;
        this.score = [];
    }
    addScore(value){
        if(typeof value ==='string')
        value = Number(value);

        if(typeof value === 'number' && !isNaN(value)){
            this.score.push(value);
            this.score.sort((a, b) => b-a);
        }
    return this;
    }

    get scoreCount(){
        return this.score.length
    }

    get highestScore(){
        return this.score[0];
    }

    get topFiveScore(){
        return this.score.slice(0,5);
    }
    toString(){

        return `${this.nickName}: [${this.score}]`;
    }
 }

let peter = new Player("Peter");
peter.addScore("asdas");
console.log(peter);