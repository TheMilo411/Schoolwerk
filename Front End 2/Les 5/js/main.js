var hourUp = document.getElementById("js--hour-up");
var hourDown = document.getElementById("js--hour-down");
var hour = 0;
var minute = 0;
var timeHour = document.getElementById("js--time-hour");



hourUp.onclick = function() {
    hour += 1;
    if(hour > 23) {
     hour = 0;
    }
    if(hour < 10) {
    timeHour.innerText = "0" + hour;
    } else {
        timeHour.innerText =  hour;
    }
}

hourDown.onclick = function() {

    hour -= 1;
    if(hour < 0) {
        hour = 23;
        }
        if(hour < 10) {
            timeHour.innerText = "0" + hour;
            } else {
                timeHour.innerText =  hour;
            }
}




var minute = 0;
var timeMinute = document.getElementById("js--time-minute")
var minuteUp = document.getElementById("js--minute-up");
minuteUp.onclick = function() {
    minute += 1;
    if(minute > 59) {
        minute = 0;
    } if(minute < 10){
        timeMinute.innerText = "0" + minute;
    } else {
    timeMinute.innerText = minute;
}
}
var minuteDown = document.getElementById("js--minute-down");
minuteDown.onclick = function() {
    minute -= 1;
    if(minute < 0) {
        minute = 59;
    } if(minute < 10){
        timeMinute.innerText = "0" + minute;
    } else {
    timeMinute.innerText = minute;
}
}


var toggle = document.getElementById("js__toggle");
var timer = null;
toggle.checked = false;
toggle.onchange = function(){
    if(toggle.checked === true) {
        console.log("timer set at", hour, minute)
        timer = setInterval(function() {
            var date = new Date();
            var dateHour = date.getHours();
            var dateMinute = date.getMinutes();
        if(hour === dateHour && minute === dateMinute){
            console.log("TRING");
        }

        },1000);    
    } else {
        clearInterval(timer);
    }
}
