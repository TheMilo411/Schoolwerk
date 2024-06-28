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