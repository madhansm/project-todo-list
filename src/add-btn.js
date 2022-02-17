import {projectsHolder, makeToDo} from "./appLogic.js"
import {displayToDo, resetRightColumn, objDisplayedInDom} from "./dom.js";

let addBtn = document.getElementById("add-to-do");

function openPopUp() {

    function resetAddToDo(title, description, dueDate, priority){
        document.getElementById("title").value = '';
        document.getElementById("description").value = '';
        document.getElementById("dueDate").value = '';
        document.querySelector('input[name="priority"]:checked').checked = false;
        document.getElementById("Low").checked = true;
    }   

    function saveToDo() {
        
        const titleEl = document.getElementById("title");
        const title = titleEl.value;

        const descriptionEl = document.getElementById("description");
        const description = descriptionEl.value;

        const dueDateEl = document.getElementById("dueDate");
        const dueDate = dueDateEl.value;

        const priorityEl = document.querySelector('input[name="priority"]:checked');
        const priority  = priorityEl.value;
        projectsHolder[objDisplayedInDom].push(makeToDo(title,description, priority, dueDate));
        
        resetAddToDo(titleEl, descriptionEl, dueDateEl, priorityEl);

        resetRightColumn();
        displayToDo(objDisplayedInDom);
    }
    
    function openPopUpDom() {
        const popUpEl = document.querySelector("#myModal");
        popUpEl.style.display = "block";

        const cancelBtn = document.getElementById("cancel");
        cancelBtn.addEventListener("click", () => {
            resetAddToDo();
            popUpEl.style.display = "none";
        });
    
        const saveBtn = document.getElementById("submit");
        saveBtn.addEventListener("click", ()=> {
            saveToDo();
        });
    }
    openPopUpDom();
    
    resetRightColumn();

    displayToDo(objDisplayedInDom);
}

addBtn.addEventListener("click", openPopUp);
