import React from 'react';
import 'styles/footer.css';
import SecPurchase from 'assets/icons/icon-compras-seguras.svg';
import SeveralPayments from 'assets/icons/icon-multiples-medios-pago.svg';
import QA from 'assets/icons/icon-calidad-garantizada.svg';
import AllCountryShipments from 'assets/icons/icon-envios-todo-elpais.svg';
import OldwaveLogoVer from 'assets/logos/oldwave-logo-vertical.png';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <section className='flex flex-row h-36 space-y-1 w-full flex-wrap items-center justify-center bg-sky-blue text-violet text-sm md:justify-between md:px-4 md:text-base lg:px-16'>
        <div className='footer-charac-container'>
          <span>
            <img src={SecPurchase} alt='icon' className='icon' />
          </span>
          <p>Compras Seguras</p>
        </div>
        <div className='footer-charac-container'>
          <span>
            <img src={SeveralPayments} alt='icon' className='icon' />
          </span>
          <p>Multiples medios de pagos</p>
        </div>
        <div className='footer-charac-container'>
          <span>
            <img src={QA} alt='icon' className='icon' />
          </span>
          <p>Calidad Garantizada</p>
        </div>
        <div className='footer-charac-container'>
          <span>
            <img src={AllCountryShipments} alt='icon' className='icon' />
          </span>
          <p>Envios a Todo el país</p>
        </div>
      </section>
      <section className='flex flex-col bg-violet space-y-4 text-white md:flex-row'>
        <div className='flex flex-col w-full justify-center text-center p-3 md:w-2/5 lg:w-1/3'>
          <h2 className='text-lg font-bold md:text-2xl'>
            Suscríbete a nuestro boletín
          </h2>
          <p className='text-base'>Recibe información de nuestras ofertas</p>
        </div>
        <section className='flex flex-col w-full pb-6 md:w-3/5 md:p-3 md:space-y-2'>
          <div className='flex flex-col items-center w-full md:space-x-2 space-y-2 md:space-y-0 md:flex-row'>
            <input
              type='email'
              className='w-4/5 bg-white text-black text-sm rounded-2xl pl-4 p-2 md:w-3/5'
              placeholder='Ingresa tu correo electrónico'
            />
            <button
              type='button'
              className='w-4/5 text-white rounded-2xl border border-white py-2 px-8 md:w-2/5'
            >
              Suscribirme
            </button>
          </div>
          <p className='hidden pb-3 text-xs md:block'>
            *Al suscribirme acepto recibir emails e información de OldWave, bajo
            su política de datos
          </p>
        </section>
      </section>
      <section>
        <section className='flex flex-col mt-4 px-10 space-y-5 justify-between md:flex-row'>
          <picture className='hidden w-32 h-28 md:block'>
            <img src={OldwaveLogoVer} alt='Logo vertical de Oldwave' />
          </picture>
          <div className='flex flex-col'>
            <h3 className='footer-section-title'>oldwave</h3>
            <a href='/'>¿Quienes Somos?</a>
            <a href='/'>Nuestras tiendas</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='footer-section-title'>Links de interés</h3>
            <a href='/'>Preguntas frecuentes</a>
            <a href='/'>Términos y condiciones</a>
            <a href='/'>Políticas de devoluciones</a>
          </div>
          <section>
            <div>
              <h3 className='footer-section-title'>Contacto</h3>
              <span>servicioalcliente@oldwave.co</span>
              <br />
              <span>Teléfono: 3161924</span>
            </div>
            <div className='mt-5'>
              <h3 className='footer-section-title'>Redes sociales</h3>
              <div className='flex flex-row space-x-3 mt-3'>
                <ButtonAndIcon
                  icon={<FaFacebookF className='h-6 w-6 text-white' />}
                  otherStyles='bg-violet rounded-full md:space-x-0'
                />
                <ButtonAndIcon
                  icon={<FaInstagram className='h-6 w-6 text-white' />}
                  otherStyles='bg-violet rounded-full md:space-x-0'
                />
              </div>
            </div>
          </section>
        </section>
        <div className='text-center mt-10'>
          <span>oldwave © 2022 | Desarrollado por: ASAC</span>
        </div>
      </section>
    </footer>
  );
}
