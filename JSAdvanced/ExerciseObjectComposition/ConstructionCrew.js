function solve(worker) {
    if(worker.handsShaking == false){
        return worker;
    }
    else{
        let weight = worker.weight;
        let exp = worker.experience;
        let alcohol = worker.bloodAlcoholLevel;
        let perYear = 0.1*weight*exp;
        worker.bloodAlcoholLevel += perYear;
        worker.handsShaking = false;
        return worker
    }


}
let worker = { weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }


console.log(solve(worker));