/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/

// console.log('Hello again');
// localStorage.setItem("name","Jimmy");
// const myLocal = localStorage.getItem("name");
// console.log(myLocal);
// localStorage.setItem("age","25");
// localStorage.setItem("name","Johnny");
// console.log(window.document);
// console.log(window.document.title);
// console.log(window.localStorage);
// console.log(window.sessionStorage);
// console.log(window.localStorage.length);
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.getItem("name"));
// let person: object = { name: "Jimmy4", age: 25 };
//     localStorage.setItem("user11", JSON.stringify(person));
// person = { name: "Johnny4", age: 32 };
//     localStorage.setItem("user22", JSON.stringify(person));
// person = { name: "Jackie5", age: 20 };
//     localStorage.setItem("user33", JSON.stringify(person));
// console.log(localStorage.getItem("user1")); 
// console.log(localStorage.getItem("user23.name")); 
// let x: string = localStorage.getItem('user')!;
// let b:string = JSON.parse(x);
// console.log(x);
// let a = JSON.parse(localStorage.getItem('user')!);
// console.log(a);
// let y:string = localStorage.getItem(JSON.parse('user'))!; 
// console.log(y);
// console.log(localStorage.getItem(JSON.parse('user'))!);
// console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
// formData.forEach((value,key)=>(console.log(value)));
// formData.forEach((value,key)=>(console.log(key)));
// const allKeys = Object.keys(localStorage);
// console.log(allKeys.map(key=>localStorage.getItem(key)));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDhCQUE4QjtBQUU5Qix3Q0FBd0M7QUFDeEMsZ0RBQWdEO0FBQ2hELHdCQUF3QjtBQUN4QixvQ0FBb0M7QUFDcEMseUNBQXlDO0FBR3pDLGdDQUFnQztBQUNoQyxzQ0FBc0M7QUFDdEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUV0QywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLG9EQUFvRDtBQUdwRCxvREFBb0Q7QUFDcEQsOERBQThEO0FBRTlELHlDQUF5QztBQUN6Qyw4REFBOEQ7QUFFOUQseUNBQXlDO0FBQ3pDLDhEQUE4RDtBQUc5RCwrQ0FBK0M7QUFDL0MscURBQXFEO0FBSXJELGlEQUFpRDtBQUNqRCxnQ0FBZ0M7QUFDaEMsa0JBQWtCO0FBRWxCLHFEQUFxRDtBQUNyRCxrQkFBa0I7QUFHbEIsNkRBQTZEO0FBQzdELGtCQUFrQjtBQUVsQiwwREFBMEQ7QUFJMUQsNkVBQTZFO0FBRTdFLHVEQUF1RDtBQUN2RCxxREFBcUQ7QUFFckQsNkNBQTZDO0FBQzdDLDREQUE0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY29uc29sZS5sb2coJ0hlbGxvIGFnYWluJyk7XG5cbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLFwiSmltbXlcIik7XG4vLyBjb25zdCBteUxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpO1xuLy8gY29uc29sZS5sb2cobXlMb2NhbCk7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFnZVwiLFwiMjVcIik7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIixcIkpvaG5ueVwiKTtcblxuXG4vLyBjb25zb2xlLmxvZyh3aW5kb3cuZG9jdW1lbnQpO1xuLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50LnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xuLy8gY29uc29sZS5sb2cod2luZG93LnNlc3Npb25TdG9yYWdlKTtcblxuLy8gY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgpO1xuLy8gY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5rZXkoMCkpO1xuLy8gY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSk7XG5cblxuLy8gbGV0IHBlcnNvbjogb2JqZWN0ID0geyBuYW1lOiBcIkppbW15NFwiLCBhZ2U6IDI1IH07XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyMTFcIiwgSlNPTi5zdHJpbmdpZnkocGVyc29uKSk7XG5cbi8vIHBlcnNvbiA9IHsgbmFtZTogXCJKb2hubnk0XCIsIGFnZTogMzIgfTtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXIyMlwiLCBKU09OLnN0cmluZ2lmeShwZXJzb24pKTtcblxuLy8gcGVyc29uID0geyBuYW1lOiBcIkphY2tpZTVcIiwgYWdlOiAyMCB9O1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcjMzXCIsIEpTT04uc3RyaW5naWZ5KHBlcnNvbikpO1xuXG5cbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcjFcIikpOyBcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcjIzLm5hbWVcIikpOyBcblxuXG5cbi8vIGxldCB4OiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpITtcbi8vIGxldCBiOnN0cmluZyA9IEpTT04ucGFyc2UoeCk7XG4vLyBjb25zb2xlLmxvZyh4KTtcblxuLy8gbGV0IGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykhKTtcbi8vIGNvbnNvbGUubG9nKGEpO1xuXG5cbi8vIGxldCB5OnN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEpTT04ucGFyc2UoJ3VzZXInKSkhOyBcbi8vIGNvbnNvbGUubG9nKHkpO1xuXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShKU09OLnBhcnNlKCd1c2VyJykpISk7XG5cblxuXG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpOyAvLyB7IG5hbWU6IFwiQWxleFwiIH1cblxuLy8gZm9ybURhdGEuZm9yRWFjaCgodmFsdWUsa2V5KT0+KGNvbnNvbGUubG9nKHZhbHVlKSkpO1xuLy8gZm9ybURhdGEuZm9yRWFjaCgodmFsdWUsa2V5KT0+KGNvbnNvbGUubG9nKGtleSkpKTtcblxuLy8gY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4vLyBjb25zb2xlLmxvZyhhbGxLZXlzLm1hcChrZXk9PmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==