/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListItem: () => (/* binding */ createListItem)
/* harmony export */ });
console.log('Hello from scripts');
class listItem {
    constructor(task, date, status, details, list) {
        this.task = task;
        this.date = date;
        this.status = status;
        this.details = details;
        this.list = list;
    }
}
// const form = document.querySelector('.newItemForm') as HTMLFormElement;
// if (form) {
// form.addEventListener('submit',(e:Event)=>{
//     debugger;
//     e.preventDefault();
//     console.log(e.target);
//     // const taskFormData = new FormData(e.target as );
// });
// };
function createListItem(e) {
    e.preventDefault();
    // console.log(e.target);
    const dialog = document.getElementById('newTaskDialog');
    const form = e.target;
    const formData = new FormData(form);
    formData.forEach((value, key) => (console.log(value)));
    formData.forEach((value, key) => (console.log(key)));
    let data = Object.fromEntries(formData);
    console.log(data);
    // let listArgs: [string,Date,string,string,string]
    let listArgs = [];
    // dialog?.close();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0pBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVsQyxNQUFNLFFBQVE7SUFNVixZQUFZLElBQVcsRUFBRSxJQUFTLEVBQUUsTUFBYSxFQUFFLE9BQWMsRUFBRSxJQUFXO1FBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLENBQUM7Q0FDUjtBQUVELDBFQUEwRTtBQUMxRSxjQUFjO0FBQ2QsOENBQThDO0FBQzlDLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLDBEQUEwRDtBQUMxRCxNQUFNO0FBQ04sS0FBSztBQUVFLFNBQVMsY0FBYyxDQUFDLENBQU87SUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QjtJQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztJQUM3RSxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsTUFBeUIsQ0FBQztJQUN6QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQixtREFBbUQ7SUFDbkQsSUFBSSxRQUFRLEdBQUMsRUFBRSxDQUFDO0lBRWhCLG1CQUFtQjtBQUV2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5jb25zb2xlLmxvZygnSGVsbG8gZnJvbSBzY3JpcHRzJyk7XG5cbmNsYXNzIGxpc3RJdGVte1xuICAgIHRhc2s6c3RyaW5nO1xuICAgIGRhdGU6RGF0ZTtcbiAgICBzdGF0dXM6c3RyaW5nO1xuICAgIGRldGFpbHM6c3RyaW5nO1xuICAgIGxpc3Q6c3RyaW5nOyBcbiAgICBjb25zdHJ1Y3Rvcih0YXNrOnN0cmluZywgZGF0ZTpEYXRlLCBzdGF0dXM6c3RyaW5nLCBkZXRhaWxzOnN0cmluZywgbGlzdDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIH1cbn1cblxuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdJdGVtRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGlmIChmb3JtKSB7XG4vLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGU6RXZlbnQpPT57XG4vLyAgICAgZGVidWdnZXI7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgICAvLyBjb25zdCB0YXNrRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQgYXMgKTtcbi8vIH0pO1xuLy8gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKGU6RXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRGlhbG9nJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLGtleSk9Pihjb25zb2xlLmxvZyh2YWx1ZSkpKTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSxrZXkpPT4oY29uc29sZS5sb2coa2V5KSkpO1xuXG4gICAgbGV0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpOyAgXG5cbiAgICAvLyBsZXQgbGlzdEFyZ3M6IFtzdHJpbmcsRGF0ZSxzdHJpbmcsc3RyaW5nLHN0cmluZ11cbiAgICBsZXQgbGlzdEFyZ3M9W107XG5cbiAgICAvLyBkaWFsb2c/LmNsb3NlKCk7XG5cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9