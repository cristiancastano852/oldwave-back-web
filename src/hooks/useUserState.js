/* eslint-disable no-console */
import { useReducer, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function useUserState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(false);

  const { creatingUser, userCreated, userRole, userId } = state;

  useEffect(() => {
    const fetchUserId = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://asac-back-prod.azurewebsites.net/user',
        headers: { email: user.email },
      };

      await axios
        .request(options)
        .then((response) => {
          if (response.data) {
            const { isAdmin } = response.data.getDetails.roleUser;
            const { id } = response.data.user[0];

            console.log(response, isAdmin, id);

            if (isAdmin) {
              setUserIdAndRole({ role: 'admin', id });
            } else {
              setUserIdAndRole({ role: 'user', id });
            }
          } else {
            handleCreatingUser();
          }
        })
        .catch((error) => {
          console.error(error);
        });

      setLoading(false);
    };

    if (isAuthenticated) {
      fetchUserId();
    }
  }, [isAuthenticated]);

  function handleCreatingUser() {
    dispatch({ type: 'creatingUser' });
  }

  const createClient = async () => {
    const options = {
      method: 'POST',
      url: 'https://asac-back-prod.azurewebsites.net/client',
      headers: { 'Content-Type': 'application/json' },
      data: { userId, addressId: 'cl6fx8tbj01151ornzqb9xss5' },
    };

    await axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUserCreated = (userCreatedId) => {
    dispatch({ type: 'userCreated', payload: userCreatedId });
  };

  const setUserIdAndRole = ({ role, id }) => {
    console.log(role, id);
    dispatch({ type: 'setUserRole', payload: role });
    dispatch({ type: 'userCreated', payload: id });
  };

  return {
    loading,
    isLoading,
    user,
    isAuthenticated,
    userRole,
    userId,
    creatingUser,
    userCreated,
    handleCreatingUser,
    handleUserCreated,
    createClient,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'creatingUser':
      return { ...state, creatingUser: true };

    case 'userCreated':
      return {
        ...state,
        creatingUser: false,
        userCreated: true,
        userId: action.payload,
      };

    case 'setUserRole':
      return { ...state, userRole: action.payload };

    default:
      return state;
  }
};

const initialState = {
  creatingUser: false,
  userCreated: false,
  userRole: '',
  userId: '',
};

export { useUserState };
