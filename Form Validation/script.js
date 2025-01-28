document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // name validation :
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      showError("nameError", "Name is required");
      isValid = false;
    } else {
      clearError("nameError");
    }

    // email validation

    const email = document.getElementById("email").value.trim();

    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!email.match(emailPattern)) {
      showError("emailError", "Enter a valid email");
      isValid = false;
    } else {
      clearError("emailError");
    }

    // password validation
    const password = document.getElementById("password").value.trim();

    if (password.length < 6) {
      showError("passwordError", "password must contain 6 characters");
      isValid = false;
    } else {
      clearError("passwordError");
    }

    // phone validation

    const phone = document.getElementById("phone").value.trim();

    const phonePattern = /^\d{10}$/;

    if (!phone.match(phonePattern)) {
      showError("phoneError", "Phone number must contain 10 no.");
      isValid = false;
    } else {
      clearError("phoneError");
    }

    if (isValid) {
      alert("Form submitted successfully");
      document.getElementById("registrationForm").reset();
    }
  });

function showError(elementId, messzage) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.display = "block";
  errorElement.innerText = messzage;
}

function clearError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.display = "none";
}
