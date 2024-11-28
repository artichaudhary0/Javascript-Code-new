document.getElementById("regestrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Name Validation
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    showError("nameError", "Name is required");
    isValid = false;
  } else {
    clearError("nameError");
  }

  // EMAIL VALIDATION
  let email = document.getElementById("email").value.trim();
  const emailPattern = /^[^]+@[^]+\.[a-z]{2,6}$/;

  if (!email.match(emailPattern)) {
    showError("emailError", "Enter a valid email");
    isValid = false;
  } else {
    clearError("emailError");
  }

  // Password VALIDATION
  let password = document.getElementById("password").value.trim();

  if (password.length < 6) {
    showError("passwordError", "Password must have atleast 6 character");
    isValid = false;
  } else {
    clearError("passwordError");
  }

  // Password VALIDATION
  let phone = document.getElementById("phone").value.trim();
  const phonePattern = /^\d{10}$/;

  if (!phone.match(phonePattern)) {
    showError("phoneError", "Enter a valid 10 digit number");
    isValid = false;
  } else {
    clearError("phoneError");
  }

  if (isValid) {
    // true
    alert("Form submitted successfully!!!!");
    document.getElementById("regestrationForm").reset();
  }
});

function showError(elementId, errorMessage) {
  const errorId = document.getElementById(elementId);
  errorId.style.display = "block";
  errorId.innerText = errorMessage;
}

function clearError(elementId) {
  const errorId = document.getElementById(elementId);
  errorId.style.display = "none";
}
