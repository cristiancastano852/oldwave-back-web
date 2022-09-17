import React from 'react';

const Category = ({ image, cate }) => (
  <div className='flex flex-col items-center h-32'>
    <div className='h-16 W-16'>
      <img className='' src={image} alt={cate} />
    </div>
    <p>{cate}</p>
  </div>
);

export { Category };
