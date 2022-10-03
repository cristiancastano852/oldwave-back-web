import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function DropMenu({ toggle, filterHandeler }) {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    toggle();
    logout();
  };

  const handleLogIn = () => {
    toggle();
    loginWithRedirect();
  };

  const handleFilters = () => {
    toggle();
    filterHandeler();
  };

  return (
    <div className='flex flex-col bg-violet text-left text-white p-2 space-y-2 divide-y'>
      {isAuthenticated ? (
        <button type='button' onClick={handleLogout}>
          Cerrar sesión
        </button>
      ) : (
        <button type='button' onClick={handleLogIn}>
          Iniciar sesión
        </button>
      )}
      <button type='button' onClick={handleFilters}>
        Filtros
      </button>
    </div>
  );
}
