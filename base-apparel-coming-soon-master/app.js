let errorImage = document.getElementsByClassName('not-valid-image')[0];
let errorMessage = document.getElementsByClassName('not-valid-message')[0];
let button = document.getElementsByClassName('submit-email')[0];
let input = document.querySelector('input');

button.addEventListener('click', function() {
  let isValidEmail = input.checkValidity();
  if (!isValidEmail) {
    errorImage.classList.add('not-valid-email');
    errorMessage.classList.add('not-valid-email');
    input.classList.remove('valid-form');
    input.classList.add('invalid-form');
  }
});
