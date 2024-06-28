function newentry(name, password) {
    var newuser = document.createElement("li");
    newuser.classList = "gebruiker";

    var newdiv = document.createElement("div")
    newdiv.classList = "information";

    var newtitle = document.createElement("h2");
    newtitle.innerText = name;


    var newpassword = document.createElement("p")
    newpassword.classList = "wachtwoord";
    newpassword.innerText = password;

    var newplaceholder = document.createElement("p");
    newplaceholder.classList = "placeholder";
    newplaceholder.innerText = "..............";

    var newbuttondiv = document.createElement("div");
    newbuttondiv.classList = "gebruikerbutton";

    var newpasswordInput = document.createElement("input");
    newpasswordInput.classList = "destroybutton";
    newpasswordInput.value = "Verwijder";
    newpasswordInput.type = "button";

    var newshowInput = document.createElement("input");
    newshowInput.classList = "showbutton";
    newshowInput.value = "show";
    newshowInput.type = "button";



    newuser.appendChild(newdiv);
    newuser.appendChild(newbuttondiv);
    newdiv.appendChild(newtitle);
    newdiv.appendChild(newpassword)
    newdiv.appendChild(newplaceholder);
    newbuttondiv.appendChild(newshowInput);
    newbuttondiv.appendChild(newpasswordInput);


    document.getElementsByClassName("gebruikers")[0].appendChild(newuser);
    addEventsToShow();
    addEventsToremove();
}
/*function clearvalue(input1, input2){
    console.log(input1);
    console.log(input2);
    input1.remove();
    input2.remove(); 
}
    */




function addEventsToShow() {
    var taskInput = document.getElementsByClassName("showbutton");
    for (var i = 0; i < taskInput.length; i++) {
        taskInput[i].onmousedown = function (event) {

            newShow(event);
        }
        taskInput[i].onmouseup = function (event) {
            newreturntonormal(event);
        }

        taskInput[i].onmouseout = function (event) {
            newreturntonormal(event);
        }
    }
}

function addEventsToremove() {
    var taskInput = document.getElementsByClassName("destroybutton");
    for (var i = 0; i < taskInput.length; i++) {
        taskInput[i].onclick = function (event) {

            newDestroy(event);
        }
        taskInput[i].onclick = function (event) {

            newDestroy(event);
        }
    }
}

function newShow(event) {
    
    var password = event.target.parentElement.parentElement.children[0].children[1];
    var passwordplaceholder = event.target.parentElement.parentElement.children[0].children[2];
    password.style.display = "block";
    passwordplaceholder.style.display = "none";
}

function newreturntonormal(event) {
    var password = event.target.parentElement.parentElement.children[0].children[1];
    var passwordplaceholder = event.target.parentElement.parentElement.children[0].children[2];
    password.style.display = "none";
    passwordplaceholder.style.display = "block";
}


function newDestroy(event) {
    event.target.parentElement.parentElement.remove();
}

function normalreturnshowall(password, hidden) {
    for (var i = 0; i < password.length; i++) {
        password[i].style.display = "none";
    }

    for (var i = 0; i < hidden.length; i++) {
        hidden[i].style.display = "block";
    }
}

function executeshowall(hidden, password) {
    for (var i = 0; i < password.length; i++) {

        password[i].style.display = "block";
    }

    for (var i = 0; i < hidden.length; i++) {

        hidden[i].style.display = "none";
    }
}


addEventsToShow()
addEventsToremove()
var taskInput = document.getElementById("js__input");
taskInput.onclick = function (event) {
    var inputname = event.target.parentElement.parentElement.children[1].children[0].children[1].value;
    var inputpassword = event.target.parentElement.parentElement.children[1].children[1].children[1].value;
    if(inputname === "" || inputpassword === "") {
        window.alert("ERROR! Geen URL / naam of Wachtwoord");
    } else {
    newentry(inputname, inputpassword);
    document.getElementById("js__naam").value = "";
    document.getElementById("js__password").value = "";
    }
}


var showall = document.getElementById("js__showall");
var password = document.getElementsByClassName("wachtwoord");
var hidden = document.getElementsByClassName("placeholder");
showall.onmousedown = function () {
    executeshowall(hidden, password)
}

showall.onmouseup = function () {
    normalreturnshowall(password, hidden)
}

showall.onmouseout = function () {
    normalreturnshowall(password, hidden)
}
var stylechoice = 1;
var button = document.getElementById("js--fab");
button.onclick = function () {
    var passwordfield = document.getElementById("js__wachtwoordcard");
    var inputfield = document.getElementById("js__inputcard");
    ifchoice = passwordfield.getAttribute("display");

    if (stylechoice == 1) {
        passwordfield.style.display = "flex";
        inputfield.style.display = "none";
        stylechoice = 0;
    } else {
        passwordfield.style.display = "none";
        inputfield.style.display = "flex";
        stylechoice = 1;
    }
}



