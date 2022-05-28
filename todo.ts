"use strict";
let tasks:any[]=[];
var imgTrash:HTMLImageElement;
let ul:HTMLElement;
class Task {
    value:any;
    // deleted :boolean;
    // done : any;
    constructor(value:any ){
        this.value = value;
        // this.deleted =false;
        // this.done = false;
        
    }

    getInputValue() {
        // let inputValue:string = document.body.getElementsByClassName("input-text").value;
        const input = document.getElementById('input-text') as HTMLInputElement;
        if (input != null) {
            this.value = input.value;
            return this.value;
        }
    }

    createB(){

        localStorage.setItem("task" , this.value);

        // Create just if there task
        let box= document.createElement('li');
        ul.appendChild(box);
        box.id ="box";  

        // Create the icon of delete
        imgTrash = document.createElement('img');
        imgTrash.src = "filled-trash.png";
        imgTrash.classList.add('trash');
        box.appendChild(imgTrash);

        imgTrash.addEventListener('click' , this.deleteBox);

        // Create the icon of task
        var img = document.createElement('img');
        img.src = "task.png";
        img.classList.add('task-icon');
        box.appendChild(img);

        // Create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';
        box.appendChild(checkbox);

        let task:HTMLElement = document.createElement('p');
        task.innerText += localStorage.task;
        box.appendChild(task);
        task.classList.add("task");
    }

    deleteBox(){
        var div = imgTrash.parentElement; 
        if(div !== null){
         div.remove();
        }
    }

    checkDone(){
        const check_done = document.getElementById('checkbox') as HTMLInputElement | null;
        if(check_done?.checked === true) 
            console.log("check")
    }
     
}

function createTask(){
    var inputValue = Task.prototype.getInputValue();
    if(document.body.getElementsByTagName("input")[0].value !==""){
        let new_task = new Task(inputValue);
        new_task.createB();
         // Clean the input to the next  task
        document.body.getElementsByTagName("input")[0].value = "";
    }
}


function afterClick(){
    createTask()
}


function create(){

    // Creates a title.
    let heading:HTMLElement = document.createElement('H1');
    heading.innerText += "TODO:";
    document.body.appendChild(heading);
    heading.classList.add("h1");

    let button:HTMLElement = document.createElement('button');
    button.innerText += "+";
    document.body.appendChild(button);
    button.classList.add("button-1");

    ul = document.createElement('ul');
    document.body.appendChild(ul);

    button.addEventListener('click' , createTask);
    

}

// Call the function who creates the app
window.onload =() => {
    create()
}