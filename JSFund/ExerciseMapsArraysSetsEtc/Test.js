/**
 * Created by Stefan on 11.6.2017 г..
 */
function systemComponents(input) {
    let systems = new Map()
    input.forEach(row => {
        let[system, component, subcomponent] = row.split(' | ')
        if(!systems.has(system)) systems.set(system, {})
        if(!systems.get(system).hasOwnProperty(component)) systems.get(system)[component] = []
        systems.get(system)[component].push(subcomponent)
    })
    let systemsSortedKeys = [...systems.keys()].sort(amountOfComponentsThenAlpabeticalSort)
    systemsSortedKeys.forEach(systemName => {
        console.log(systemName)
        let system = systems.get(systemName)
        let componentsSortedKeys = Object.keys(system).sort((a, b) => {
            return system[a].length < system[b].length
        })
        componentsSortedKeys.forEach(component => {
            console.log(`|||${component}`)
            system[component].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`)
            })
        })
    })

    function amountOfComponentsThenAlpabeticalSort(a, b) {
        if(Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
            if(a > b) return 1
            if(a < b) return -1
        } else {
            return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
        }

    }
}
systemComponents([
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