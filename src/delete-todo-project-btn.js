import { deleteTodo, deleteProject } from './appLogic.js';
import { displayToDo, resetRightColumn, menuReset, highlightCurrentProject } from './dom.js';

function hideAllTodoDescription(targetEl) {
    let allDescriptionEl = document.querySelectorAll('.description');
    // console.log(allDescriptionEl);
    allDescriptionEl.forEach(descEl => {
        if (!(descEl === targetEl)) {
            // console.log(descEl);
            descEl.classList.add('hidden');
        }
    });
}

document.addEventListener("click", (e) => {
    //delete todo btn
    if (e.target.className === "delete-todo") {
        const projectName = e.target.parentElement.parentElement.getAttribute("project-name");
        const title = e.target.parentElement.querySelector('.title').textContent;
        deleteTodo(projectName, title);
        resetRightColumn();
        displayToDo(projectName);
    }

    //delete project btn
    if (e.target.className === "delete-project") {
        const projectName = e.target.parentElement.firstChild.textContent;
        deleteProject(projectName);
        resetRightColumn();
        displayToDo("Home");
        menuReset();
    }

    //highlight current project
    if (e.target.className === "project-btn" || e.target.className === "project-btn home-btn") {
        highlightCurrentProject(e.target.parentElement);
    }

    if (e.target.className === 'arrow' || e.target.className === 'arrow down' || e.target.className === 'todo-header' || e.target.className === 'project-list' || e.target.parentElement.className === 'usr-projects') {
        let parentEl
        if (e.target.className === 'project-list' || e.target.parentElement.className === 'usr-projects') {
            let projectsNodeList = document.querySelectorAll(".project");
            projectsNodeList.forEach(node => {
                if (!(node.firstChild.textContent === 'Home')) {
                    node.classList.toggle('hidden');
                };

            });
            // console.log(document.querySelectorAll(".project"));
            document.getElementById('projects-arrow').classList.toggle('down');


        } else {
            if (e.target.className === 'todo-header') {
                parentEl = e.target.parentElement;
                e.target.querySelector(".arrow").classList.toggle('down');
            } else {
                parentEl = e.target.parentElement.parentElement;
                e.target.classList.toggle('down');
            }
            let descriptionEl = parentEl.querySelector(".description");
            descriptionEl.classList.toggle('hidden');

            let dueEl = parentEl.querySelector(".dueDate");
            dueEl.classList.toggle("hidden");

            let dueEl2 = parentEl.firstChild.querySelector('.dueDate2').classList.toggle('hidden');
        }

    }
    console.log(e.target.parentElement.className);
})
