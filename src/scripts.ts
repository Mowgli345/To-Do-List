// import { format } from "../node_modules/date-fns/format";
// import { intlFormatDistance } from "../node_modules/date-fns/intlFormatDistance";

//APPLICATION SCRIPTS

import { createListsArray, clearDOM, renderList } from "./index";



//ALL NEW FROM HERE

//Finds myLists in LS or creates if not there  
export function findLocStoreLists():number {
    // debugger;
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

interface taskInt {
    date:string,
    details:string,
    list:string,
    status:string,
    task:string
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
        clearDOM();
        renderList(listsArray);
        form.reset();
        dialog?.close();
        return listsArray;
    }
}