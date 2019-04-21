document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
let yourName = "Tyler"
newHeader.innerHTML = "${yourName} is the champion";
