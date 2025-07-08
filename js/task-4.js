const formEl = document.querySelector('.login-form');
const emailEl = formEl.elements[0];
const passwordEl = formEl.elements[1];

const onSubmit = (event) => { 
    event.preventDefault();
    if (emailEl.value.trim().length === 0 || passwordEl.value.trim().length === 0) {
        alert('All form fields must be filled in');
    } else {
        let data = {[emailEl.name]: emailEl.value.trim(), [passwordEl.name]: passwordEl.value.trim()}
        console.log(data);
        formEl.reset();
    };
};


formEl.addEventListener('submit', onSubmit);
