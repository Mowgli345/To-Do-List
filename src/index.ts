import "../src/styles/styles.css";
import "../src/styles/form.css";
import delImg from './assets/images/delete.svg';
import pencilImg from './assets/images/pencil.svg';
// import { createListItem, listItem, createNewList, getLists, findListsArray } from "./scripts";

import { clearDOM, findLocStoreLists } from "./scripts";



//IIFE to store all DOM variables and event listeners
(function() {
     const newTaskButton = document.querySelector('.newTaskButton'); 
        // newTaskButton?.addEventListener('click',(e:Event)=>showNewItemForm(listsArray));   

    const newListButton = document.querySelector('.newListButton');        
        // newListButton?.addEventListener('click',(e:Event)=>showNewListForm(listsArray));

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

interface taskInt {
    date:string,
    details:string,
    list:string,
    status:string,
    task:string
}

function updateDOM() {
    clearDOM();
    let ind:number = findLocStoreLists();
    displayLists(ind);
}

// localStorage.setItem('myJohnnyJuju',JSON.stringify("Testing"));
updateDOM();

function displayLists(ind:number){
    debugger;
    let locStoreArray = Object.values(localStorage);
    if (Array.isArray(locStoreArray)) {
        let listsArray:string[]=[];
                let listItem=locStoreArray[ind];
                let lists = JSON.parse(listItem);
                listsArray.push(lists);
                renderList(listsArray);  
    }
}

function renderList(parsedList:string[]):void {
    console.log("renderList");
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