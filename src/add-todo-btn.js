import {projectsHolder, makeToDo} from "./appLogic.js"
import {displayToDo, resetRightColumn, objDisplayedInDom} from "./dom.js";
import {closeProjectAddBox} from "./add-project-btn";
import isFuture from 'date-fns/isFuture';


function closePopUp() {
    const modalEl = document.getElementById("myModal");
    modalEl.style.display = "none";
}

function listenForSaveAndCancel() {
    const saveBtn = document.getElementById('submit');
    saveBtn.addEventListener("click", ()=> {

        //check if title is empty
        if (!(document.getElementById("title").value)) { alert("Please enter title"); return};

        // if title not empty

        //check if date valid and in future
        if (new Date(document.getElementById("dueDate").value).toString() === "Invalid Date"){ 
            if(!(document.getElementById("dueDate").value === '')){
                alert("Please enter valid date");
                return;
            }
        };

        if (!(isFuture(new Date(document.getElementById("dueDate").value)))) {
            alert("Due date cannot be in the past");
            return;
        }

        saveToDo();
        resetAddToDo();
        closePopUp();
    })

    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", () => {
        resetAddToDo();
        closePopUp();
    });
}

function resetAddToDo(){
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.querySelector('input[name="priority"]:checked').checked = false;
    document.getElementById("dueDate").value = '';
    document.getElementById("Low").checked = true;
}   

function saveToDo() {
    
    const titleEl = document.getElementById("title");
    const title = titleEl.value;

    const descriptionEl = document.getElementById("description");
    const description = descriptionEl.value;

    const priorityEl = document.querySelector('input[name="priority"]:checked');
    const priority  = priorityEl.value;

    const dueDateEl = document.getElementById("dueDate");
    let dueDate;
    if (dueDateEl.value === "") {dueDate = ''} else {dueDate = new Date(dueDateEl.value)};

    projectsHolder[objDisplayedInDom].push(makeToDo(title, description, priority, dueDate));
    resetRightColumn();
    displayToDo(objDisplayedInDom);
}

function openPopUpDom() {
    const modalEl = document.getElementById("myModal");
    modalEl.style.display = "block";
}
//listen for add button
let addToDoBtn = document.getElementById("add-to-do");
addToDoBtn.addEventListener("click", openPopUpDom);

document.onkeydown = function (e) {
    if (e.key === "Escape") {
        resetAddToDo();
        closePopUp();
        closeProjectAddBox();
    }
}

listenForSaveAndCancel();