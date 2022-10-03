import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonAndIcon
      text='Regístrate o inicia sesión'
      otherStyles='py-2 px-7 bg-gh-white rounded-2xl hidden md:inline'
      responsive
      onClick={() => {
        loginWithRedirect();
      }}
    />
  );
}
