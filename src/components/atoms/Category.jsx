import React from 'react';

// const [value, setValue] = useState('');

const Category = ({ image, cate }) => (
  <div className='flex flex-col items-center space-y-6 h-32'>
    {/* <img
        src={image}
        alt={cate}
        //value={cate}
        // className='h-8 w-32 md:9 md:36'
       // onClick={handleSubmit}
        aria-hidden='true'
      /> */}
    <img className='h-16' src={image} alt='categoria' />
    {/* <h2>{cate}</h2> */}
    <p>{cate}</p>
  </div>
);

export { Category };
