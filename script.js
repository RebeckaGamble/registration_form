/**open new member, blurr background */
function toggleNewMember() {
  let newMember = document.getElementById("newMemberMenu");
  let blurBackground = document.getElementById("blurBackground");
  if (newMember.style.display === "none" || newMember.style.display === "") {
    newMember.style.display = "block";
    blurBackground.style.display = "block";

    /**close form when clicked outside */
    blurBackground.addEventListener("click", closeFormBtn);
  } else {
    newMember.style.display = "none";
    blurBackground.style.display = "none";
  }
}

/**close the new member form */
function closeFormBtn() {
  let newMember = document.getElementById("newMemberMenu");
  let blurBackground = document.getElementById("blurBackground");
  newMember.style.display = "none";
  blurBackground.style.display = "none";
}

/**validate password */
const minLength = 8;
const hasLowerCase = /[a-z]/;
const hasUpperCase = /[A-Z]/;
const hasNumber = /[0-9]/;

function validatePassword(input) {
  const password = input.value;

  if (
    password.length >= minLength &&
    hasLowerCase.test(password) &&
    hasUpperCase.test(password) &&
    hasNumber.test(password)
  ) {
    input.style.borderColor = "";
  } else {
    input.style.borderColor = "red";
  }
}

/**show/hide password */
function togglePasswordVisibility() {
  let x = document.getElementById("togglePassword");
  let toggleText = document.getElementById("toggleText");

  if (x.type === "password") {
    x.type = "text";
    toggleText.textContent = "Dölj";
  } else {
    x.type = "password";
    toggleText.textContent = "Visa";
  }
}

/**toggle extra info menu */
function toggleExtraMenu() {
  let extraMenu = document.getElementById("extraMenuHidden");

  if (extraMenu.style.display === "none" || extraMenu.style.display === "") {
    extraMenu.style.display = "block";
  } else {
    extraMenu.style.display = "none";
  }
  validatePassword();
}

/**zip - only numbers */
const zipInput = document.getElementById("zip");
const zipError = document.getElementById("zipError");

zipInput.addEventListener("input", validateZip);

function validateZip() {
  const zipCodeValue = zipInput.value;

  if (zipCodeValue === "") {
    zipError.textContent = "";
    zipInput.style.borderColor = "";
    return;
  }
  const isValidZipCode = /^\d+$/.test(zipCodeValue);

  if (isValidZipCode) {
    zipError.textContent = "";
    zipInput.style.borderColor = "";
  } else {
    zipError.textContent = "Endast siffror!";
    zipError.style.color = "red";
    zipInput.style.borderColor = "red";
  }
}

/**phonenumber/flag */
function cellPhoneInput() {
  const phoneSelect = document.getElementById("phoneSelect");
  const cellPhoneInput = document.getElementById("cellPhone");
  const swedenFlag = document.getElementById("SwedenFlag");
  const englandFlag = document.getElementById("englandFlag");

  swedenFlag.style.display = "block";
  cellPhoneInput.value = "+46";

  phoneSelect.addEventListener("change", function () {
    const selectedOpt = phoneSelect.value;

    if (selectedOpt === "SW") {
      englandFlag.style.display = "none";

      swedenFlag.style.display = "block";
      cellPhoneInput.value = "+46";
    } else if (selectedOpt === "EN") {
      englandFlag.style.display = "block";
      swedenFlag.style.display = "none";
      cellPhoneInput = "+44";
    }
    phoneSelect.options[phoneSelect.selectedIndex].style.display = "none";
  });
}

document
  .getElementById("toggleMenuBtn")
  .addEventListener("click", toggleExtraMenu);

document
  .getElementById("openNewMemberBtn")
  .addEventListener("click", toggleNewMember);

document.getElementById("closeMenuBtn").addEventListener("click", closeFormBtn);
