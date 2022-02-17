import {projectsHolder} from "./appLogic.js";


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
    Object.keys(projectsHolder).forEach(project => {

        function displaySelectedProject() {
            resetRightColumn();
            displayToDo(project);
            // console.log(objDisplayedInDom);
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

function resetRightColumn(){
    const rightColumnEl = document.querySelector(".right-column");
    rightColumnEl.remove();
}

// to keep track of what project is being displayed
let objDisplayedInDom;


//display todo of selected project
function displayToDo(objectToDisplay){


    objDisplayedInDom = objectToDisplay;



    const rightColumnEl = createEl("div", "right-column");
    const project  = projectsHolder[objectToDisplay];
    
    project.forEach(todo => {
        const toDoEl = createEl("div", "todo");
        
        const titleEl = createEl("div", "title");
        titleEl.append(todo.title);
        toDoEl.appendChild(titleEl);

        const descEl = createEl("div", "description");
        descEl.append(todo.description);
        toDoEl.appendChild(descEl);
        
        const dueDateEl = createEl("div", "dueDate");
        dueDateEl.append(todo.dueDate);
        toDoEl.appendChild(dueDateEl);
        
        const priorityEl = createEl("div", "priority");
        priorityEl.append(todo.priority);
        toDoEl.append(priorityEl);


        rightColumnEl.appendChild(toDoEl);
    });
    contentsEl.appendChild(rightColumnEl);
}

renderMenu();

displayToDo("default");

export {displayToDo, resetRightColumn, objDisplayedInDom};