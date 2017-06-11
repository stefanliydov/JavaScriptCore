function Components(arr) {
    let components = new Map();

    for (let row of arr) {
        let [system, component, subcomponent] = row.split(' | ').filter(x => x != "");


        if (!components.has(system))
            components.set(system, new Map());
        if (!components.get(system).has(component))
            components.get(system).set(component, []);
        components.get(system).get(component).push(subcomponent);

    }

    let systems = [...components.keys()].sort((a,b) => SortSystems(a,b,components));
    function SortSystems(a,b,components) {
        let aComp = components.get(a).size;
        let bComp = components.get(b).size;
        if(aComp> bComp) return -1;
        else if(aComp< bComp) return 1;

        return a.toLowerCase().localeCompare(b.toLowerCase());
    }


    for(let system of systems){
        console.log(system);
        let currComponents = [...components.get(system).keys()].sort((a,b)=> components.get(system).get(a).length -
        components.get(system).get(b).length);
        for(let comp of currComponents){
            console.log('|||'+comp);
            for;
        }

    }





}
Components([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'

])