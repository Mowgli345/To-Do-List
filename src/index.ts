import "../src/styles/styles.css";
import "../src/styles/form.css";
import delImg from './assets/images/delete.svg';
import pencilImg from './assets/images/pencil.svg';
// import { createListItem, listItem, createNewList, getLists, findListsArray } from "./scripts";

import { findLocStoreLists, createNewList } from "./scripts";

//DOM-related scripts

//IIFE to store all DOM variables and event listeners
(function() {
     const newTaskButton = document.querySelector('.newTaskButton'); 
        newTaskButton?.addEventListener('click',(e:Event)=>showNewItemForm());   

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
    renderList(listsArray);  
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

//NEW LIST FROM HERE - triggers createNewList()
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
    const listItem = document.createElement('div');
        listItem.className='list-item';    
    fragment.appendChild(list);
    list.appendChild(listItem);    
    content?.append(fragment);  
    };

function showNewItemForm() {
    console.log("showNewItemForm");

    let listsArray = createListsArray();

    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='newTaskDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
        form.className='newItemForm';
        form.addEventListener('submit',(e:Event)=>{
            // createListItem(e);
            // clearList();
            // getTasks();
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
        option.setAttribute('value','my-list');
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
}

localStorage.setItem('myJohnnyJuju',JSON.stringify("Testing"));
updateDOM();