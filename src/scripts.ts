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
export function findLocStoreLists () {
    debugger;
    let locStore = Object.keys(localStorage);
    if (Array.isArray(locStore)) {
        let x:number = locStore.findIndex(e=>e==='myLists');
        if (x>=0) {
            return;
        }
        else {
            console.log("My Lists is not in LS - from findLocSToreLists()");
            localStorage.setItem('myLists',JSON.stringify("My List"));
        }
}
};