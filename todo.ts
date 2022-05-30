"use strict";

var imgTrash:HTMLImageElement;
// let ul:HTMLElement;
let taskArray:any[]=[];

function getInputValue() {
        // let inputValue:string = document.body.getElementsByClassName("input-text").value;
        const input = document.getElementById('input-text') as HTMLInputElement;
        if (input != null) {
            let value = input.value;
            return value;
        }
    }

function createBox(){

    let inputValue = getInputValue()!;
    
    if(document.body.getElementsByTagName("input")[0].value !==""){

        let ul = (document.getElementsByTagName("ul")[0] as HTMLUListElement);

        // Create the box
        let box= document.createElement('li');
        ul.appendChild(box);
        box.id ="box";  

        // Create the icon of delete
        imgTrash = document.createElement('img');
        imgTrash.src = "filled-trash.png";
        imgTrash.classList.add('trash');
        box.appendChild(imgTrash);

        imgTrash.addEventListener('click' , deleteBox);

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

        // Add the input value to the box
        let task:HTMLElement = document.createElement('p');
        task.innerText += inputValue;
        box.appendChild(task);
        task.classList.add("task");

        taskArray.push(inputValue);
        
        localStorage.setItem("tasks", taskArray.toString());
        
        document.body.getElementsByTagName("input")[0].value = "";
    }
}

// Delete box when click on the trash icon
function deleteBox(e:any){
    let currentRemove = e.target;
    // let removeList = currentRemove.parentElement;
    currentRemove.parentElement.remove();
}

function checkDone(){
    const check_done = document.getElementById('checkbox') as HTMLInputElement | null;
    if(check_done?.checked === true) 
        console.log("check")
}   


function create(){
    let ul = (document.getElementsByTagName("ul")[0] as HTMLUListElement);
    let tasks = localStorage.getItem("tasks");
    const taskArray = tasks?.split(",")
    console.log(taskArray);
    for(let i =0; i<taskArray!.length; i++){
        console.log(taskArray![i]);
        let box= document.createElement('li');
        console.dir(ul)
        box.id ="box";
         // Create the icon of delete
         imgTrash = document.createElement('img');
         imgTrash.src = "filled-trash.png";
         imgTrash.classList.add('trash');
         box.appendChild(imgTrash);
         imgTrash.addEventListener('click' , deleteBox);
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
        let task1:HTMLElement = document.createElement('p');
        task1.innerText += taskArray![i];
        box.appendChild(task1);
        task1.classList.add("task");
        ul.appendChild(box);
    }

    let button = document.querySelector(".button-1");
    let background = document.querySelector(".background");
    if(background !==null){
        ul = document.createElement('ul');
        background.appendChild(ul);
    }
    
    if(button !== null){
        button.addEventListener('click' , createBox);
    }
    
}

// Call the function who creates the app
window.onload =() => {
    

    create()
}