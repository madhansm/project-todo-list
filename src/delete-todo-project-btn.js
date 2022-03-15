import { deleteTodo, deleteProject } from './appLogic.js';
import { displayToDo, resetRightColumn, menuReset, highlightCurrentProject } from './dom.js';

function hideAllTodoDescription(targetEl) {
    let allDescriptionEl = document.querySelectorAll('.description');
    console.log(allDescriptionEl);
    allDescriptionEl.forEach(descEl => {
        if (!(descEl === targetEl)) {
            console.log(descEl);
            descEl.classList.add('hidden');
        }
    });
}

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
        displayToDo("home");
        menuReset();
    }

    //highlight current project
    if (e.target.className === "project-btn" || e.target.className === "project-btn home-btn") {
        highlightCurrentProject(e.target.parentElement);
    }

    if (e.target.className === 'todo') {
        // console.log(e.target.parentElement);
        let parentEl = e.target;
        console.log(parentEl);
        let descriptionEl = parentEl.querySelector(".description");
        hideAllTodoDescription(descriptionEl);
        if (descriptionEl.className === "description hidden") {
            descriptionEl.classList.remove('hidden');
        } else {
            descriptionEl.classList.add('hidden');
        }

    }
})
