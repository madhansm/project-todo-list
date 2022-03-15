//delete line 2&3 for local storage
import { makeToDo } from './appLogic.js'
window.localStorage.clear();

let projectsHolder = JSON.parse(localStorage.getItem('projectsHolderObj'));

if (!projectsHolder) {
    projectsHolder = {};
    //home project
    projectsHolder.Home = [];
    for (let i = 0; i < 3; i++) {
        projectsHolder.Home.push(makeToDo('Sample-Title ' + (i + 1), i + 'Description of the todo looks like this', 'Low', new Date(2022, 5, 5 + (i * 4))));
    }
}

//sample data (delete this upon enabling local storage)
projectsHolder.First = [];
projectsHolder.Second = [];
projectsHolder.Thrid = [];

for (let i = 0; i < 3; i++) {
    projectsHolder.First.push(makeToDo('Title', i + 'Description is very long', 'High', new Date(2022, 11, 2 + (i * 4))));
    projectsHolder.Second.push(makeToDo('2Title', i + '222Description is very long', 'Medium', new Date(2022, 10, 1 + (i * 4))));
    projectsHolder.Thrid.push(makeToDo('3Title', i + '333Description is very long', 'Low', new Date(2022, 8, 4 + (i * 4))));
}

function saveToLocalStorage() {
    // console.log(projectsHolder);
    localStorage.setItem('projectsHolderObj', JSON.stringify(projectsHolder));
    // console.log(localStorage.getItem('projectsHolderObj'));
}

// console.log(JSON.parse(localStorage.getItem('projectsHolderObj')));


export { projectsHolder, saveToLocalStorage };