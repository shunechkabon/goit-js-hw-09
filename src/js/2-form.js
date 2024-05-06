// Завдання 2 - Форма зворотного зв'язку

'use strict';

let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    formData = JSON.parse(storedData);
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.value = formData[input.name];
    });
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: "",
      message: ""
    };
    form.reset();
  }
});
