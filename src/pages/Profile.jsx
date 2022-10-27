import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Loading from 'components/atoms/Loading';
import FormNewUser from 'components/organism/FormNewUser';
import { useUserState } from 'hooks/useUserState';

export default function UserProfile() {
  const [userDB, setUserDB] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { user, creatingUser } = useUserState();

  useEffect(() => {
    const fetchUserData = async () => {
      setUserDB(user);
      //   setIsLoading(true);
      //   if (userId) {
      //     const res = await axios.get(
      //       `https://udea-open-door-back-git-develop-cristiancastano852.vercel.app/userProfile/${userId}`
      //     );
      //     setUserDB(res.data.user);
      //   }
    };
    fetchUserData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (creatingUser) {
    return (
      <section className='mx-10 mt-10 md:w-2/3 md:mx-36'>
        <h2 className='text-xl text-orange-lt font-bold my-5'>
          Bienvenido y gracias por querer ser parte de la familia OldWave
        </h2>
        <FormNewUser />
      </section>
    );
  }

  return (
    <section className='flex flex-col justify-center items-center px-4 text-blue-lt md:flex-row md:mt-10'>
      <section className='w-full flex flex-col space-y-5 md:w-1/2'>
        <h1 className='text-xl text-center mt-4 font-bold'>{userDB.name}</h1>
        <picture className='flex flex-col items-center rounded-full px-5'>
          <img
            src={userDB.avatar}
            className='w-1/3 rounded-full md:w-1/4 lg:w-1/5'
            alt='Foto personal'
          />
        </picture>
      </section>
    </section>
  );
}
