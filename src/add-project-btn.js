import {projectsHolder} from "./appLogic.js";
import {menuReset} from "./dom.js"

function toggleTextbox() {
        const projectNameTextBoxEl = document.querySelector(".add-project-textbox");
        // console.log(projectNameTextBoxEl);
        projectNameTextBoxEl.classList.toggle("hidden");
}


const addProjectBtn = document.querySelector(".add-project-btn");
addProjectBtn.addEventListener("click", toggleTextbox);

const textBox = document.getElementById('add-project-box');
textBox.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        // console.log("enter pressed");
        let newProject = textBox.value;
        projectsHolder[newProject] = [];
        menuReset();
        textBox.value = '';
        toggleTextbox();
    }
});

function closeProjectAddBox() {
    document.querySelector(".add-project-textbox").classList.add("hidden");
    document.getElementById('add-project-box').value = '';
}

document.addEventListener("click", () => {
    if ((document.getElementById('add-project-box').value)){
        document.getElementById('add-project-box').value = '';
        document.querySelector(".add-project-textbox").classList.add("hidden");
    }
})


export {closeProjectAddBox}