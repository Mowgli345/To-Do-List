import "../src/styles/styles.css";
import "../src/styles/form.css";
import delImg from './assets/images/delete.svg';
import pencilImg from './assets/images/pencil.svg';


import { findLocStoreLists, createNewList, createTask, taskInt, task, findMyList } from "./scripts";
//DOM-related scripts

//IIFE to store all DOM variables and event listeners
(function() {
     const newTaskButton = document.querySelector('.newTaskButton'); 
        newTaskButton?.addEventListener('click',(e:Event)=>showNewTaskForm());   

    const newListButton = document.querySelector('.newListButton');        
        newListButton?.addEventListener('click',(e:Event)=>showNewListForm());

    const newColorButton = document.querySelector('.newColorButton');        
        newColorButton?.addEventListener('click',(e:Event)=>showColorPicker());    

    const sort = document.querySelector('.sort');
        sort?.addEventListener('click',(e:Event)=>showSortMenu());   
    const showInfo = document.querySelector('.task-toggle');
    const sortItems = document.querySelector('.sort-menu');
        sortItems?.addEventListener('mouseover',(e:Event)=>sortBorderOff(e));
        sortItems?.addEventListener('mouseout',(e:Event)=>sortBorderOn(e));

    //Sort Menu Options - To Reduce????
    const sortTask = document.getElementById('sort-task');
        sortTask?.addEventListener('click',(e:Event)=>sortByTask(e));
    const sortDate = document.getElementById('sort-date');
        sortDate?.addEventListener('click',(e:Event)=>sortByDate(e));
    const sortPriority = document.getElementById('sort-priority');
        sortPriority?.addEventListener('click',(e:Event)=>sortByPriority(e));
    const sortStatus = document.getElementById('sort-status');
        sortStatus?.addEventListener('click',(e:Event)=>sortByStatus(e));   
    
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
    let taskArray= createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    let sortField = "list";
    renderTask(sortField, sortedTasks);
    addListToggle();
}

export function clearDOM(){
    const content = document.querySelector('.content');
    while(content?.firstChild){
        content.firstChild.remove();
       }  
    };

//NEW LIST/TASK Forms
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
        input.setAttribute('required','true');
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
        input.setAttribute('required','true');
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
        option.setAttribute('value','Not Started');
        text = document.createTextNode('Not Started');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','In Progress');
        text = document.createTextNode('In Progress');
        option.appendChild(text);
        select.appendChild(option);
    option = document.createElement('option');
        option.setAttribute('value','Completed');
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

export function createListsArray() {
    let ind:number = findLocStoreLists();
    let locStoreArray = Object.values(localStorage);
    if (Array.isArray(locStoreArray)) {
        let listsArray:string[]=[];
        let listItem=locStoreArray[ind];
        let lists = JSON.parse(listItem);
        let x = locStoreArray[ind];
        // if (lists.length == 0) {
        //     lists.push("My List");            
        //     }
        for (let i = 0; i<lists.length;i++) {
            listsArray.push(lists[i]);
            }
            findMyList(listsArray);
        return listsArray;
    } else return [];
}
function createTasksArray() {
    let x = findLocStoreLists();
    let locStoreArray = Object.values(localStorage); 
    let storageLength = window.localStorage.length;
    let taskArray:taskInt[]=[];
    if (storageLength==0) {
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

//Returns tasks in date order
function sortTaskArray(taskArray:taskInt[]) { 
    const sortedTasks:taskInt[] = taskArray.sort(function(a,b) {
        return a.rawDate.getTime() - b.rawDate.getTime();
        });
return sortedTasks;
};
function findList(thisList:string):HTMLDivElement {    
    let listHeadings = document.querySelectorAll("h2");
    let taskList = thisList;
    for (let i=0; i<listHeadings.length;i++) {
        let listName =listHeadings[i].textContent;
        if (taskList == listName) {
            let grabElement = listHeadings[i].parentElement?.parentElement;
            return grabElement as HTMLDivElement;
            }
        }  
        //Adds this task's list to LS if name not found in list headings
        let listsArray = createListsArray();
        //Repeats from createNewList;
        if (Array.isArray(listsArray)) {
            listsArray.push(taskList);
            localStorage.setItem('myLists',JSON.stringify(listsArray));
        }
        //Adds this list name to DOM if not already there
        //Repeats from renderList
        const fragment = new DocumentFragment;
        const content = document.querySelector('.content');    
        const list = document.createElement('div');
            list.className='list';
        let grabElement = document.createElement('div');
        grabElement.className='task-list';
        const listName = document.createElement('h2');
        let text = document.createTextNode(taskList);
        listName.appendChild(text);
        grabElement.appendChild(listName);
        content?.appendChild(grabElement);          
        fragment.appendChild(list);
        content?.append(fragment);  
        return grabElement as HTMLDivElement;
}
function renderTask(sortField:string, taskArray:taskInt[]):void {
    //Finds list on DOM to attach task
    taskArray.forEach(function(task) {
        let thisList;
        if (sortField == "priority") {
            thisList = task.priority
        }
        else if (sortField == "status") {
            thisList = task.status
        }
        else if (sortField == "date") {
            thisList = task.date
        }
        else {
            thisList=task.list;
        }    
        let grabElement = findList(thisList);

        const fragment = new DocumentFragment;
        const content = document.querySelector('.content');

        const taskItem = document.createElement('div');
            taskItem.className='task-item';
            taskItem.dataset.id=task.id;

        const taskPriority = document.createElement('div');
            taskPriority.className='task-priority';
        const circle = document.createElement('div');
            circle.className='circle';
            if (task.priority=='High') {
                circle.style.backgroundColor='red';
            }
            else if (task.priority=='Low') {
                circle.style.backgroundColor='rgb(57, 162, 211)';
            }
            else {
                circle.style.backgroundColor='green';
            }

        const taskName = document.createElement('div');
            taskName.className='task-name';
            let text = document.createTextNode(task.task);
            taskName.appendChild(text);

        const taskDue = document.createElement('div');
            taskDue.className='task-due';
            text = document.createTextNode(task.date);
            taskDue.appendChild(text);
            if (task.rawDate < new Date()) {
                taskDue.style.color="red";
                taskDue.style.fontStyle="italic";
            }
        //Adds event listener to show/hide details
        const taskToggle = document.createElement('div');
            taskToggle.className='task-toggle';
            text = document.createTextNode('+');
            taskToggle.appendChild(text);
            taskToggle.addEventListener('click',(e:Event)=>toggleInfo(e));

        //These are the toggle-info divs
        const taskInfo = document.createElement('div');
            taskInfo.className='task-info';
            text = document.createTextNode(task.details);
            taskInfo.appendChild(text);

        const taskEdit = document.createElement('div');
            taskEdit.className='task-edit';
        const editPencil = document.createElement('img') as HTMLImageElement;
            editPencil.src=pencilImg;
            editPencil.addEventListener('click',(e:Event)=>editTask(e));

        const taskStatus = document.createElement('div');
            taskStatus.className='task-status';
            text = document.createTextNode(task.status);
            taskStatus.appendChild(text);
        const taskDelete = document.createElement('div');
            taskDelete.className='task-delete';
        const trashBin = document.createElement('img') as HTMLImageElement;
            trashBin.src=delImg; 
            trashBin.addEventListener('click',(e:Event)=>{
                deleteItem(e);
                updateDOM();
            });   
        const taskListName = document.createElement('div');
            taskListName.className='task-list-name';
            text = document.createTextNode(task.list);
            taskListName.appendChild(text);        

        let inner = grabElement.querySelector('.inner');
            inner!.appendChild(taskItem);

        taskItem.appendChild(taskPriority);
            taskPriority.appendChild(circle); 
        taskItem.appendChild(taskName);
        taskItem.appendChild(taskDue);
        taskItem.appendChild(taskToggle);

        const taskInfoWrapper = document.createElement("div");
            taskInfoWrapper.className='taskInfoWrapper';

        const taskWrapper = document.createElement('div');
            taskWrapper.className='taskWrapper';

        taskItem.appendChild(taskWrapper);

        taskWrapper.appendChild(taskListName);
        taskWrapper.appendChild(taskEdit);
            taskEdit.appendChild(editPencil);
        taskWrapper.appendChild(taskStatus);   
        taskWrapper.appendChild(taskDelete);
            taskDelete.appendChild(trashBin); 
        taskWrapper.appendChild(taskInfo);  
    });

};

function toggleListDisplay(e:Event) {
    let thisDiv = e.target as HTMLDivElement;
    if (thisDiv.className =="task-list-heading"){
        let listChildren = thisDiv.children;
        if (listChildren!.length>1) {
            thisDiv?.children[1].classList.toggle('hide');
            }  
        }
    else return;
}
export function renderList(parsedList:string[]):void {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');    
    const list = document.createElement('div');
        list.className='list';
    let length = parsedList.length;

    for (let i=0; i<length;i++) {
        const taskList = document.createElement('div');
        taskList.className='task-list';
        const taskListHeading = document.createElement('div');
        taskListHeading.className='task-list-heading';

        const listName = document.createElement("div");
        listName.className="listNameTitle";
        const listNameTitle = document.createElement('h2');
        let text = document.createTextNode(parsedList[i]);
        listNameTitle.appendChild(text);
        listName.appendChild(listNameTitle);

        const listDelete = document.createElement('div');
            listDelete.className='list-delete hide';

        const trashBin = document.createElement('img') as HTMLImageElement;
            trashBin.src=delImg; 
            trashBin.addEventListener('click',(e:Event)=>{
                checkListTasks(e);
            });  
        listDelete.appendChild(trashBin);

        const listToggle = document.createElement('div');
        listToggle.className='list-toggle minus';
        text = document.createTextNode("\u2013");
        listToggle.appendChild(text);
        listToggle.addEventListener('click',(e:Event)=>toggleList(e));
            taskListHeading.appendChild(listName);
            taskListHeading.appendChild(listDelete); 
            taskListHeading.appendChild(listToggle);
                 taskListHeading.addEventListener('mouseenter',(e:Event)=>{
                    toggleListDisplay(e);
                    });
                taskListHeading.addEventListener('mouseleave',(e:Event)=>{
                    toggleListDisplay(e);
                    });  
        const taskListWrapper = document.createElement('div');
            taskListWrapper.className='taskListWrapper showList';
        let inner = document.createElement('div');
            inner.className='inner';
            taskListWrapper.appendChild(inner);
            taskListHeading.appendChild(taskListWrapper);     
        taskList.appendChild(taskListHeading);
        content?.appendChild(taskList);
        }
    content?.append(fragment);  
};
    
//Others
function toggleInfo(e:Event) {
    const event = e.target as HTMLDivElement;  
    let thisListItem = event.parentElement;
    let taskWrapper = thisListItem?.querySelector('.taskWrapper');
    if (taskWrapper) taskWrapper.classList.toggle('showTask'); 
    if (taskWrapper?.classList.contains('showTask')){
        event.textContent="\u2013";
    }
    else {
        event.textContent="+";
    };
};
function addListToggle() {
    let listHeadings = document.querySelectorAll(".task-list");
    listHeadings.forEach((heading)=> {
        let headingDiv = heading.firstChild as HTMLDivElement;
        if (headingDiv.childElementCount<2) {
            let noTasks = document.createElement("div");
            noTasks.className="noTasksMsg";
            let text = document.createTextNode("There are no tasks");
            noTasks.appendChild(text);
            headingDiv.appendChild(noTasks);
            let thisToggle = heading.firstElementChild?.lastElementChild;
            thisToggle!.textContent="";
        }
    });
};
function toggleList(e:Event) {
    const event = e.target as HTMLDivElement;  
    let thisList = event.parentElement?.parentElement?.firstChild! as HTMLDivElement;

    const taskListWrapper = thisList.querySelector('.taskListWrapper');
    if (taskListWrapper) taskListWrapper.classList.toggle('showList');
    if (taskListWrapper?.classList.contains('showList')){
        event.textContent="\u2013";
    }
    else {
        event.textContent="+";
    };

}
function deleteItem(e:Event){
    if (e.target instanceof Element) {
        let task = e.target.parentElement?.parentElement;
        let id = task?.dataset.id!;
        localStorage.removeItem(id);
    }
}
function showSortMenu() {
    const sortMenu = document.querySelector('.sort-menu') as HTMLDivElement;
    if (sortMenu.style.display==='block') {
        sortMenu.style.display='none'
    } else {
        sortMenu.style.display='block'
    }    
}
function editTask(e:Event){
    if (e.target instanceof Element) {
        let task = e.target.parentElement?.parentElement;
        let id = task?.dataset.id!;
        let thisOne = localStorage.getItem(id);
        let myTask = JSON.parse(thisOne!);
        localStorage.removeItem(id);
        fillEditForm();

        function fillEditForm() {
        showNewTaskForm();
            const taskName = document.querySelector('[name="taskName"]');
                taskName?.setAttribute('value',myTask.taskName);

            const taskDate = document.querySelector('[name="taskDate"]') as HTMLInputElement;
                taskDate.value=myTask.taskDate;

            const taskPriority = document.querySelector('[name="taskPriority"]') as HTMLInputElement;
                taskPriority.value=myTask.taskPriority;

            const taskStatus = document.querySelector('[name="taskStatus"]') as HTMLInputElement;
                taskStatus.value=myTask.taskStatus;

            const taskDetails = document.querySelector('[name="taskDetails"]') as HTMLInputElement;
                taskDetails.value= myTask.taskDetails;

            const taskList = document.querySelector('[name="taskList"]') as HTMLInputElement;
                taskList.value = myTask.taskList;    
        };
    }
}
function sortByTask(e:Event){
updateDOM();

};
function sortByPriority(e:Event){
    clearDOM();
    let listsArray = ["Normal","High","Low"];
    renderList(listsArray);
    let taskArray= createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    let sortField = "priority";
    renderTask(sortField, sortedTasks);

    // renderSortedTask(sortedTasks);
};
function sortByStatus(e:Event){
    clearDOM();
    let listsArray = ["Not Started","In Progress","Completed"];
    renderList(listsArray);
    let taskArray= createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    let sortField = "status";
    renderTask(sortField, sortedTasks);
};
function sortByDate(e:Event){
    clearDOM();
    let taskArray= createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);

    sortedTasks.forEach(function(task) { 
        const fragment = new DocumentFragment;
        const content = document.querySelector('.content');
        const listItem = document.createElement('div');
            listItem.className='task-item';
            listItem.dataset.id=task.id;

        const taskPriority = document.createElement('div');
            taskPriority.className='task-priority';
        const circle = document.createElement('div');
            circle.className='circle';
            if (task.priority=='High') {
                circle.style.backgroundColor='red';
            }
            if (task.priority=='Low') {
                circle.style.backgroundColor='rgb(57, 162, 211)';
            };

        const taskName = document.createElement('div');
            taskName.className='task-name';
            let text = document.createTextNode(task.task);
            taskName.appendChild(text);

        const taskDue = document.createElement('div');
            taskDue.className='task-due';
            text = document.createTextNode(task.date);
            taskDue.appendChild(text);
            if (task.rawDate < new Date()) {
                taskDue.style.color="red";
                taskDue.style.fontStyle="italic";
            }
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
            editPencil.addEventListener('click',(e:Event)=>editTask(e));

        const taskStatus = document.createElement('div');
            taskStatus.className='task-status toggle';
            text = document.createTextNode(task.status);
            taskStatus.appendChild(text);
        const taskDelete = document.createElement('div');
            taskDelete.className='task-delete toggle';
        const trashBin = document.createElement('img') as HTMLImageElement;
            trashBin.src=delImg; 
            trashBin.addEventListener('click',(e:Event)=>{
                deleteItem(e);
                updateDOM();
            });   
        const taskListName = document.createElement('div');
            taskListName.className='task-list-name toggle';
            text = document.createTextNode(task.list);
            taskListName.appendChild(text);

        content!.appendChild(listItem);
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
        listItem.appendChild(taskPriority);
        taskPriority.appendChild(circle);
    });    
}; 
function renderSortedTask(taskArray:taskInt[]):void {
    //Finds list on DOM to attach task
    function findList(thisList:string):HTMLDivElement {    
        let listHeadings = document.querySelectorAll("h2");
        let taskList = thisList;
        for (let i=0; i<listHeadings.length;i++) {
            let listName =listHeadings[i].textContent;
            if (taskList == listName) {
                let grabElement = listHeadings[i].parentElement;
                return grabElement as HTMLDivElement;
                }
            }  
            //Adds this task's list to LS if name not found in list headings
            let listsArray = createListsArray();
            //Repeats from createNewList;
            if (Array.isArray(listsArray)) {
                listsArray.push(taskList);
                localStorage.setItem('myLists',JSON.stringify(listsArray));
            }
            //Adds this list name to DOM if not already there
            //Repeats from renderList
            const fragment = new DocumentFragment;
            const content = document.querySelector('.content');    
            const list = document.createElement('div');
                list.className='list';
            let grabElement = document.createElement('div');
            grabElement.className='task-list-heading';
            const listName = document.createElement('h2');
            let text = document.createTextNode(taskList);
            listName.appendChild(text);
            grabElement.appendChild(listName);
            content?.appendChild(grabElement);          
            fragment.appendChild(list);
            content?.append(fragment);  
            return grabElement as HTMLDivElement;
    }
    taskArray.forEach(function(task) {
        let thisList = task.status;  
        let grabElement = findList(thisList);

        const fragment = new DocumentFragment;
        const content = document.querySelector('.content');

        const listItem = document.createElement('div');
            listItem.className='task-item';
            listItem.dataset.id=task.id;

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
            trashBin.addEventListener('click',(e:Event)=>{
                deleteItem(e);
                updateDOM();
            });   
        const taskListName = document.createElement('div');
            taskListName.className='task-list-name toggle';
            text = document.createTextNode(task.list);
            taskListName.appendChild(text);

        grabElement?.appendChild(listItem);

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
    });
};

function showColorPicker() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='newColorDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
        form.id='newColorForm';

    const closeDialog = document.createElement('button');
        closeDialog.id="closeDialog";
        closeDialog.setAttribute('type','submit');
        let text = document.createTextNode('X');
        closeDialog.appendChild(text);
        form.appendChild(closeDialog);
        closeDialog.addEventListener('click',() => {
            dialog.close();
        });

    const list = document.createElement('ul');

    let listItem = document.createElement('li');
        listItem.className="circle circle-blue";
        listItem.addEventListener('click',(e:Event)=>{
                let color = "blue";
                changeColor(color);
                updateDOM();
                })
        list.appendChild(listItem);  

    listItem = document.createElement('li');
        listItem.className="circle circle-green";
        listItem.addEventListener('click',(e:Event)=>{
            let color = "green";
            changeColor(color);
            updateDOM();
            })
        list.appendChild(listItem);  

    listItem = document.createElement('li');
        listItem.className="circle circle-orange";
        listItem.addEventListener('click',(e:Event)=>{
            let color = "orange";
            changeColor(color);
            updateDOM();
            })
        list.appendChild(listItem);    

    listItem = document.createElement('li');
        listItem.className="circle circle-grey";
        listItem.addEventListener('click',(e:Event)=>{
            let color = "grey";
            changeColor(color);
            updateDOM();
            })
        list.appendChild(listItem);    

    listItem = document.createElement('li');
        listItem.className="circle circle-black";
        listItem.addEventListener('click',(e:Event)=>{
            let color = "black";
            changeColor(color);
            updateDOM();
            })
        list.appendChild(listItem);  

    form.appendChild(list);
    dialog.append(form);
    fragment.appendChild(dialog);
    content?.append(fragment);
    dialog.showModal();
}
function changeColor(color:string) {
    document.documentElement.className = color;
}
function checkListTasks(e:Event) {
    if (e.target instanceof Element) {
        let list = e.target.parentElement?.parentElement as HTMLDivElement;
        if (list?.nextElementSibling?.className == "task-item") {
                    showListDeleteConfirm(list);
                }
        else {
            deleteList(list);
        }
    }
}
function deleteList(list:HTMLDivElement){
        let id = list?.firstChild?.textContent;
        let myLists = localStorage.getItem('myLists');
        localStorage.removeItem(myLists!);
        let myParsedList = JSON.parse(myLists!); 
        let ind = myParsedList.indexOf(id);
        if (ind>-1) {
            myParsedList.splice(ind,1);
        }
        localStorage.setItem('myLists',JSON.stringify(myParsedList));        
        let listName:string= String(id);  
        removeListTasks(listName);
        updateDOM();
}
function showListDeleteConfirm(list:HTMLDivElement) {
    let confirmDelete = false;
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
        dialog.id='confirmDeleteDialog';
    const form = document.createElement('form');
        form.setAttribute('method','dialog');
    let msg = document.createElement('div');
    msg.className ='deleteConfirmMsg';
        let text = document.createTextNode('There are tasks associated with this list. \nAre you sure you want to delete?');
    msg.appendChild(text);

    let buttonsRow = document.createElement('div');
        buttonsRow.className='buttonsRow';
    let button = document.createElement('button');
        text = document.createTextNode('Delete');
        button.addEventListener('click',(e:Event) => {
            e.preventDefault();
            deleteList(list);
            dialog.close();
        });
    button.appendChild(text);
    buttonsRow.appendChild(button);

    button = document.createElement('button');
    button.setAttribute('type','submit');
    text = document.createTextNode('Cancel');
    button.addEventListener('click',() => {
        confirmDelete = false;
        return confirmDelete;
    });
    button.appendChild(text);
    buttonsRow.appendChild(button);

    form.append(msg);
    form.appendChild(buttonsRow);
    dialog.appendChild(form);
    fragment.appendChild(dialog);
    content?.append(fragment);
    dialog.showModal();
}
function removeListTasks(list:string) {
    Object.keys(localStorage).forEach(function(key){
        let thisKey = JSON.parse(localStorage.getItem(key)!);
        if (thisKey.taskList == list) {
            localStorage.removeItem(key);
        };
    })
}

updateDOM();

// EventListenerPractice
function scriptsPractice() {
    const content = document.querySelector('.content');      
    let div1= document.createElement("div");
        div1.className="div1";
        content?.appendChild(div1);
    let div2= document.createElement("div");
        div2.className="div2";
        div1.appendChild(div2);
    let div3= document.createElement("div");
        div3.className="div3";
        div2.appendChild(div3);

        let eventType = "mouseenter";
        // let eventType = "mouseover";
        // let eventType = "click";

    div1.addEventListener(eventType,(e:Event) =>{
        mouseEvent(e, "Blue (1)");
    });
    // div2.addEventListener(eventType,(e:Event)=> {
    //     mouseEvent(e, "Red (2)");
    // });
    // div3.addEventListener(eventType,(e:Event)=> {
    //     mouseEvent(e, "Green (3)");
    // });
}
function mouseEvent (e:Event, text:string) {
    console.log(`${text}`);
    console.log(e.target);
    console.log(e.currentTarget);
    // let x = e.target as HTMLDivElement;
    // x.style.backgroundColor="yellow";    
}
// scriptsPractice();

function practicemouseEvent(e:Event) {
    console.log(e.target);
}



