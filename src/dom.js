import { projectsHolder } from "./data.js";


//push projects and todo list to DOM
let contentsEl = document.querySelector(".contents");

//create Element
function createEl(div, className = "") {
    const el = document.createElement(div);
    if (className) el.classList.add(className);
    return el;
}

//to the left side menu.
function renderMenu() {
    const menuEl = document.querySelector(".menu");
    const ulEl = document.querySelector(".project-list");
    // console.log(projectsHolder);
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

        //second DueDate to show when collapsed
        const dueDateEl2 = createEl("div", "dueDate2");
        if (todo.dueDate === '') {
            dueDateEl2.append(todo.dueDate);
        } else {
            dueDateEl2.append("Due On : " + new Date(todo.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: "short", year: 'numeric' }));
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

        const dueDateEl = createEl("div", "dueDate");
        if (todo.dueDate === '') {
            dueDateEl.append(todo.dueDate);
        } else {
            dueDateEl.append("Due On : " + new Date(todo.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: "short", year: 'numeric' }));

        }
        dueDateEl.classList.add('hidden');
        toDoEl.appendChild(dueDateEl);

        //priority to be displayed as color
        // const priorityEl = createEl("div", "priority");
        // priorityEl.append(todo.priority);
        // toDoEl.append(priorityEl);


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