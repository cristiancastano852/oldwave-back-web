import React from 'react';

export default function ButtonAndIcon({
  icon,
  text,
  otherStyles,
  responsive,
  onClick,
  urlDocument,
}) {
  let responsiveStyle = '';
  if (responsive) {
    responsiveStyle = ' hidden md:inline';
  } else {
    responsiveStyle = 'inline';
  }

  if (urlDocument) {
    return (
      <a
        href={urlDocument}
        target='_blank'
        rel='noopener noreferrer'
        className={`w-fit flex flex-row items-center rounded p-2 md:space-x-1 ${otherStyles}`}
      >
        <span className={responsiveStyle}>{text}</span>
        {icon}
      </a>
    );
  }

  return (
    <button
      type='button'
      className={`w-fit flex flex-row items-center rounded p-2 md:space-x-1 ${otherStyles}`}
      onClick={onClick}
    >
      <span className={responsiveStyle}>{text}</span>
      {icon}
    </button>
  );
}
