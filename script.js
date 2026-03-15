let count = 0;

let countEl = document.getElementById("count-el");


function increment(){
  count += 1; 
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

let entries;
function save(){
  console.log(count);
  entries = count + " - ";
  saveEl.textContent += entries;
  count = 0;
  countEl.textContent = 0;
}



