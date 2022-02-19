// window.localStorage.clear();

let projectsHolder = JSON.parse(localStorage.getItem('projectsHolderObj'));

if (!projectsHolder) {
    projectsHolder = {};
    //default project
    projectsHolder.default = [];
}

function saveToLocalStorage() {
    console.log(projectsHolder);
    localStorage.setItem('projectsHolderObj', JSON.stringify(projectsHolder));
    console.log(localStorage.getItem('projectsHolderObj'));
}

// console.log(JSON.parse(localStorage.getItem('projectsHolderObj')));


export {projectsHolder, saveToLocalStorage};