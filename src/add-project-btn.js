import { projectsHolder, saveToLocalStorage } from './data.js';
import { menuReset, displayToDo, resetRightColumn, objDisplayedInDom } from "./dom.js"

function toggleTextbox() {
    // const projectNameTextBoxEl = document.querySelector(".add-project-textbox");
    // projectNameTextBoxEl.classList.toggle("hidden");
    // let hidden = false;
    // if(!hidden) {
    //     document.getElementById("add-project-box").focus(); 
    //     hidden = true};
}


// const addProjectBtn = document.querySelector(".add-project-btn");
// addProjectBtn.addEventListener("click", toggleTextbox);

const textBox = document.getElementById('add-project-box');
textBox.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {

        let newProject = textBox.value;
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
        }
        textBox.value = '';
        toggleTextbox();
        resetRightColumn();
        displayToDo(newProject);
    }
});

function closeProjectAddBox() {
    // document.querySelector(".add-project-textbox").classList.add("hidden");
    // document.getElementById('add-project-box').value = '';
}

// document.addEventListener("click", () => {
//     if ((document.getElementById('add-project-box').value)){
//         document.getElementById('add-project-box').value = '';
//         document.querySelector(".add-project-textbox").classList.add("hidden");
//     }
// })


export { closeProjectAddBox }