const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

function entrar(){
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
      
  let listaUser = []
  let userValid = {
      username: '',
      emailCad: '',
      passwordCad: ''
  }
  listaUser = JSON.parse(localStorage.getItem('listaUser'))  

  listaUser.forEach ((item) => {
  if(emailValue == item.nomeCad && passwordValue == item.senhaCad){
    userValid = {
      username : item.nomeCad,
      passwordCad: item.senhaCad
    }
    setSuccessFor(email)
    setSuccessFor(password)
  }
  else if(emailValue != item.nomeCad && passwordValue != item.senhaCad){
    setErrorFor(email, '')
    setErrorFor(password, '')
  }
  })
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}