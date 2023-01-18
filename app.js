//Parent node traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

//let ul = document.querySelector('ul');
// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

//Child node traversal
//let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'blue'

// let ul = document.querySelector('ul');
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//Sibling node traversal
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

let ul = document.querySelector('ul');
const div = document.querySelector('div');
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling)