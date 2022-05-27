"use strict";
class Task {
    constructor(value) {
        this.value = value;
        this.deleted = false;
        this.done = false;
    }
    getInputValue() {
        // // let inputValue:string = document.body.getElementsByClassName("input-text").value;
        const input = document.getElementById('input-text');
        if (input != null) {
            this.value = input.value;
            return this.value;
        }
    }
    deleteBox() {
        const box = document.getElementById('box');
        if (box != null) {
            box.remove();
            this.deleted = true;
        }
    }
    checkDone() {
        const check_done = document.getElementById('checkbox');
        if (check_done?.checked === true)
            this.done = true;
    }
}
function createBox() {
    // Create just if there task
    let box = document.createElement('div');
    document.body.appendChild(box);
    box.id = "box";
    // Create the icon of delete
    var img = document.createElement('img');
    img.src = "filled-trash.png";
    img.classList.add('trash');
    box.appendChild(img);
    img.addEventListener('click', Task.prototype.deleteBox);
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
    // Get the input value and add it to the box
    var inputValue = Task.prototype.getInputValue();
    let task = document.createElement('p');
    task.innerText += inputValue;
    box.appendChild(task);
    task.classList.add("task");
    // const new_task = new Task(inputValue);
    // if(new_task !== null){
    //     box.style.top += "10%";
    // }
    // Clean the input to the next  task
    document.body.getElementsByTagName("input")[0].value = "";
}
function afterClick() {
    if (document.body.getElementsByTagName("input")[0].value !== "") {
        createBox();
    }
}
function create() {
    // Creates a title.
    let heading = document.createElement('H1');
    heading.innerText += "TODO:";
    document.body.appendChild(heading);
    heading.classList.add("h1");
    let button = document.createElement('button');
    button.innerText += "+";
    document.body.appendChild(button);
    button.classList.add("button-1");
    button.addEventListener('click', afterClick);
}
// Call the function who creates the app
window.onload = () => {
    create();
};
