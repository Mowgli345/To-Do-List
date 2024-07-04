// import { format } from "../node_modules/date-fns/format";
// import { intlFormatDistance } from "../node_modules/date-fns/intlFormatDistance";



//ALL NEW FROM HERE
export function clearDOM(){
    const content = document.querySelector('.content');
    while(content?.firstChild){
        content.firstChild.remove();
       }  
    };
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
            // localStorage.setItem('myLists',JSON.stringify("My List"));
            localStorage.setItem('myLists','My List');
            return x;
        }
        else {
            return listsIndex;
        }

    } else {
        return -1;
    }

};