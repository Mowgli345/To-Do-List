import "../src/styles.css";
import content from './assets/images/delete.svg';
console.log("Goodbye");

const delBox = document.querySelector(".task-delete") as HTMLDivElement;

const delImg = document.createElement('img') as HTMLImageElement;
delImg.src=content;

delBox.appendChild(delImg);
console.log(content);


console.log(delBox);