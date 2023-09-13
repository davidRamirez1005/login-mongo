import React from 'react'
import { useAuth } from '../auth/context/auth';

export default function Profile() {
  const auth = useAuth();
  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome, {auth.user.ROL_EMAIL}</p>
    </>
  )
}
