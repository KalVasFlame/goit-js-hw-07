const inputRef = document.querySelector('#validation-input');

const validNumber = inputRef.getAttribute('data-length')

const onInputChange = e => { 
  if (e.target.value.length === Number(validNumber)) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
  } else { 
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  
  }

    
  
}

inputRef.addEventListener('change', onInputChange);

