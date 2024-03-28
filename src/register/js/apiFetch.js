async function crearUsuario(user){
    const usuariosAPI = await fetch("http://localhost:3100/api/v1/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await usuariosAPI.json();
    return data;
}

export {crearUsuario};