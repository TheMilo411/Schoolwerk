//This part declares the variables needed to input the hours.  
var hourUp = document.getElementById("js--hour-up");
var hourDown = document.getElementById("js--hour-down");
var hour = 0;
var minute = 0;
var timeHour = document.getElementById("js--time-hour");

//This function causes the hours to go up if you click on the HTML appropriate button. 
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
//This function causes the hours to go down if you click on the appropriate HTML button.
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



//This function declares the variables needed to input the minutes. 
var minute = 0;
var timeMinute = document.getElementById("js--time-minute")
var minuteUp = document.getElementById("js--minute-up");

//This function causes the minutes to go up if you click on the appropriate HTML button.
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
//This function causes the minutes to go down if you click on the appropriate HTML button.
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

//This declares the variable needed to make the toggle work. 
var toggle = document.getElementById("js__toggle");

//This declares the variable timer and sets it to null. 
var timer = null;
//This makes sure the variable toggle always starts being turned off.  
toggle.checked = false;
//This declares the  variable getTimerout, needed to prevent the timer causing bugs, and makes sure it's null. 
var getTimerOut = null;

//This declares the variable needed to make the dialogue box appear.  
var dialogue = document.getElementById("js--dialogue");

//this adds audio to the HTML page by manipulating the DOM. 
var audio = new Audio("/sounds/alarm.mp3");
//This activates a function when you press the toggle button. 
toggle.onchange = function(){
//This checks if the toggle is already turned on. 
    if(toggle.checked === true) {
//This adds text to the dialogue box that appears when you turn on the alarm.
        dialogue.innerText = "Je alarm is gezet op " + hour + "uur en " + minute + "minuten.";
        //This adds the alarm__toggle--checked class to the toggle, thus styling it.
        toggle.classList.add("alarm__toggle--checked")
        //this changes the style of the dialogue display to flex from none. 
        dialogue.style.display = "flex";
        //This starts the function settimeout, meant to make the dialogue box disappear after a while.
        var getTimerOut = setTimeout(() => {
        //this sets the display style of dialogue to none.
            dialogue.style.display = "none";
            //this determines how long it takes for the dialogue box to disappear, in this case 2 seconds.
        }, 2000);
            //this sets another interval to check if the alarm should trigger. 
        timer = setInterval(function() {
            //this makes a new variable and ties it to the Date function. 
            var date = new Date();
            //this gets the current hour from the date variable.
            var dateHour = date.getHours();
            //this gets the current minutes from the date variable.
            var dateMinute = date.getMinutes();
        //this checks if the current time is the same as the inputted alarm.
        if(hour === dateHour && minute === dateMinute){
            //this plays Usagi flaps from Blue Archive if the hour and date does indeed match. 
            audio.play();
        }
        //This determines how long it takes to run the function again, in this case one second.    
        },1000);    
        //this is a else that triggers when toggle.checked is false.  
    } else {
        //This sets the dialogue style to none. 
        dialogue.style.display = "none";
        // Removes the class alarm__toggle--checked from toggle.
        toggle.classList.remove("alarm__toggle--checked")
        //Clears the previously established timeout from getTimerOut
        clearTimeout(getTimerOut);
         //clears the repeating action previously established by setinterval. 
        clearInterval(timer);
       

    }
}

