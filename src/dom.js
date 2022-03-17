import { projectsHolder } from "./data.js";
import { isFuture, formatDistanceToNowStrict, isEqual } from "date-fns";

//push projects and todo list to DOM

let contentsEl = document.querySelector(".contents");

//create element constructor
function createEl(div, className = "") {
    const el = document.createElement(div);
    if (className) el.classList.add(className);
    return el;
}

//to the left side menu.
function renderMenu() {

    const ulEl = document.querySelector(".project-list");

    Object.keys(projectsHolder).forEach(project => {

        function displaySelectedProject() {
            resetRightColumn();
            displayToDo(project);
        };

        const liEl = createEl("li", "project");

        const buttonEl = createEl("button");
        buttonEl.addEventListener("click", displaySelectedProject);
        buttonEl.append(project);
        buttonEl.classList.add("project-btn");

        liEl.appendChild(buttonEl);

        if (project === "Home") {
            liEl.classList.add("home-project");
            buttonEl.classList.add("home-btn");
            ulEl.prepend(liEl);
        } else {
            liEl.classList.add('hidden');

            //delete button
            let deleteProjectEl = createEl("button", "delete-project");
            deleteProjectEl.append("x");

            let fillerBtn = createEl("button", "filler-button");
            liEl.appendChild(fillerBtn);
            liEl.appendChild(deleteProjectEl);

            ulEl.appendChild(liEl);
        }

    });
}

function menuReset() {
    let projectsList = document.querySelectorAll(".project");
    projectsList.forEach(project => project.remove());
    renderMenu();
}

function resetRightColumn() {
    const rightColumnEl = document.querySelector(".right-column");
    if (rightColumnEl) { rightColumnEl.remove(); };
}

function highlightCurrentProject(projectEl) {
    let projectNamesEl = document.querySelectorAll(".project");
    projectNamesEl.forEach(project => {
        project.classList.remove("active-project");
    });
    projectEl.classList.add("active-project");
}

//display todo of selected project
function displayToDo(objectToDisplay) {
    objDisplayedInDom = objectToDisplay;

    const rightColumnEl = createEl("div", "right-column");
    const project = projectsHolder[objectToDisplay];

    project.forEach(todo => {
        const toDoEl = createEl("div", "todo");
        toDoEl.setAttribute("project-name", objectToDisplay);

        const todoHeaderEl = createEl("div", "todo-header");

        const arrowEl = createEl("div", "arrow");
        todoHeaderEl.appendChild(arrowEl);

        const titleEl = createEl("div", "title");
        titleEl.append(todo.title);
        todoHeaderEl.appendChild(titleEl);

        // DueDate to show when todo is collapsed
        let todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        const dueDateEl2 = createEl("div", "dueDate2");

        let dueDate = new Date(todo.dueDate);

        if (dueDate === '' || dueDate.toString() === 'Invalid Date') {
            dueDateEl2.append('');

        } else if (isEqual(dueDate, todayDate)) {
            dueDateEl2.append('due today');

        } else if (isFuture(dueDate)) {

            if (dueDate - todayDate === 86400000) {
                dueDateEl2.append('due tomorrow');

            } else {
                dueDateEl2.append('due in ' + formatDistanceToNowStrict(dueDate));
            }

        } else {
            dueDateEl2.append('due was' + formatDistanceToNowStrict(dueDate) + 'ago');
        }

        todoHeaderEl.appendChild(dueDateEl2);

        const deleteBtnEl = createEl("button", "delete-todo");
        deleteBtnEl.append("X");
        todoHeaderEl.appendChild(deleteBtnEl);

        toDoEl.appendChild(todoHeaderEl);

        const descEl = createEl("div", "description");
        descEl.classList.add('hidden');
        descEl.append(todo.description);

        toDoEl.appendChild(descEl);

        //Due Date to show when todo is expanded
        const dueDateEl = createEl("div", "dueDate");
        if (dueDate === '' || dueDate.toString() === 'Invalid Date') {
            dueDateEl.append('');
        } else {
            dueDateEl.append("Due : " + dueDate.toLocaleDateString('en-GB', { day: 'numeric', month: "short", year: 'numeric' }));

        }
        dueDateEl.classList.add('hidden');
        toDoEl.appendChild(dueDateEl);

        const priorityEl = createEl("div", "priority");
        priorityEl.classList.add('hidden');
        priorityEl.append(`Priority : ${todo.priority}`);
        toDoEl.append(priorityEl);

        //priority to be displayed as color
        if (todo.priority === 'High') {
            toDoEl.setAttribute('priority', 'high');
        } else if (todo.priority === 'Medium') {
            toDoEl.setAttribute('priority', 'medium');
        } else if (todo.priority === 'Low') {
            toDoEl.setAttribute('priority', 'low');
        }

        rightColumnEl.appendChild(toDoEl);
    });

    contentsEl.appendChild(rightColumnEl);
}

// to keep track of what project is being displayed
let objDisplayedInDom;

renderMenu();
displayToDo("Home");
highlightCurrentProject(document.querySelector(".home-project"));

export { displayToDo, resetRightColumn, objDisplayedInDom, renderMenu, menuReset, highlightCurrentProject };