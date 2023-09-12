import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map((route, index) => (
                <li key={index}>
                    <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'blue',
                    })}
                    to={route.to}
                    >
                    {route.text}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home',
});
routes.push({
    to: '/Login',
    text: 'iniciar-sesion',
});

export { Menu };
