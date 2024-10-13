import React from 'react';

const CommonTitle = ({subHeading, Heading}) => {
    return (
        <div className='text-center my-6 border-y-2 border-green-500 w-1/3 mx-auto p-2'>
            <h4 className='text-2xl'>{subHeading}</h4>
            <h1 className='text-4xl font-bold'>{Heading}</h1>
        </div>
    );
};

export default CommonTitle;