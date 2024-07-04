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

interface taskInt {
    date:string,
    details:string,
    list:string,
    status:string,
    task:string
}

function updateDOM() {
    clearDOM();

    // displayLists();
    let listsArray = createListsArray();
    renderList(listsArray);  
}

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

//NEW LIST FROM HERE - triggers createNewList()
function showNewListForm() {
    console.log("showNewListForm");
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='newListDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
        form.id='newListForm';
        form.addEventListener('submit',(e:Event)=>{
            // debugger;
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
        // console.log(listsArray);
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

export function createNewList(e:Event) {
    e.preventDefault();
    // debugger;
    let listsArray = createListsArray();

    const dialog = document.getElementById('newListDialog') as HTMLDialogElement;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    let thisList = document.getElementById('newList') as HTMLInputElement;    

    let newList:string = formData.get('newList') as string;
    debugger;
    console.log(listsArray);
    console.log(newList);

    if (Array.isArray(listsArray)) {
        listsArray.push(newList);
        localStorage.setItem('myLists',JSON.stringify(listsArray));

        console.log(listsArray);

        clearDOM();

        renderList(listsArray);

        form.reset();
        dialog?.close();

        return listsArray;
}
}

function createListsArray() {
    let ind:number = findLocStoreLists();
    console.log("createListsArray");

    //6 lines straight from displayLists()

    let locStoreArray = Object.values(localStorage);
    
    if (Array.isArray(locStoreArray)) {
        let listsArray:string[]=[];
                let listItem=locStoreArray[ind];
                let lists = JSON.parse(listItem);
                debugger;
                console.log(lists);

                //I need listsArray.push(lists) for the first one and then the loop after that. Why??
                for (let i = 0; i<lists.length;i++) {
                    listsArray.push(lists[i]);
                }
                // listsArray.push(lists);
                console.log(listsArray);
                return listsArray;
    } else return [];
}

// localStorage.setItem('myJohnnyJuju',JSON.stringify("Testing"));
// updateDOM();

function initialDOM() {
    clearDOM();
    let locStore = Object.keys(localStorage);
    let listsIndex:number;
    let listsArray:string[]=[];

    if (Array.isArray(locStore)) {
        listsIndex = locStore.findIndex(e=>e==='myLists');
        debugger;
        if (listsIndex==-1) {
            let x:number = locStore.length;
            localStorage.setItem('myLists',JSON.stringify("My List"));    
            let locStoreArray = Object.values(localStorage);
        
            if (Array.isArray(locStoreArray)) {    
                let listItem=locStoreArray[x];
                let lists = JSON.parse(listItem);     
                listsArray.push(lists);
            }
        }
    }
    renderList(listsArray);  
};

localStorage.setItem('myJohnnyJuju',JSON.stringify("Testing"));
// initialDOM();
updateDOM();


