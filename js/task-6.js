const inputRef = document.querySelector('#validation-input');

const onInputChange = e => { 
e.target.value.length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
}

inputRef.addEventListener('change', onInputChange);