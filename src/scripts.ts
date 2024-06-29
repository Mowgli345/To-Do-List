import { format } from "../node_modules/date-fns/format";
import { intlFormatDistance } from "../node_modules/date-fns/intlFormatDistance";
import { listsArray } from "./index";

export {};

//Create Task object from LS
export class listItem {
    task:string;
    // date:Date;  //CHANGE TO DATE format
    rawDate:Date;
    status:string;
    details:string;
    list:string; 
    constructor(taskObj: {taskName:string; taskDate:string; taskStatus:string; taskDetails:string; taskList:string}) {
        this.task = taskObj.taskName;
        // this.rawDate = taskObj.taskDate;

        this.rawDate = new Date(taskObj.taskDate);

        this.status = taskObj.taskStatus;
        this.details = taskObj.taskDetails;
        this.list = taskObj.taskList;
        }
    get date() {
        let now = new Date();
        let date = new Date (this.rawDate);
        let dateDiff = (date.getTime() - now.getTime())/(1000*60*60*24);
        if (dateDiff<-366) {
            let myDate = intlFormatDistance(date,now,{unit:'year'})
            return myDate;
        }
        else if (dateDiff>-366 && dateDiff<=-56){
            let myDate = intlFormatDistance(date,now,{unit:'month'})
            return myDate;
        }
        else if (dateDiff>-56 && dateDiff<=-15){
            let myDate = intlFormatDistance(date,now,{unit:'week'})
            return myDate;
        }     
        else if (dateDiff>-15 && dateDiff<=15) {
            let myDate = intlFormatDistance(date,now,{unit:'day'})
            return myDate;
        }
        else {    
            let myDate = format(new Date(this.rawDate),'PP');
            return myDate;
        }
    } 
}

//Adds task to LS
export function createListItem(e:Event) {
    e.preventDefault();
    console.log("createListItem");
    const dialog = document.getElementById('newTaskDialog') as HTMLDialogElement;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const taskArrayLength = Object.entries(localStorage).length +1;

    const newTask = Object.fromEntries(formData);
    const taskKey = `newTask${taskArrayLength}`;
    localStorage.setItem(taskKey,JSON.stringify(newTask));
    form.reset();
    dialog?.close();
}

//Push new list name to listsArray
export function createNewList(listsArray:string[]) {
    // console.log("createNewList");

    // const dialog = document.getElementById('newListDialog') as HTMLDialogElement;
    const form = document.getElementById('newListForm') as HTMLFormElement;
    const formData = new FormData(form);
    let thisList = document.getElementById('newList') as HTMLInputElement;    
    debugger;

    const newProject = Object.fromEntries(formData);
    console.log(newProject);


    let y:string = formData.get('newList') as string;



    listsArray.push(y);
    localStorage.setItem('myLists',JSON.stringify(listsArray));
    return listsArray;
}

//Checks if listsArray is in LS, adds if not there
export function getLists() {
    let locStore = Object.keys(localStorage);
    // let locStoreVal = Object.values(localStorage);

    if (Array.isArray(locStore)) {
        let x = locStore.find(e=>e==='myLists');
        if (x==undefined) {
            localStorage.setItem('myLists',JSON.stringify(listsArray));
        }
    }

};

export function findListArray () {
    let locStore = Object.keys(localStorage);
    if (Array.isArray(locStore)) {
        let x = locStore.find(e=>e==='myLists');
        if (x) {
            let ind = locStore.indexOf(x);
            return ind;
        }
}
};









