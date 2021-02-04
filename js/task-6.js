const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', e => {
  e.target.value.length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
});