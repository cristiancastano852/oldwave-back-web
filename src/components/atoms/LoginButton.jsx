import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';

export default function LoginButton({ isNavBar }) {
  const { loginWithRedirect } = useAuth0();

  const styleForNavBar = ' hidden md:block';

  return (
    <ButtonAndIcon
      text='Regístrate o inicia sesión'
      otherStyles={`py-2 px-7 bg-gh-white rounded-2xl ${
        isNavBar ? styleForNavBar : ''
      }`}
      onClick={() => {
        loginWithRedirect();
      }}
    />
  );
}
