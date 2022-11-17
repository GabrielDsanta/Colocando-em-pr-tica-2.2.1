

const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const inputTextName = document.querySelector('#NameInput')
const inputTextAddress = document.querySelector('#Address')

inputTextName.value = window.localStorage.getItem("nameTextValue")
inputTextAddress.value = window.localStorage.getItem("addressTextValue")

for (const iterator of inputs) {
    iterator.addEventListener('focus', (e) =>{
        e.target.style.outline = 'solid 1px purple'
    })

    iterator.addEventListener('blur', (e) =>{
        e.target.style.outline = ''
    })
}

button.addEventListener('click', (e) => {
    console.log("Preparando Envio...")
})

inputTextName.addEventListener('keyup', (e) => {
    window.sessionStorage.setItem("nameTextValue", e.target.value)
    window.localStorage.setItem("nameTextValue", e.target.value)
})

inputTextAddress.addEventListener('keyup', (e) => {
    window.sessionStorage.setItem("addressTextValue", e.target.value)
    window.localStorage.setItem("addressTextValue", e.target.value)
})

