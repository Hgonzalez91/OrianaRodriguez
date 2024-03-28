import { crearUsuario } from "./apifetch.js";

const form = document.getElementById('form')

console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = {
        email: e.target.email.value,
        role: 'cliente',
        password: e.target.password.value,
    }

    crearUsuario(data)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
})