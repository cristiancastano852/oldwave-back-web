import React from 'react';

export default function ButtonAndIcon({
  icon,
  text,
  otherStyles,
  textStyle,
  responsive,
  onClick,
  urlDocument,
}) {
  let responsiveStyle = textStyle;
  let stylesCont = otherStyles;
  if (responsive) {
    responsiveStyle += ' hidden md:inline';
  } else {
    responsiveStyle += ' inline';
  }

  if (text) {
    stylesCont += ' md:space-x-1';
  }

  if (urlDocument) {
    return (
      <a
        href={urlDocument}
        target='_blank'
        rel='noopener noreferrer'
        className={`w-fit flex flex-row items-center justify-center rounded p-2 ${stylesCont}`}
      >
        <span className={responsiveStyle}>{text}</span>
        {icon}
      </a>
    );
  }

  return (
    <button
      type='button'
      className={`w-fit flex flex-row items-center justify-center p-2 ${stylesCont}`}
      onClick={onClick}
    >
      <span className={responsiveStyle}>{text}</span>
      {icon}
    </button>
  );
}
