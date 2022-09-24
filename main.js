'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
    
}

// CRUD
/*
const tempClient = {
    nome: 'aline',
    email: 'doink@',
    celular: '456789',
    cidade: 'bh'
}
*/

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))
// CRUD - DELETE

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

// CRUD - UPDATE

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}



// CRUD - READ

const readClient = () => getLocalStorage()




//CRUD - CREATE



const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
    
}


const isValidFilds = () => {
    return document.querySelector('#form').reportValidity()

}


// INTERAÇÃO COM USUÁRIO


const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const saveClient = () => {
    if (isValidFilds()) {
        const client = {
            nome: document.getElementById("nome").value,
            email: document.querySelector("#email").value,
            celular: document.querySelector("#fone").value,
            cidade: document.querySelector("#cidade").value
        }
        createClient(client)
        closeModal()
    } 
}



// eventos    

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.querySelector('#salvar').addEventListener('click', saveClient)