/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from 'components/atoms/Loading';
import FormNewUser from 'components/organism/FormNewUser';
import { useUserState } from 'hooks/useUserState';

export default function UserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, creatingUser, userId, loading } = useUserState();
  const [orders, setOrders] = useState([]);

  // const ordersUser = [
  //   {
  //     id: 1,
  //     date: '2021-05-31',
  //     total: 100000,
  //     trackNumber: '123456789',
  //     deliveryStatus: 'Enviado',
  //   },
  //   {
  //     id: 2,
  //     date: '2021-05-21',
  //     total: 200000,
  //     trackNumber: '123456790',
  //     deliveryStatus: 'Entregado',
  //   },
  //   {
  //     id: 3,
  //     date: '2021-05-01',
  //     total: 300000,
  //     trackNumber: '123456791',
  //     deliveryStatus: 'Entregado',
  //   },
  // ];

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: `https://asac-back-prod.azurewebsites.net/order/${userId}`,
      };

      await axios
        .request(options)
        .then((response) => {
          if (response.data?.length > 0) {
            console.log(response);
            setOrders(response.data);
          }
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchUserData();
    setIsLoading(false);
  }, [userId]);

  if (isLoading || loading) {
    return <Loading />;
  }

  if (creatingUser) {
    return (
      <section className='mx-10 my-10 md:w-2/3 md:mx-36'>
        <h2 className='text-xl text-orange-lt font-bold my-5'>
          Bienvenido y gracias por querer ser parte de la familia OldWave
        </h2>
        <FormNewUser />
      </section>
    );
  }

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const ordersComponent = orders?.map((order) => (
    <section
      className='flex items-center p-2 rounded hover:bg-cult-white'
      key={order.id}
    >
      <div className='flex flex-col space-y-2 ml-3'>
        <p className='md:text-md font-medium break-all'>
          Guía: {order.trackNumber}
        </p>
        <p className='text-sm font-light text-gray-400'>{order.shipmentDate}</p>
      </div>

      <div className='flex flex-col text-center space-y-2 ml-auto'>
        <span className='text-base md:text-md font-medium'>
          {formatterPeso.format(order.total)}
        </span>
        <span className='text-sm font-light text-gray-400'>
          {order.deliveryStatus}
        </span>
      </div>
    </section>
  ));

  return (
    <section className='flex flex-col justify-center items-center px-4 py-10 text-blue-lt md:items-start md:px-20'>
      <h1 className='text-xl font-bold md:text-3xl md:my-5'>Perfil</h1>
      <picture className='w-full py-5 flex flex-col items-center justify-center rounded-full px-5 md:flex-row md:justify-start md:w-2/3'>
        <img
          src={user.picture}
          className='w-1/3 rounded-full md:w-1/6'
          alt='Foto personal'
        />
        <h2 className='w-3/4 text-center text-lg p-2 font-semibold md:p-4 md:text-start'>
          {user.nickname}
        </h2>
      </picture>
      <section className='w-full flex flex-col mt-10 space-y-5 md:items-start'>
        <h2 className='text-lg text-center font-bold'>Mis pedidos</h2>
        <div className='flex w-full flex-col mt-10 space-y-3'>
          {orders.length > 0 ? (
            ordersComponent
          ) : (
            <p className='text-center text-lg font-semibold'>
              No tienes pedidos
            </p>
          )}
        </div>
      </section>
    </section>
  );
}
