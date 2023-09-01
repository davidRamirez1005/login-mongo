import React, { useState } from 'react'

export default function Login() {
    let [nombre, getNombre] = useState('')
    let [password, getCon] = useState('')
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({nombre, password})};
    const login = async()=>{
        let json = await(await fetch('http://127.10.10.10:5050/login'),config)
        console.log(json)
    }

    return (
        <div>
            <input type="text" value ={nombre} onChange={e => getNombre(e.target.value)} placeholder='usuario' />
            <input type="text" value ={password} onChange={e => getCon(e.target.value)} placeholder='contraseña' />
            <br />
            <button value="login" onClick={login()} >ENVIAR</button>
        </div>
    )
}
