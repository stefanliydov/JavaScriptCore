function timer() {

    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");

     $("#start-timer").click(startTimer);
     $("#stop-timer").click(stopTimer);
    let timer;
     let currSeconds =0;
     function startTimer() {

        timer = setInterval(tick, 1000,clearInterval(timer));



     }
     function stopTimer(){
        clearInterval(timer);
     }
function tick() {
    currSeconds++;

    seconds.text(`${('0'+Math.floor(currSeconds%60)).slice(-2)}`);
    minutes.text(`${('0'+Math.floor(currSeconds/60)).slice(-2)}`);
    hours.text(`${('0'+Math.floor(currSeconds/3600)).slice(-2)}`);
     }

}
