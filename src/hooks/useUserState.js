import { useReducer, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

function useUserState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = useAuth0();

  const { creatingUser, userCreated, userRole, userId } = state;

  useEffect(() => {
    const fetchUserId = async () => {
      //   const {data} = await axios.get(
      //     'https://udea-open-door-back-git-develop-cristiancastano852.vercel.app/getRole',
      //     {
      //       headers: { email: user.email },
      //     }
      //   );
      const data = {
        clientId: 'cl6fyaamz04371ornwyiur8oo',
        userId: 'cl6fx60q200451ornsr944ty4',
        isAdmin: 'false',
      };

      if (data.isAdmin === 'true') {
        setUserIdAndRole({ role: 'admin', id: data.userId });
      } else if (data.isAdmin === 'false') {
        setUserIdAndRole({ role: 'user', id: data.clientId });
      } else {
        handleCreatingUser();
      }
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
