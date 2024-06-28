//Deze twee roepen functies uit die later in de code worden uitgelegd. 
addEventsToInputs();
changeTitleToInput();

//Deze funcie zorgt er voor dat elke input field de functie "Newtask" activeert. 
function addEventsToInputs() {
    var taskInput = document.getElementsByClassName("toDo__input");
    for (var i = 0; i < taskInput.length; i++) {
        taskInput[i].onkeyup = function (event) {
            newTask(event);
        }
    }
}

//dit veranderd de title van elke card naar een input field zodat je de naam van elke doenlijst kan veranderen. 
function changeTitleToInput() {
    var headers = document.getElementsByClassName("toDo__header");
    for (var i = 0; i < headers.length; i++) {
        headers[i].onclick = function (event) {
            var oldTitle = this.children[0].innerText;
            this.children[0].remove();
            var newInput = document.createElement("input");
            newInput.classList = "toDo__headerInput"
            newInput.value = oldTitle;
            this.appendChild(newInput);
            newInput.focus();

            newInput.onkeyup = function(event){
                    if (event.key === "Enter"){
                        var newTitle = event.target.value;
                        var newHeading = document.createElement("h2");
                        event.target.parentElement.appendChild(newHeading);
                        newHeading.innerText = newTitle;
                        newHeading.classList = "toDo__heading";
                        this.remove();
                    }
            }
        }
    }
}

//dit zorgt er voor dat je meer taken in de takenlijst kan doen. 
function newTask(event) {
    if (event.key === "Enter") {
        var tasks = event.target.parentElement.parentElement.children[1].children[0]
        var newTask = document.createElement("li");
        newTask.innerText = event.target.value;
        newTask.classList = "toDo__task";
        newTask.dataset.running = "false";
        tasks.appendChild(newTask);
        event.target.value = "";
        newTask.onclick = function (event) {
            setOrClearTimer(event);
        }
    }
}


var tasks = document.getElementsByClassName("toDo__task")
var timer = null;
for (var i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function (event) {
        setOrClearTimer(event);

    }
    //Deze functie zorgt er voor dat je taken kan aftekenen en dat ze verwijdert worden. 
    function toDone(event) {
        setTimeout(function () {
            var doneTask = document.createElement("li");
            doneTask.classList = "toDo__task toDo__task--done";
            doneTask.innerText = event.target.innerText
            document.getElementById("js--done").appendChild(doneTask);
            event.target.remove();
        }, 3000)
    }
}

//dit kijkt of een taak een timer heeft lopen. Zo ja, dan wordt de timer uitgezet. Zo niet, dan wordt hij aangezet. 
function setOrClearTimer(event) {
    if (event.target.dataset.running === "false") {
        event.target.classList.toggle("toDo__task--done");
        event.target.dataset.running = "true";
        toDone(event);
    }
    else if (event.target.dataset.running === "true") {
        event.target.classList.toggle("toDo__task--done");
        clearTimeout(timer);
        event.target.dataset.running = "true";
    }
}

//dit zorgt er voor dat de Fab een nieuwe kaart aanmaakt. 
var fab = document.getElementById("js--fab");
fab.onclick = function () {
    makeNewCard();
}

//Deze functie manipuleert de DOM door een nieuwe kaart er bij te doen. 
function makeNewCard() {
    var newTodo = document.createElement("article")
    newTodo.classList = "toDo";

    var newHeader = document.createElement("header")
    newHeader.classList = "toDo__header";

    var newHeading = document.createElement("h2");
    newHeading.classList = "toDo__heading";
    newHeading.innerText = "DEFAULT";


    var newpassword = document.createElement("section")
    newSection.classList = "toDo__body";


    var newList = document.createElement("ul");
    newList.classList = "toDo__tasks";

    var newFooter = document.createElement("footer");
    newFooter.classList = "toDo__footer";

    var newInput = document.createElement("input");
    newInput.classList = "toDo__input";
    newInput.placeholder = "Enter a task...";
    newInput.id = "js--input";

    newFooter.appendChild(newInput);
    newSection.appendChild(newList);
    newHeader.appendChild(newHeading);
    newTodo.appendChild(newHeader);
    newTodo.appendChild(newSection);
    newTodo.appendChild(newFooter);


    document.getElementsByTagName("body")[0].appendChild(newTodo);
    addEventsToInputs();
    changeTitleToInput();

}