function attachGradientEvents() {
    let gradient =document.getElementById('gradient')
    gradient.addEventListener('mousemove', onClick);
    gradient.addEventListener('mouseout', Out);
    function onClick(event) {
    let power = event.offsetX / (event.target.clientWidth - 1 );
    power = Math.floor(power*100);
    document.getElementById('result').textContent = power+"%";
    }
    function Out() {
        document.getElementById('result').textContent ="";
    }
}