import {deleteTodo} from './appLogic.js';
import {displayToDo, resetRightColumn} from './dom.js';

document.addEventListener("click", (e) => {
    if (e.target.className === "delete-todo") {
        const projectName = e.target.parentElement.parentElement.getAttribute("project-name");
        const title = e.target.parentElement.childNodes[0].textContent;
        deleteTodo(projectName, title);
        resetRightColumn();
        displayToDo(projectName);

    }
})
