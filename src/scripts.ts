export {};

console.log('Hello from scripts');

export class listItem {
    task:string;
    // date:Date;  //CHANGE TO DATE format
    date:string;
    status:string;
    details:string;
    list:string; 
    constructor(taskObj: {taskName:string; taskDate:string; taskStatus:string; taskDetails:string; taskList:string}) {
        this.task = taskObj.taskName;
        this.date = taskObj.taskDate;
        this.status = taskObj.taskStatus;
        this.details = taskObj.taskDetails;
        this.list = taskObj.taskList;
        }
}

export function createListItem(e:Event) {
    e.preventDefault();
    console.log("createListItem");
    const dialog = document.getElementById('newTaskDialog') as HTMLDialogElement;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const listArrayLength = Object.entries(localStorage).length +1;
    const newTask = Object.fromEntries(formData);
    const taskKey = `newTask${listArrayLength}`;
    localStorage.setItem(taskKey,JSON.stringify(newTask));
    form.reset();
    dialog?.close();
}







