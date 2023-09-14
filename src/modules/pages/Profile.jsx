import React from 'react'
import { useAuth } from '../auth/context/auth';
import { Menu } from '../../shared/Menu';


export default function Profile() {
  const auth = useAuth();
  return (
    <>
    <Menu />
      <h1>Perfil Admin</h1>
      <p>Hola, {auth.user.username}</p>
    </>
  )
}
