const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

//instrui o usuario preencher o campo com dados válidos
username.addEventListener('keyup', () => {
  if(username.value.length < 4){
    setErrorFor(username, 'Preencha esse campo (Nome Inválido)')
  } else {
    setSuccessFor(username)
  }
})
//instrui o usuario preencher o campo com dados válidos
email.addEventListener('keyup', () => {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var emailBox = document.getElementById("email");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        setSuccessFor(emailBox)
  } else {
    form.classList.remove("valid")
    form.classList.add("invalid")
    setErrorFor(emailBox, 'Ensira um Email valido' )
  }
})
//instrui o usuario preencher o campo com dados válidos
password.addEventListener('keyup', () => {
  if(password.value.length < 8){
    setErrorFor(password, 'Insira no mínimo 8 caracteres')
  } else {
  setSuccessFor(password)
  }
})
//instrui o usuario preencher o campo com dados válidos
passwordtwo.addEventListener('keyup', () => {
  if(passwordtwo.value === ''){
    setErrorFor(passwordtwo, 'Preencha esse campo')
  }else if(password.value != passwordtwo.value){
    setErrorFor(passwordtwo, 'Senhas devem ser iguais')
  } else {
    setSuccessFor(passwordtwo)
  }
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adiciona a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    }else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    }else if(usernameValue <3) {
      // mostrar erro
      // add classe
      setErrorFor(username, 'Preencha esse campo (Nome Invalido)')} 
      else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else if(passwordValue === '') {
      // mostrar erro
      // add classe
      setErrorFor(password, 'Preencha esse campo')
  }
  else if(passwordValue.length < 8) { 
    setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
}
      else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não são iguais')
    } else {
        setSuccessFor(passwordtwo)
        //adiciona dados validos ao banco de dados
        window.location.href = 'loginWindow/login.html'
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
listaUser.push(
{
  nomeCad: username.value,
  emailCad: email.value,
  senhaCad: password.value
}
)

localStorage.setItem('listaUser', JSON.stringify(listaUser))
    }

}


//classe de Erro
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

//classe de sucesso
function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
