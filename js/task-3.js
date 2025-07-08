const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const onInput = (event) => {
    const inputValue = event.currentTarget.value.trim()
    if (inputValue === "") {
        spanEl.textContent = 'Anonymous';
     
    } else {
        spanEl.textContent = inputValue;
 }
};
inputEl.addEventListener('input', onInput);
