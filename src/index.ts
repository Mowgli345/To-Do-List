import "../src/styles.css";
import delImg from './assets/images/delete.svg';


function addListItem() {
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
    const taskInfo = document.createElement('div');
        taskInfo.className='task-info';
        text = document.createTextNode('All the other details about this one');
        taskInfo.appendChild(text);
    const taskDue = document.createElement('div');
        taskDue.className='task-due';
        text = document.createTextNode('Tomorrow');
        taskDue.appendChild(text);
    const taskStatus = document.createElement('div');
        taskStatus.className='task-status';
        text = document.createTextNode('Not started');
        taskStatus.appendChild(text);
    const taskDelete = document.createElement('div');
        taskDelete.className='task-delete';
    const trashBin = document.createElement('img') as HTMLImageElement;
        trashBin.src=delImg;

    fragment.appendChild(list);
    list.appendChild(listItem);

    listItem.appendChild(taskDelete);
        taskDelete.appendChild(trashBin);
    listItem.appendChild(taskStatus);
    listItem.appendChild(taskDue);
    listItem.appendChild(taskInfo);
    listItem.appendChild(taskName);
        taskPriority.appendChild(circle);
    listItem.appendChild(taskPriority);

    content?.append(fragment);
    };

const newButton = document.querySelector('.newButton');
newButton?.addEventListener('click',(e:Event)=>addListItem());















