const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector('span');

let count = 0;

const onIncrementButtonClick = () => { 
  count += 1;
  counterRef.innerText = count;
}
const onDecrementButtonClick = () => { 
  count -= 1;
  counterRef.innerText = count;
  
}

decrementBtnRef.addEventListener('click', onDecrementButtonClick)
incrementBtnRef.addEventListener('click', onIncrementButtonClick)