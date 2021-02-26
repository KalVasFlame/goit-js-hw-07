const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
console.log(spanRef.textContent);
const onInput = e => {
  e.target.value !== '' ? spanRef.textContent = e.target.value
    : spanRef.textContent = 'незнакомец'
  
 }
inputRef.addEventListener('input', onInput);

