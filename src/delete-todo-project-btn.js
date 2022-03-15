import { deleteTodo, deleteProject } from './appLogic.js';
import { displayToDo, resetRightColumn, menuReset, highlightCurrentProject } from './dom.js';



document.addEventListener("click", (e) => {
    //delete todo btn
    if (e.target.className === "delete-todo") {
        const projectName = e.target.parentElement.parentElement.getAttribute("project-name");
        const title = e.target.parentElement.childNodes[0].textContent;
        deleteTodo(projectName, title);
        resetRightColumn();
        displayToDo(projectName);

    }

    //delete project btn
    if (e.target.className === "delete-project") {
        const projectName = e.target.parentElement.firstChild.textContent;
        deleteProject(projectName);
        resetRightColumn();
        displayToDo("default");
        menuReset();
    }

    if (e.target.className === "project-btn" || e.target.className === "project-btn default-btn") {
        highlightCurrentProject(e.target.parentElement);
    }
})
