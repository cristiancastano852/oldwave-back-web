/* eslint-disable no-console */
import { useReducer, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function useUserState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = useAuth0();

  const { creatingUser, userCreated, userRole, userId } = state;

  useEffect(() => {
    const fetchUserId = async () => {
      const res = await axios.get(
        'https://asac-back-prod.azurewebsites.net/user',
        {
          headers: { email: user.email },
        }
      );

      console.log(res);
      // const options = {
      //   method: 'GET',
      //   url: `https://asac-back-prod.azurewebsites.net/user`,
      //   headers: { email: user.email },
      // };

      // await axios
      //   .request(options)
      //   .then(({ data }) => {
      //     console.log(data);
      //     const { isAdmin } = data;
      //     if (isAdmin === 'true') {
      //       setUserIdAndRole({ role: 'admin', id: data.userId });
      //     } else if (isAdmin === 'false') {
      //       setUserIdAndRole({ role: 'user', id: data.clientId });
      //     } else {
      //       handleCreatingUser();
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    };

    if (isAuthenticated) {
      fetchUserId();
    }
  }, [isAuthenticated]);

  function handleCreatingUser() {
    dispatch({ type: 'creatingUser' });
  }

  const handleUserCreated = ({ userCreatedId }) => {
    dispatch({ type: 'userCreated', payload: userCreatedId });
  };

  const setUserIdAndRole = ({ role, id }) => {
    dispatch({ type: 'setUserRole', payload: role });
    dispatch({ type: 'userCreated', payload: id });
  };

  return {
    user,
    isAuthenticated,
    userRole,
    userId,
    creatingUser,
    userCreated,
    handleCreatingUser,
    handleUserCreated,
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

export default useUserState;
