function Airport (arr){
    let airport= new Set();
    let townStatistics = new Map();
    let townPlanes = new Map();

    for(let row of arr){

        let [planeId, town, passangers, action] = row.split(/\s+/g);
        passangers = Number(passangers);

        if(action == "land"){
            if(airport.has(planeId)){
                continue;
            }

            airport.add(planeId);

            if(!townStatistics.has(town)){
                townStatistics.set(town, [0,0])
            }
            townStatistics.get(town)[0] +=passangers;

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set())
            }
            townPlanes.get(town).add(planeId);
        }
        else if(action =='depart'){
            if(!airport.has(planeId)){
                continue
            }
            airport.delete(planeId);
            if(!townStatistics.has(town))
                townStatistics.set(town, [0,0]);
            townStatistics.get(town)[1]+= passangers;

            if(!townPlanes.has(town))
                townPlanes.set(town, new Set());
            townPlanes.get(town).add(planeId);

        }
    }
    
    airport = [...airport.values()]
        .sort((a,b) => a.localeCompare(b));
    townStatistics = [...townStatistics.entries()]
        .sort(sortTowns);

    console.log( 'Planes left:');
    airport.forEach(e => console.log(`- ${e}`));

    for(let [town, statistics] of townStatistics){
        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);
        let sortedPlanes = [...townPlanes.get(town).values()]
            .sort((a,b)=> a.localeCompare(b));
        console.log("Planes:")
        sortedPlanes.forEach(e=> console.log(`-- ${e}`));
    }

    function sortTowns(a,b) {

        let aArrivals= a[1][0];
        let bArrivals = b[1][0];
        let firstCrit = bArrivals-aArrivals;
        if(firstCrit!= 0)
            return firstCrit;
        else{
           return a[0].localeCompare(b[0]);
        }

    }
}
Airport(
    [
        "Boeing474 Madrid 300 ",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
)