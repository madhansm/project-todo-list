import {projectsHolder, makeToDo} from "./appLogic.js"
import {displayToDo, resetRightColumn, objDisplayedInDom} from "./dom.js";

let addBtn = document.getElementById("add-to-do");

function openPopUp() {
    
    console.log(projectsHolder.default);
    projectsHolder[objDisplayedInDom].push(makeToDo("whazzupp", "lorem ipsum", "very high", "tomorrow"));
    resetRightColumn();

    displayToDo(objDisplayedInDom);
}

addBtn.addEventListener("click", openPopUp);
