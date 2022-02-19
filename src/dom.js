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
    console.log(projectsHolder);
    Object.keys(projectsHolder).forEach(project => {

        function displaySelectedProject() {
            resetRightColumn();
            displayToDo(project);
        };

        const liEl = createEl("li", "project");
        const buttonEl = createEl("button");
        buttonEl.addEventListener("click", displaySelectedProject);
        buttonEl.append(project);

        liEl.appendChild(buttonEl);

        if (project === "default") {
            ulEl.prepend(liEl);
        } else {
            //delete button
            let deleteProjectEl = createEl("button", "delete-project");
            deleteProjectEl.append("x");
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
    if(rightColumnEl) {rightColumnEl.remove();};
    
}

//display todo of selected project
function displayToDo(objectToDisplay) {


    objDisplayedInDom = objectToDisplay;



    const rightColumnEl = createEl("div", "right-column");
    const project = projectsHolder[objectToDisplay];

    project.forEach(todo => {
        const toDoEl = createEl("div", "todo");
        toDoEl.setAttribute("project-name", objectToDisplay);
        
        const todoHeaderEl = createEl ("div", "todo-header");

        const titleEl = createEl("div", "title");
        titleEl.append(todo.title);
        todoHeaderEl.appendChild(titleEl);
        
        const deleteBtnEl = createEl("button", "delete-todo");
        deleteBtnEl.append("X");
        todoHeaderEl.appendChild(deleteBtnEl);

        toDoEl.appendChild(todoHeaderEl);

        const descEl = createEl("div", "description");
        descEl.append(todo.description);
        toDoEl.appendChild(descEl);

        const dueDateEl = createEl("div", "dueDate");
        if (todo.dueDate === '') {
            dueDateEl.append(todo.dueDate);
        } else {
            dueDateEl.append(new Date(todo.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: "short", year: 'numeric' }));
            
        }
        toDoEl.appendChild(dueDateEl);
        const priorityEl = createEl("div", "priority");
        priorityEl.append(todo.priority);
        toDoEl.append(priorityEl);


        rightColumnEl.appendChild(toDoEl);
    });
    contentsEl.appendChild(rightColumnEl);


}
// to keep track of what project is being displayed
let objDisplayedInDom;

renderMenu();

displayToDo("default");

export { displayToDo, resetRightColumn, objDisplayedInDom, renderMenu, menuReset};