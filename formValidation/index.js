const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

//more email validate()
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //validate username
  if (usernameVal === "") {
    setErrorMsg(usernameVal, "username cannot be blank");
  } else if (usernameVal.length <= 1) {
    setErrorMsg(usernameVal, "Minimum 2 alphabets required");
  } else {
    setSuccessMsg(usernameVal);
  }

  //validate email id
  if (emailVal === "") {
    setErrorMsg(emailVal, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(emailVal, "Invalid Email!!");
  } else {
    setSuccessMsg(email);
  }

  function setErrorMsg(input, errormsgs) {
    // const formControl = input.parentElement;
    // const small = formControl.querySelector("small");
    // formControl.className = "form-control error";
    username.parentElement.className = "form-control error";
    small.innerText = errormsgs;
  }

  function setSuccessMsg(input) {
    // const formControl = input.parentElement;
    // formControl.className = "form-control success";
    username.parentElement.className = "form-control success";
  }
};
