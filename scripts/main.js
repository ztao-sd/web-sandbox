'use-strict';

const html = document.querySelector('html');
const list = document.createElement('ul');
const info = document.createElement('p');

document.body.appendChild(info);
document.body.appendChild(list);

// html.onclick = function () {
//   const content = prompt('Enter list item content:');
//   const listItem = document.createElement('li');
//   listItem.textContent = content;
//   list.appendChild(listItem);

//   listItem.onclick = function (e) {
//     e.stopPropagation();
//     const newContent = prompt('New list item content:');
//     this.textContent = newContent;
//   };
// };
