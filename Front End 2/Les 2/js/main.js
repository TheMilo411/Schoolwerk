// counter
var count = 0;
var counter = document.getElementById("counter");
counter.innerText = count;

var redButton = document.getElementById("button--red");
var greenButton = document.getElementById("button--green");

redButton.onclick = function(){
    if(count > -10) 

    count -= 1;
    else{
        count = 0;
    }
    counter.innerText = count;
}


greenButton.onclick = function() {
    if(count < 10 )
    count += 1;
    else {
        count = 0;
    }
    counter.innerText = count;
}

// stopwatch
var minutes = 0;
var seconde = 0;
var everysecond;
var watch = document.getElementById("stopwatch");
watch.innerText = minutes + ":0" + seconde;

var start = document.getElementById("button--start");
start.onclick = function(){
    // elke seconde iets uitvoeren

everysecond = setInterval(function(){
seconde += 1;
if(seconde > 60){
    seconde = 0;
    minutes += 1;
}
if (seconde > 9) {
    watch.innerText =  minutes + ":" + seconde;
} else {
    watch.innerText = minutes + ":0" + seconde;
}   
}, 1000)

}

var stop = document.getElementById("button--stop");
stop.onclick = function(){
    clearInterval(everysecond);
}