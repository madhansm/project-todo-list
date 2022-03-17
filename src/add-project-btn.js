import { projectsHolder, saveToLocalStorage } from './data.js';
import { menuReset, displayToDo, resetRightColumn, objDisplayedInDom, highlightCurrentProject } from "./dom.js";

const textBox = document.getElementById('add-project-box');
textBox.addEventListener("keydown", (e) => {

    if (e.key === 'Enter') {
        let newProject = textBox.value;
        if (newProject.replace(/\s+/g, '') === '') {
            return;
        }

        newProject = newProject.trim();
        newProject = newProject.toLowerCase().charAt(0).toUpperCase() + newProject.slice(1);

        // check Project Name Duplicate
        let duplicate = false;
        Object.keys(projectsHolder).forEach(project => {

            if (project === newProject) {
                duplicate ||= true;
            }
        });
        if (duplicate) {
            alert("Project Exists");
        } else {
            projectsHolder[newProject] = [];
            saveToLocalStorage();
            menuReset();
            let projectsNodeList = document.querySelectorAll(".project");
            projectsNodeList.forEach(node => {
                node.classList.remove('hidden');
            });
            let checkList = document.querySelectorAll(".project-btn");
            checkList.forEach(check => {
                console.log(check);

                if (check.textContent === newProject) {
                    highlightCurrentProject(check.parentElement);
                }
            });
        }
        //reset textbox
        textBox.value = '';
        toggleTextbox();
        resetRightColumn();
        displayToDo(newProject);
    }
});
