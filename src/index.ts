import "../src/styles/styles.css";
import "../src/styles/form.css";
import delImg from './assets/images/delete.svg';
import pencilImg from './assets/images/pencil.svg';


function renderListItem() {
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
        let text = document.createTextNode('This is the next to-do item');
        taskName.appendChild(text);
    const taskDue = document.createElement('div');
        taskDue.className='task-due';
        text = document.createTextNode('Tomorrow');
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
        text = document.createTextNode('All the other details about this one');
        taskInfo.appendChild(text);


    const taskEdit = document.createElement('div');
        taskEdit.className='task-edit toggle';
    const editPencil = document.createElement('img') as HTMLImageElement;
        editPencil.src=pencilImg;




    const taskStatus = document.createElement('div');
        taskStatus.className='task-status toggle';
        text = document.createTextNode('Not started');
        taskStatus.appendChild(text);
    const taskDelete = document.createElement('div');
        taskDelete.className='task-delete toggle';
    const trashBin = document.createElement('img') as HTMLImageElement;
        trashBin.src=delImg; 
        trashBin.addEventListener('click',(e:Event)=>deleteItem(e));   
    const taskListName = document.createElement('div');
        taskListName.className='task-list-name toggle';
        text = document.createTextNode('Project 2');
        taskListName.appendChild(text);


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


    //Ad Project heading
    const listHeading = document.createElement('div');
        listHeading.className='task-list-heading';
    const heading = document.createElement('h2');
        text = document.createTextNode('Project 2');
        heading.appendChild(text);
        listHeading.appendChild(heading);
        content?.appendChild(listHeading);
    };

const newTaskButton = document.querySelector('.newTaskButton');
// newTaskButton?.addEventListener('click',(e:Event)=>renderListItem());

newTaskButton?.addEventListener('click',(e:Event)=>showNewItemForm());


const newListButton = document.querySelector('.newListButton');
newListButton?.addEventListener('click',(e:Event)=>showNewListForm());


const showInfo = document.querySelector('.task-toggle');

//Expand/Hide List details
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

function deleteItem(e:Event) {
    const event = e.target as HTMLDivElement;
    let thisListItem = event.parentElement?.parentElement;
    console.log(thisListItem);
}

function showNewItemForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');

    const dialog = document.createElement('dialog');
        dialog.id='newTaskDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
    const fieldset = document.createElement('fieldset');
        fieldset.className='newItemForm';
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
        input.setAttribute('type','text');
        input.setAttribute('name','taskDate');
        input.id='taskDate';
    listItem.appendChild(input);
    list.appendChild(listItem);  

    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskPriority');
        text = document.createTextNode('Priority');
        label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','taskPriority');
        input.setAttribute('value','Normal');
        input.id='taskPriority';
    listItem.appendChild(input);
    list.appendChild(listItem);  
    
    listItem = document.createElement('li');
    label = document.createElement('label');
        label.setAttribute('for','taskStatus');
        text = document.createTextNode('Status');
        label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('name','taskStatus');
        input.setAttribute('value','Not started');
        input.id='taskStatus';
    listItem.appendChild(input);
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
        input.id='taskDetails';
    listItem.appendChild(input);
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

function showNewListForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');

    const dialog = document.createElement('dialog');
        dialog.id='newListDialog';

    const form = document.createElement('form');
        form.setAttribute('method','dialog');
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
            dialog.close()
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
