//delete line 2 for local storage
// window.localStorage.clear();

//delete lines 5, 14, 15, 19 to 29 to delete sample data
import { makeToDo } from './appLogic.js';

let projectsHolder = JSON.parse(localStorage.getItem('projectsHolderObj'));

//check if projectsHolder is available in local storage
if (!projectsHolder) {
    projectsHolder = {};
    //home project
    projectsHolder.Home = [];

    //sample data
    for (let i = 0; i < 3; i++) {
        projectsHolder.Home.push(makeToDo('Sample-Title ' + (i + 1), i + 'Description of the todo looks like this', 'Low', new Date(2022, 5, 5,)));
    }
}

//sample data
projectsHolder.First = [];
projectsHolder.Second = [];
projectsHolder.Thrid = [];

for (let i = 0; i < 3; i++) {
    projectsHolder.First.push(makeToDo(i + 'Title', i + 'Description is very long', 'High', new Date(2022, 11, 2 + (i * 4))));
    projectsHolder.Second.push(makeToDo(i + 'Title', i + '222Description is very long', 'Medium', new Date(2022, 2, 1 - (i * 4))));
    projectsHolder.Thrid.push(makeToDo(i + 'Title', i + '333Description is very long', 'Low', new Date(2022, 8, 4 + (i * 4))));
}

function saveToLocalStorage() {
    localStorage.setItem('projectsHolderObj', JSON.stringify(projectsHolder));
}

export { projectsHolder, saveToLocalStorage };