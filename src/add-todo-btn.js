import {projectsHolder, makeToDo} from "./appLogic.js"
import {displayToDo, resetRightColumn, objDisplayedInDom} from "./dom.js";
import {closeProjectAddBox} from "./add-project-btn";

function closePopUp() {
    const modalEl = document.getElementById("myModal");
    modalEl.style.display = "none";
    // console.log("popup closed");
}

function listenForSaveAndCancel() {
    const saveBtn = document.getElementById('submit');
    saveBtn.addEventListener("click", ()=> {
        // console.log("clicked save");

        //check if title is empty
        if (!(document.getElementById("title").value)) { alert("Please enter title"); return};

        //title not empty
        saveToDo();
        resetAddToDo();
        closePopUp();
    })

    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", () => {
        // console.log("clicked cancel");
        resetAddToDo();
        closePopUp();
    });
}

function resetAddToDo(title, description, dueDate, priority){
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.querySelector('input[name="priority"]:checked').checked = false;
    document.getElementById("dueDate").value = '';
    document.getElementById("Low").checked = true;

    // console.log("reset add todo");
}   

function saveToDo() {
    
    const titleEl = document.getElementById("title");
    const title = titleEl.value;

    const descriptionEl = document.getElementById("description");
    const description = descriptionEl.value;

    const priorityEl = document.querySelector('input[name="priority"]:checked');
    const priority  = priorityEl.value;

    const dueDateEl = document.getElementById("dueDate");
    const dueDate = dueDateEl.value;

    // console.log(title, description, priority, dueDate);

    projectsHolder[objDisplayedInDom].push(makeToDo(title, description, priority, dueDate));
    resetRightColumn();
    displayToDo(objDisplayedInDom);
}

function openPopUpDom() {
    const modalEl = document.getElementById("myModal");
    modalEl.style.display = "block";
    // console.log("opened popup");
}
//listen for add button
let addToDoBtn = document.getElementById("add-to-do");
addToDoBtn.addEventListener("click", openPopUpDom);

document.onkeydown = function (e) {
    if (e.key === "Escape") {
        // console.log("escape pressed");
        resetAddToDo();
        closePopUp();
        closeProjectAddBox();
    }
}

listenForSaveAndCancel();