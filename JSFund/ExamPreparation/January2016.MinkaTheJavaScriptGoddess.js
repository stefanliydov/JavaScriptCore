function main(arr) {

    let scoreMap = new Map();

    let taskMap = {};
    for(let el of arr){
        let [name, type, taskNumber, score, linesOfCode] = el.
            split(' & ').filter(e => e !="");
            taskNumber = "Task "+ taskNumber;
            score = parseFloat(score);
            linesOfCode = Number(linesOfCode);

            if(!taskMap.hasOwnProperty(taskNumber)){
                taskMap[taskNumber] = {tasks: [], average: 0, lines:0 }
            }

            let currObj = {name: name, type:type};
            taskMap[taskNumber].tasks.push(currObj);
            taskMap[taskNumber].average += score;
            taskMap[taskNumber].lines +=linesOfCode;

            if(!scoreMap.has(taskNumber)){
                scoreMap.set(taskNumber, 0);
            }
            scoreMap.set(taskNumber, scoreMap.get(taskNumber)+ 1);

    }

    for(let taskN in taskMap){
        taskMap[taskN].average = parseFloat((taskMap[taskN].average/scoreMap.get(taskN)).toFixed(2));

    }

    let sortedObj = Object.keys(taskMap).sort((a,b) =>{
        "use strict";
        let aAverage = taskMap[a].average;
        let bAverage = taskMap[b].average;
        let firstCrit = bAverage-aAverage;
        if(firstCrit===0){
            let aLines = taskMap[a].lines;
            let bLines = taskMap[b].lines;
            let secCrit = aLines - bLines;
            return secCrit;
        }
        return firstCrit;
    } )
   console.log(JSON.stringify(sortedObj));


}

main([ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ])