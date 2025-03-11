 // Aquí tu código
const lista = document.getElementById('lista')
const boton = document.getElementById('agregar')

boton.addEventListener('click', function () {
    let listItem = document.createElement('li')
    listItem.innerText = prompt('Introduce un nuevo elemento a la lista:')
    lista.appendChild(listItem)
    lista.appendChild(document.createElement('hr'))
})