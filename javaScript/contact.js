function formValidate() {
  var text = document.getElementById("email").value;
  var regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function (a) {
   if (!(regx.test(text))) {
    document.getElementById("error-message").innerHTML = "Please enter the valid email i.e., lowercase, abc@gmail.com";
    document.getElementById("error-message").style.visibility = "visible";
    document.getElementById("error-message").style.color = "white";
    document.getElementById("error-message").style.textAlign = "center";
    document.getElementById("error-message").style.background = "red";
    a.preventDefault();
   }
  }
}