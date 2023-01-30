const documentForm = document.querySelector('#formInfo')
const buttonEmail = document.querySelector('#toEmail')
documentForm.addEventListener('submit', Data)

function Data(event) {
    event.preventDefault()
    const sendForm = new FormData(this)
    buttonEmail.setAttribute('href', `mailto:alex_eho@outlook.com?subject=Nombre: ${sendForm.get('name')} Correo: ${sendForm.get('email')} &body=${sendForm.get('sms')}`)
    buttonEmail.click()
}