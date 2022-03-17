import { projectsHolder, saveToLocalStorage } from './data.js';

//factory to make new ToDo-s
function makeToDo(title, description, priority, dueDate) {
    return { title, description, priority, dueDate };
};

//delete project
function deleteProject(project) {
    delete projectsHolder[project];
    saveToLocalStorage();
}

//delete Todo
function deleteTodo(projectName, todoName) {
    let tempArr = projectsHolder[projectName].filter((element) => {
        return element.title !== todoName;
    });
    projectsHolder[projectName] = tempArr;
    saveToLocalStorage();
}

export { projectsHolder, makeToDo, deleteTodo, deleteProject };
