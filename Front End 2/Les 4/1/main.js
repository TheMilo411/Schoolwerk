
var Main = document.getElementById("Main");
Main.onclick = function button(){
    var Main = document.getElementById("Main");
    const para = document.createElement("p");
    const node = document.createTextNode("01001000 01000101 01001100 01001100 01001111.");
    para.appendChild(node);
    const element = document.getElementById("Body");
    element.appendChild(para);
    Main.remove();
    const newButton = document.createElement('button');
    newButton.textContent = 'Remove content';
    document.body.appendChild(newButton);
    newButton.addEventListener('click', () => {
        para.remove();
        newButton.remove();
        const Main = document.createElement('button');
        Main.setAttribute("id","Main");
        Main.textContent = 'Click here please:';
        document.body.appendChild(Main);
        Main.addEventListener('click', () => {
            Main.onclick = button();
            
        })
  })
}