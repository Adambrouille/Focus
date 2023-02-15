var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    if(inputField.value != ""){
        var papagraph = document.createElement('p')
    }
    papagraph.innerText = inputField.value ;
    papagraph.classList.add('paragraphestyle');
    toDoContainer.appendChild(papagraph);
    inputField.value = "";
    papagraph.addEventListener('click',function(){
        papagraph.classList.add('paragraph_click');
    })

    papagraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(papagraph);
    })
}