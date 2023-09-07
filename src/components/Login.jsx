import React, { useState } from 'react';

export default function Login() {
    let [ROL, getRol] = useState('');
    let [ROL_EMAIL, getMail] = useState('');
    let [ROL_PASSWORD, getCon] = useState('');
    let [token, setToken] = useState(''); // Nuevo estado para el token

const login = async () => {
    try {
        let header = new Headers();
        header.set('Content-Type', 'application/json');
        header.set('Authorization', `Bearer ${token}` );

        const response = await fetch('http://127.10.10.10:5050/login', {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ ROL, ROL_EMAIL, ROL_PASSWORD }),
        });

        if (!response.ok) {
        throw new Error('Error en la solicitud');
        }
        
        const data = await response.json();
        setToken(data.Token);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

return (
<div>
    <input
        type="text"
        value={ROL}
        onChange={(e) => getRol(e.target.value)}
        placeholder="rol"
    />
    <input
        type="text"
        value={ROL_EMAIL}
        onChange={(e) => getMail(e.target.value)}
        placeholder="email"
    />
    <input
        type="text"
        value={ROL_PASSWORD}
        onChange={(e) => getCon(e.target.value)}
        placeholder="contraseña"
    />

    <br />
    <button value="login" onClick={login}>
        ENVIAR
    </button>

</div>
);
}
