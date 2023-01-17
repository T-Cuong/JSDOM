//STYLING ELEMENT
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title)

// const listItems = document.querySelectorAll('.list-items');
// for( let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '15rem';
// }
// console.log(listItems)

//CREATING ELEMENTS
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements
ul.append(li);

//Modifying the text
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML)
li.textContent = 'X-men'

// Modifying attributes & classes
//attributes
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))

//classes
li.classList.add('list-items');
li.classList.remove('list-items');

//Remove elements
li.remove();
