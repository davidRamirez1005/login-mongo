import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Menu } from '../../../shared/Menu';
import Skeleton from '../../../shared/Skeleton';




export default function Login() {
    const navigate = useNavigate();

    let [ROL, getRol] = useState('admin');
    let [ROL_EMAIL, getMail] = useState('CJimenez21@example.com');
    let [ROL_PASSWORD, getCon] = useState('admin2');
    let [token, setToken] = useState('');
    let [isLoading, setIsLoading] = useState(false);

const login = async () => {
    setIsLoading(true);
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
        } finally {
            setIsLoading(false);
        }
    };

return (
<div>
    <Menu />
    <br /><br />
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
    <br />
    <button value="login" onClick={login}
        // navigate('/Continuacion')
    >
        ENVIAR
    </button>
    {isLoading && <Skeleton />}

</div>
);
}
