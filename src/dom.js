import {projectsHold} from "./appLogic.js";


//push projects and todo list to DOM
let contentsEl = document.querySelector(".contents");

//create Element
function createEl(div, className=""){
    const el = document.createElement(div);
    if(className)el.classList.add(className);
    return el;
}


//to the left side menu.
function renderMenu() {
    const menuEl = createEl("div", "menu");

    const ulEl = createEl("ul", "project-list");
    Object.keys(projectsHold).forEach(project => {

        function displaySelectedProject() {
            const rightColumnEl = document.querySelector(".right-column");
            rightColumnEl.remove();
            displayToDo(project);
        };

        const liEl = createEl("li");
        const buttonEl = createEl("button");
        buttonEl.addEventListener("click", displaySelectedProject);
        buttonEl.append(project);

        liEl.appendChild(buttonEl);
        ulEl.appendChild(liEl);

    })
    menuEl.appendChild(ulEl);
    contentsEl.appendChild(menuEl);
}

function displayToDo(objectToDisplay){
    
    const rightColumnEl = createEl("div", "right-column");
    const project  = projectsHold[objectToDisplay];
    
    project.forEach(todo => {
        const toDoEl = createEl("div", "todo");
        
        const titleEl = createEl("div", "title");
        titleEl.append(todo.title);
        toDoEl.appendChild(titleEl);

        const descEl = createEl("div", "description");
        descEl.append(todo.description);
        toDoEl.appendChild(descEl);
        
        const priorityEl = createEl("div", "priority");
        priorityEl.append(todo.priority);
        toDoEl.append(priorityEl);

        const etaEl = createEl("div", "eta");
        etaEl.append(todo.eta);
        toDoEl.appendChild(etaEl);

        rightColumnEl.appendChild(toDoEl);
    });
    contentsEl.appendChild(rightColumnEl);
}

renderMenu();

displayToDo("default");