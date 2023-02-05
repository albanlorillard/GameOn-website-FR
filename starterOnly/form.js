function validate(event) {
  event.preventDefault();

  if (!isFirstNameValid()) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }

  if (!isLastNameValid()) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }

  if (!isBirthDateValid()) {
    alert("Vous devez entrer votre date de naissance");
    return false;
  }

  if (!isEmailValid()) {
    alert("Vous devez renseigner un email valide");
    return false;
  }

  if (!isQuantityValid()) {
    alert("Vous devez spécifier une quantité valide");
    return false;
  }

  if (!isLocationValid()) {
    alert("Vous devez choisir une option de lieu de tournois");
    return false;
  }

  if (!isConditionGeneralValid()) {
    alert("Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }

  alert("Merci ! Votre réservation a été reçue.");
  closeModal();
}

function isFirstNameValid() {
  const firstNameField = document.getElementById("first");
  return firstNameField.value.length >= 2;
}

function isLastNameValid() {
  const lastNameField = document.getElementById("last");
  return lastNameField.value.length >= 2;
}

function isBirthDateValid() {
  const birthDate = document.getElementById("birthdate")
  return birthDate.value;
}
function isEmailValid() {
  const emailField = document.getElementById("email");
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailField.value);
}

function isQuantityValid() {
  const quantity = document.getElementById("quantity");
  return parseInt(quantity.value) > 0;
}
function isLocationValid() {
  const location = document.querySelector('input[name="location"]:checked');
  return location;
}

function isConditionGeneralValid() {
  const condition = document.getElementById("checkbox1");
  return condition.checked;
}