function attachEventsListeners() {


    document.getElementById('daysBtn').addEventListener('click',fromDays );
    document.getElementById('hoursBtn').addEventListener('click',fromHours );
    document.getElementById('minutesBtn').addEventListener('click',fromMinutes );
    document.getElementById('secondsBtn').addEventListener('click',fromSeconds );
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    function fromDays() {
        days = days.value;
        console.log(days);
        hours.value = Number(days)* 24;
        minutes.value = Number(days)* 1440;
        seconds.value = Number(days)* 86400;
    }
    function fromHours() {
        hours = hours.value;
        days.value = Number(hours)/24;
        minutes.value =Number(hours)*60;
        seconds.value = Number(hours)* 3600;
    }
    function fromMinutes() {
        minutes = minutes.value;
        days.value = Number(minutes)/1440;
        hours.value = Number(minutes)/60;
        seconds.value = Number(minutes)*60;
    }
    function fromSeconds() {
        seconds= seconds.value;
        days.value = Number(seconds)/ 86400;
        hours.value = Number(seconds) / 3600;
        minutes.value = Number(seconds) / 60;
    }

}
