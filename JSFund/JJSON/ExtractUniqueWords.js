/**
 * Created by Stefan on 8.6.2017 г..
 */
function Extract(arr) {
    let text = arr.join('\n');
    let textArr = text.split(/[^A-Za-z0-9_]+/)
        .filter(e => e!='');
    let set = new Set();
    for(let word of textArr){
        set.add(word.toLowerCase());
    }
    console.log([...set].join(', '))

}
Extract([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
        'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
        'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
        'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
        'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
        'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
        'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'

])