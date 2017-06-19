    function main(arr){
        "use strict";

        let candidates = new Map();

        for(let line of arr){
            let system = line.system;
            let candidate = line.candidate;
            let votes = Number(line.votes);

            if(!candidates.has(system)){
                candidates.set(system, new Map());
            }
            if(!candidates.get(system).has(candidate)){
                candidates.get(system).set(candidate,0);
            }
            candidates.get(system).set(candidate , candidates.get(system).get(candidate)+votes );
        }

        for(let [k,v] of candidates){

               v =[...v].sort((a,b) => b[1]-a[1]);

            let allVotesPerSystem=0;

            if(v.length===1){
                   allVotesPerSystem = v[0][1];
               }
               else

                for(let el of v){

                    allVotesPerSystem+=el[1];
                }
                v[0][1]= allVotesPerSystem;


            candidates.set(k,v[0]);
            }

        let canditesTotalVotes = new Map();
        let totalVotes =0;
        for(let winner of candidates){

            let [cand, currVotes] = winner[1];
           totalVotes+=currVotes;
            if(!canditesTotalVotes.has(cand)){
                canditesTotalVotes.set(cand,0);
            }
            canditesTotalVotes.set(cand, canditesTotalVotes.get(cand)+currVotes);

        }

        let sortedVotesPerCand = [...canditesTotalVotes].sort((a,b) => b[1]-a[1])

        // console.log(sortedVotesPerCand);
        if(sortedVotesPerCand.length ===1){
            console.log(`${sortedVotesPerCand[0][0]} wins with ${sortedVotesPerCand[0][1]} votes`);
            console.log(`${sortedVotesPerCand[0][0]} wins unopposed!`)
        }
        else if(sortedVotesPerCand[0][1]>totalVotes/2){
            console.log(`${sortedVotesPerCand[0][0]} wins with ${sortedVotesPerCand[0][1]} votes`)
            console.log(`Runner up: ${sortedVotesPerCand[1][0]}`);
            let runner = [...candidates].filter(e=> e[1][0]===sortedVotesPerCand[1][0]).sort((a,b)=> b[1][1]-a[1][1]);
            for(let system of runner){
                console.log(`${system[0]}: ${system[1][1]}`);
            }
        }
        else{

                let firstPercent = Math.floor((sortedVotesPerCand[0][1]/totalVotes)*100);
            let secPercent = Math.floor((sortedVotesPerCand[1][1]/totalVotes)*100);

            console.log(`Runoff between ${sortedVotesPerCand[0][0]} with ${firstPercent}% and ${sortedVotesPerCand[1][0]} with ${secPercent}%` )
        }

    }
main([{ system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10  },
   {   system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    {   system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ])

//main([{system: 'Theta'  , candidate: 'Kitler'        , votes: 50},
//    {system: 'Theta'  , candidate: 'Space Cow'     , votes: 45},
//    {system: 'Theta'  , candidate: 'Huge Manatee'  , votes: 45},
//    {system: 'Theta'  , candidate: 'Flying Shrimp' , votes: 45},
//    {system: 'Tau'    , candidate: 'Kitler'        , votes: 50},
//    {system: 'Tau'    , candidate: 'Space Cow'     , votes: 45},
//    {system: 'Tau'    , candidate: 'Huge Manatee'  , votes: 15},
//    {system: 'Sigma'  , candidate: 'Kitler'        , votes: 50},
//    {system: 'Sigma'  , candidate: 'Huge Manatee'  , votes: 45},
//    {system: 'Sigma'  , candidate: 'Space Cow'     , votes: 15},
//    {system: 'Omicron', candidate: 'Kitler'        , votes: 50},
//    {system: 'Omicron', candidate: 'Huge Manatee'  , votes: 20},
//    {system: 'Omicron', candidate: 'Space Cow'     , votes: 25}])



