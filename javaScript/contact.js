const formButton = document.querySelector('#form-button');
function validate() {
  const txt = document.getElementById('email').value;
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function (e) {
    if (!(regx.test(txt))) {
      document.getElementById('error-message').innerHTML = 'Please enter valid email address! i.e, lowercase, abc@gmail.com';
      document.getElementById('error-message').style.visibility = 'visible';
      document.getElementById('error-message').style.color = 'white';
      document.getElementById('error-message').style.background = 'red';
      document.getElementById('error-message').style.textAlign = 'center';
      e.preventDefault();
    }
  };
}
formButton.addEventListener('click', () => {
  validate();
});
// store data
const inputText = document.querySelectorAll('.form-input');
const dataStored = {
  name: '',
  email: '',
  textarea: '',
};
inputText.forEach((input) => {
  input.addEventListener('input', () => {
    dataStored[input.name] = input.value;
    localStorage.setItem('everyData', JSON.stringify(dataStored));
  });
});
const formStored = JSON.parse(localStorage.getItem('everyData'));
if (formStored) {
  inputText.forEach((element) => {
    element.value = formStored[element.name];
  });
}