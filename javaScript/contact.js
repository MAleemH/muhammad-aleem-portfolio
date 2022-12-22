const formButton = document.querySelector('#form-button');
const text = document.getElementById('email').value;
const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

formButton.addEventListener('click', (a) => {
  if (!(regx.test(text))) {
    document.getElementById('error-popup').innerHTML = 'Please enter the valid email i.e., lowercase, abc@gmail.com';
    document.getElementById('error-popup').style.visibility = 'visible';
    document.getElementById('error-popup').style.color = 'white';
    document.getElementById('error-popup').style.textAlign = 'center';
    document.getElementById('error-popup').style.background = 'red';
    a.preventDefault();
  }
});