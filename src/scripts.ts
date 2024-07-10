import { format } from "../node_modules/date-fns/format";
import { intlFormatDistance } from "../node_modules/date-fns/intlFormatDistance";

//APPLICATION SCRIPTS

import { createListsArray, clearDOM, renderList } from "./index";

export class task {
    task:string;
    rawDate:Date;
    priority:string;
    status:string;
    details:string;
    list:string; 
    constructor(taskObj: {taskName:string; taskDate:string; taskPriority:string;taskStatus:string; taskDetails:string; taskList:string}) {
        this.task = taskObj.taskName;
        this.rawDate = new Date(taskObj.taskDate);
        this.priority = taskObj.taskPriority;
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

//Finds myLists in LS or creates if not there  
export function findLocStoreLists():number {
    let locStore = Object.keys(localStorage);
    let listsIndex:number;
    if (Array.isArray(locStore)) {
        listsIndex = locStore.findIndex(e=>e==='myLists');
        if (listsIndex==-1) {
            let x:number = locStore.length;
            console.log("My Lists is not in LS - from findLocSToreLists()");
            let listsArray:string[]=["My List"];
            localStorage.setItem('myLists',JSON.stringify(listsArray));
            return x;
        }
        else {
            return listsIndex;
        }
    } else {
        return -1;
    }
};

export interface taskInt {
    date:string,
    rawDate:Date,
    details:string,
    list:string,
    status:string,
    task:string,
}
export function createNewList(e:Event) {
    e.preventDefault();
    let listsArray = createListsArray();
    const dialog = document.getElementById('newListDialog') as HTMLDialogElement;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    let thisList = document.getElementById('newList') as HTMLInputElement;    
    let newList:string = formData.get('newList') as string;
    if (Array.isArray(listsArray)) {
        listsArray.push(newList);
        localStorage.setItem('myLists',JSON.stringify(listsArray));
        form.reset();
        dialog?.close();
        return listsArray;
    }
}
export function createTask(e:Event) {
    e.preventDefault();
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

