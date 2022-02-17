
let projectsHolder = {};
//factory to make new ToDo-s
function makeToDo(title, description, priority, dueDate) {
    return {title, description, priority, dueDate};
};

//input date str to actual date
const toDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-")
    return new Date(year, month - 1, day);
}

//all projects holder


//default project for landing page
projectsHolder.default = [makeToDo("1 ToDo", "1 Description of sample todo", "Low", toDate("25-2-2022"))];

projectsHolder.default.push(makeToDo("2 ToDo", "2 sample descrition", "Medium", toDate("28-2-2022")));


projectsHolder.default.forEach(todo => {
    // console.log(todo.title);
});

// let newProject = "Hiking";

projectsHolder["Hiking"] = [makeToDo("test 1", "desc 1 loooonngggg", "High", "02-03-2022"), 
                            makeToDo("test 2", "desc 2 very very loooonnnggggg", "Low", "04-10-2022"),
                            makeToDo("test 3", "desc 3 in a very very short way", "High", "04-07-2022")
];

projectsHolder["hello"] = [makeToDo("mdsrajghlatest 1", "ldfgdesc 1 loooonngggg", "High", "21-06-2022")];
projectsHolder["worl"] = [makeToDo("dfghsadgtest 1", "dzdfghdsfhesc 1 loooonngggg", "High", "02-03-2022")];


export {projectsHolder, makeToDo};


