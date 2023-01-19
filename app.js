//Event Listeners
// const button = document.querySelector('.btn-2');
// function alertBtn() {
//     alert('I also love JS');
// }
// button.addEventListener("click", alertBtn)

//Mouseover
const newBackgroundColor = document.querySelector('.box-1');
console.log(newBackgroundColor);    
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener("mouseover", changeBgColor)