export {};

console.log('Hello from scripts');

class listItem{
    task:string;
    date:Date;
    status:string;
    details:string;
    list:string; 
    constructor(task:string, date:Date, status:string, details:string, list:string) {
        this.task = task;
        this.date = date;
        this.status = status;
        this.details = details;
        this.list = list;
        }
}

const form = document.querySelector('.newItemForm') as HTMLFormElement;
if (form) {
form.addEventListener('submit',(e:Event)=>{
    debugger;
    e.preventDefault();
    console.log(e.target);
    // const taskFormData = new FormData(e.target as );
});
};


export function createListItem(e:Event) {
    e.preventDefault();
    console.log(e.target);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(form);
    console.log(formData);
    for (const [key, value] of formData) {
        console.log(value);
    }
}
