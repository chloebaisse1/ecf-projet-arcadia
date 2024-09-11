const nameInput = document.getElementById("NameInput")
const mailInput = document.getElementById("EmailIpnut")
const passwordInput = document.getElementById("PaasswordInput")
const btnSingin = document.getElementById("BtnSignin")

btnSingin.addEventListener("click", checkCredentials)

function checkCredentials() {
  // appeler l'api pour verifier les credentials en bdd

  if (nameInput && mailInput.value === "" && passwordInput.value === "") {
    // recuperation du vrai token
    const token =
      /*****************************vrai token a recup  */
      setToken(token)
    // placer ce token en cookie

    window.location.replace("/")
  } else {
    nameInput.classList.add("is-invalid")
    mailInput.classList.add("is-invalid")
    passwordInput.classList.add("is-invalid")
  }
}
