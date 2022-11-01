const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    INPROGRESS: "In progress",
}
const PRIORITY = {
    LOW: "Low",
    HIGH: "High",
}
const ERROR = {
    NOCHANGE: "Can't change status. No such task in list",
    NODELETE: "Check task to delete. Now no such task to delete",
}
let list = [
    { name: "do work", status: STATUS.TODO, priority: PRIORITY.LOW },
    { name: "make breakfast", status: STATUS.DONE, priority: PRIORITY.LOW },
    { name: "do homework", status: STATUS.INPROGRESS, priority: PRIORITY.HIGH },
    { name: "do strada", status: STATUS.TODO, priority: PRIORITY.HIGH },
    { name: "make breakfast", status: STATUS.INPROGRESS, priority: PRIORITY.LOW },
]
function changeStatus(nameTask, newStatus) {
    let task = list.find(item => item.name == nameTask);
    if (task === undefined) { return(console.log(ERROR.NOCHANGE)); }
    task.status = newStatus;
}    
function deleteTask(nameTask) {
    let task = list.filter(item => item.name !== nameTask);//без мутаций. исходник по ссылке остается
    if (list.length === task.length) { return (console.log(ERROR.NODELETE)); };
    return list = task;
}
function addTask(nameTask) {
    list.push({ name: nameTask, status: STATUS.TODO });
}
function compare(task) {
    if (task.priority === PRIORITY.HIGH) { return -1; }
    if (task.priority === PRIORITY.LOW) { return 1; }
}
//console.log(list.sort(compare));

function show(statusName) {
    let all_tasks_of_status = "";
    for (let task of list) {
        if (task.status === statusName)
        { all_tasks_of_status += "\t" + task.name + "\n"; }
    } 
    return (console.log(statusName + ":\n" + all_tasks_of_status));
}
    function showList() {
        show(STATUS.TODO);
        show(STATUS.INPROGRESS);
        show(STATUS.DONE);
}
changeStatus("do strada", STATUS.DONE);
deleteTask("make breakfast");
addTask("make bed");
//console.log(showList());
showList();