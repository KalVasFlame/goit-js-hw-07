const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const onInput = e => {
  spanRef.textContent = e.target.value;
 }
inputRef.addEventListener('input', onInput);

