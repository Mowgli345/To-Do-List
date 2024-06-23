import { format } from "../node_modules/date-fns/format";
import { intlFormatDistance } from "../node_modules/date-fns/intlFormatDistance";

export {};

console.log('Hello from scripts');

export class listItem {
    task:string;
    // date:Date;  //CHANGE TO DATE format
    rawDate:string;
    status:string;
    details:string;
    list:string; 
    constructor(taskObj: {taskName:string; taskDate:string; taskStatus:string; taskDetails:string; taskList:string}) {
        this.task = taskObj.taskName;
        this.rawDate = taskObj.taskDate;
        this.status = taskObj.taskStatus;
        this.details = taskObj.taskDetails;
        this.list = taskObj.taskList;
        }
    get date() {
        let now = new Date();
        let date = new Date (this.rawDate);
        let dateDiff = (date.getTime() - now.getTime())/(1000*60*60*24);
        console.log(dateDiff);
        if (dateDiff<-366) {
            console.log('dateDiff+366');
            let myDate = intlFormatDistance(date,now,{unit:'year'})
            return myDate;
        }
        else if (dateDiff>-366 && dateDiff<=-56){
            console.log('dateDiff<-366');
            let myDate = intlFormatDistance(date,now,{unit:'month'})
            return myDate;
        }
        else if (dateDiff>-56 && dateDiff<=-15){
            console.log('dateDiff<-15');
            let myDate = intlFormatDistance(date,now,{unit:'week'})
            return myDate;
        }     
        else if (dateDiff>-15 && dateDiff<=15) {
            console.log('dateDiff<1');
            let myDate = intlFormatDistance(date,now,{unit:'day'})
            return myDate;
        }
        else {    
            console.log('else');
            let myDate = format(new Date(this.rawDate),'PP');
            return myDate;
        }







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









