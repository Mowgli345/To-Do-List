import "../src/styles/styles.css";
import "../src/styles/form.css";
import delImg from './assets/images/delete.svg';
import pencilImg from './assets/images/pencil.svg';


import { findLocStoreLists, createNewList, createTask, taskInt, task } from "./scripts";


//DOM-related scripts

//IIFE to store all DOM variables and event listeners
(function() {
     const newTaskButton = document.querySelector('.newTaskButton'); 
        newTaskButton?.addEventListener('click',(e:Event)=>showNewTaskForm());   

    const newListButton = document.querySelector('.newListButton');        
        newListButton?.addEventListener('click',(e:Event)=>showNewListForm());

    const sort = document.querySelector('.sort');
        // sort?.addEventListener('click',(e:Event)=>showSortMenu());   
    const showInfo = document.querySelector('.task-toggle');
    const sortItems = document.querySelector('.sort-menu');
        // sortItems?.addEventListener('mouseover',(e:Event)=>sortBorderOff(e));
        // sortItems?.addEventListener('mouseout',(e:Event)=>sortBorderOn(e));
    
        //Sort Menu styling
    function sortBorderOff(e:Event) {
        let sortTag = e.target as HTMLDivElement;
        if (sortTag.nextElementSibling) {
            let nextSibling = sortTag.nextElementSibling as HTMLDivElement;
            nextSibling.style.borderTop ='0';
            sortTag.style.borderTop ='0';
        }
    }
    function sortBorderOn(e:Event) {
        let sortTag = e.target as HTMLDivElement;
        if (sortTag.nextElementSibling) {
            if (sortTag.previousElementSibling) {
            let nextSibling = sortTag.nextElementSibling as HTMLDivElement;
            nextSibling.style.borderTop ='1px solid rgb(175,172,172';
            sortTag.style.borderTop ='1px solid rgb(175,172,172';
            } else {
                let nextSibling = sortTag.nextElementSibling as HTMLDivElement;
                nextSibling.style.borderTop ='1px solid rgb(175,172,172';
            }
        }
    }
}());

function updateDOM() {
    clearDOM();
    let listsArray = createListsArray();
    let taskArray= createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    renderList(listsArray);
    renderTask(sortedTasks);
}
export function clearDOM(){
    const content = document.querySelector('.content');
    while(content?.firstChild){
        content.firstChild.remove();
       }  
    };
//Needed???
function displayLists(){
    let ind:number = findLocStoreLists();
    let locStoreArray = Object.values(localStorage);
    if (Array.isArray(locStoreArray)) {
        let listsArray:string[]=[];
                let listItem=locStoreArray[ind];
                let lists = JSON.parse(listItem);
                for (let i = 0; i<lists.length;i++) {
                    listsArray.push(lists[i]);
                }
                return listsArray; 
    } else return -1;
}
//NEW LIST FROM HERE
function showNewListForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='newListDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
        form.id='newListForm';
        form.addEventListener('submit',(e:Event)=>{
            createNewList(e);
            updateDOM();
        })

    const fieldset = document.createElement('fieldset');
        fieldset.className='newListForm';
    const list = document.createElement('ul');
    let listItem = document.createElement('li');

    let label = document.createElement('label');
        label.setAttribute('for','newList');
        let text = document.createTextNode('List');
        label.appendChild(text);
    listItem.appendChild(label);
    let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','newList');
        input.id='newList';
    listItem.appendChild(input);
    list.appendChild(listItem);   
    
    listItem = document.createElement('li');
    let buttonsRow = document.createElement('div');
        buttonsRow.className='buttonsRow';
    let button = document.createElement('button');
        text = document.createTextNode('Cancel');
        button.setAttribute('type','reset');
        button.addEventListener('click',() => {
            form.reset();
            dialog.close();
        });
    button.appendChild(text);
    buttonsRow.appendChild(button);
    button = document.createElement('button');
    text = document.createTextNode('Add list');
    button.setAttribute('type','submit');
    button.appendChild(text);
    buttonsRow.appendChild(button);    
    listItem.appendChild(buttonsRow);
    list.appendChild(listItem);     
    fieldset.appendChild(list);
    form.appendChild(fieldset);
    dialog.append(form);
    fragment.appendChild(dialog);
    content?.append(fragment);
    dialog.showModal();
}
export function createListsArray() {
    let ind:number = findLocStoreLists();
    let locStoreArray = Object.values(localStorage);
    
    if (Array.isArray(locStoreArray)) {
        let listsArray:string[]=[];
        let listItem=locStoreArray[ind];
        let lists = JSON.parse(listItem);
        for (let i = 0; i<lists.length;i++) {
            listsArray.push(lists[i]);
            }
        return listsArray;
    } else return [];
}
export function renderList(parsedList:string[]):void {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');    
    const list = document.createElement('div');
        list.className='list';
    let length = parsedList.length;
    for (let i=0; i<length;i++) {
    //Add Project heading
        const listHeading = document.createElement('div');
        listHeading.className='task-list-heading';
        const listName = document.createElement('h2');
        let text = document.createTextNode(parsedList[i]);
        listName.appendChild(text);
        listHeading.appendChild(listName);
        content?.appendChild(listHeading);
        }
    fragment.appendChild(list);
    content?.append(fragment);  
    };
function sortTaskArray(taskArray:taskInt[]) { 
    const sortedTasks:taskInt[] = taskArray.sort(function(a,b) {
        return a.rawDate.getTime() - b.rawDate.getTime();
        });
return sortedTasks;
    }
    //New Tasks
function showNewTaskForm() {
    let listsArray = createListsArray();
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='newTaskDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
        form.className='newItemForm';
        form.addEventListener('submit',(e:Event)=>{
            createTask(e);
            updateDOM();
        })
    const fieldset = document.createElement('fieldset');
    const list = document.createElement('ul');
    let listItem = document.createElement('li');

    let label = document.createElement('label');
        label.setAttribute('for','taskName');
        let text = document.createTextNode('Task');
        label.appendChild(text);
    listItem.appendChild(label);
    let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','taskName');
                input.setAttribute('value','Task #'); //Placeholder
        input.id='taskName';
    listItem.appendChild(input);
    list.appendChild(listItem);     

    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskDate');
        text = document.createTextNode('Date');
        label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
        input.setAttribute('type','date');
        input.setAttribute('name','taskDate');
        input.valueAsDate=new Date();
        input.id='taskDate';
    listItem.appendChild(input);
    list.appendChild(listItem);  
    
    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskPriority');
        text = document.createTextNode('Priority');
        label.appendChild(text);
    listItem.appendChild(label);

    let select = document.createElement('select');
        select.setAttribute('name','taskPriority');
        select.id='taskPriority';
    let option = document.createElement('option');
        option.setAttribute('value','Normal');
        text = document.createTextNode('Normal');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','High');
        text = document.createTextNode('High');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','Low');
        text = document.createTextNode('Low');
        option.appendChild(text);
        select.appendChild(option);
    listItem.appendChild(select);
    list.appendChild(listItem);  

    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskStatus');
        text = document.createTextNode('Status');
        label.appendChild(text);
    listItem.appendChild(label);

    select = document.createElement('select');
        select.setAttribute('name','taskStatus');
        select.id='taskStatus';
    option = document.createElement('option');
        option.setAttribute('value','not-started');
        text = document.createTextNode('Not Started');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','in-progress');
        text = document.createTextNode('In Progress');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','completed');
        text = document.createTextNode('Completed');
        option.appendChild(text);
        select.appendChild(option);
    listItem.appendChild(select);
    list.appendChild(listItem);  

    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskDetails');
        text = document.createTextNode('Details');
        label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','taskDetails');
        input.setAttribute('placeholder','Enter task details'); //Placeholder
        input.id='taskDetails';
    listItem.appendChild(input);
    list.appendChild(listItem);  

    //LIST NAME
    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskList');
        text = document.createTextNode('List');
        label.appendChild(text);
    listItem.appendChild(label);

    select = document.createElement('select');
        select.setAttribute('name','taskList');
        select.id='taskList';
    
    let listLength = listsArray.length;

    for (let i = 0; i<listLength; i++) {
        option = document.createElement('option');
        // option.setAttribute('value','my-list');
        option.setAttribute('placeholder','my-list');
        text = document.createTextNode(listsArray[i]);
        option.appendChild(text);
        select.appendChild(option);
    }
    listItem.appendChild(select);
    list.appendChild(listItem); 
    
    listItem = document.createElement('li');
    let buttonsRow = document.createElement('div');
        buttonsRow.className='buttonsRow';
    let button = document.createElement('button');
        text = document.createTextNode('Cancel');
        button.setAttribute('type','reset');
        button.addEventListener('click',() => {
            dialog.close()
        });
        button.appendChild(text);
        buttonsRow.appendChild(button);
    button = document.createElement('button');
        text = document.createTextNode('Add task');
        button.setAttribute('type','submit');
        button.appendChild(text);
        buttonsRow.appendChild(button);
    
    listItem.appendChild(buttonsRow);
    list.appendChild(listItem);  
        fieldset.appendChild(list);
    form.appendChild(fieldset);
    dialog.append(form);
    fragment.appendChild(dialog);
    content?.append(fragment);
    dialog.showModal();
};
function createTasksArray() {
    let x = findLocStoreLists();
    let locStoreArray = Object.values(localStorage); 
    let storageLength = window.localStorage.length;
    let taskArray:taskInt[]=[];
    if (storageLength==0) {
        console.log("No lists in storage");
        return taskArray;
    }
    else {
        if (Array.isArray(locStoreArray)) {
            for (let i = 0;i<storageLength; i++) {
                if (i===x) {
                    continue;
                }
                let thisTask = locStoreArray[i];
                let parsedTask = JSON.parse(thisTask);
                let taskObj = new task(parsedTask);
                taskArray.push(taskObj);
                }
                return taskArray;
            } else return taskArray;
        }
    };
function renderTask(taskArray:taskInt[]):void {
    taskArray.forEach(function(task) {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');

    const list = document.createElement('div');
        list.className='list';
    const listItem = document.createElement('div');
        listItem.className='list-item';

    const taskPriority = document.createElement('div');
        taskPriority.className='task-priority';
    const circle = document.createElement('div');
        circle.className='circle';
    const taskName = document.createElement('div');
        taskName.className='task-name';
        let text = document.createTextNode(task.task);
        taskName.appendChild(text);
    const taskDue = document.createElement('div');
        taskDue.className='task-due';
        text = document.createTextNode(task.date);
        taskDue.appendChild(text);

    //Adds event listener to show/hide details
    const taskToggle = document.createElement('div');
        taskToggle.className='task-toggle';
        text = document.createTextNode('+');
        taskToggle.appendChild(text);
        taskToggle.addEventListener('click',(e:Event)=>toggleInfo(e));

    //These are the toggle-info divs
    const taskInfo = document.createElement('div');
        taskInfo.className='task-info toggle';
        text = document.createTextNode(task.details);
        taskInfo.appendChild(text);

    const taskEdit = document.createElement('div');
        taskEdit.className='task-edit toggle';
    const editPencil = document.createElement('img') as HTMLImageElement;
        editPencil.src=pencilImg;

    const taskStatus = document.createElement('div');
        taskStatus.className='task-status toggle';
        text = document.createTextNode(task.status);
        taskStatus.appendChild(text);
    const taskDelete = document.createElement('div');
        taskDelete.className='task-delete toggle';
    const trashBin = document.createElement('img') as HTMLImageElement;
        trashBin.src=delImg; 
        // trashBin.addEventListener('click',(e:Event)=>deleteItem(e));   
    const taskListName = document.createElement('div');
        taskListName.className='task-list-name toggle';
        text = document.createTextNode(task.list);
        taskListName.appendChild(text);

    //Add Project heading
    // const listHeading = document.createElement('div');
    // listHeading.className='task-list-heading';
    // const heading = document.createElement('h2');
    // text = document.createTextNode(taskObj.list);
    // heading.appendChild(text);
    // listHeading.appendChild(heading);
    // content?.appendChild(listHeading);

    fragment.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(taskEdit);
        taskEdit.appendChild(editPencil);

    listItem.appendChild(taskDelete);
        taskDelete.appendChild(trashBin);
    listItem.appendChild(taskStatus);
    listItem.appendChild(taskListName);
    listItem.appendChild(taskInfo);
    listItem.appendChild(taskToggle);
    listItem.appendChild(taskDue);
    listItem.appendChild(taskName);
        taskPriority.appendChild(circle);
    listItem.appendChild(taskPriority);

    content?.append(fragment);  
    });
};

updateDOM();

//Others
function toggleInfo(e:Event) {
    const event = e.target as HTMLDivElement;  
    let thisListItem = event.parentElement;
    let itemChildren = thisListItem?.children!; 
    let itemChild= Array.from(itemChildren); 

    if (itemChild?.length>0) {
    for (let i = 0; i<itemChild?.length; i++) {
        let x = itemChild[i] as HTMLDivElement;

        if (x.classList.contains('toggle')) {
            if (x.style.display==="flex") {
                x.style.display='none'
            } else {
                x.style.display='flex'
            }
            }
        }
    }
}