const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('span');

let count = 0;

const countUp = () => { 
  count += 1;
  counterRef.innerText = count;
}
const countDown = () => { 
  count -= 1;
  counterRef.innerText = count;
  
}

decrementBtnRef.addEventListener('click', countDown)
incrementBtnRef.addEventListener('click', countUp)