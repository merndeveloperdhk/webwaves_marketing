import React from 'react';

const CommonTitle = ({subHeading, Heading}) => {
    return (
        <div>
            <h4>{subHeading}</h4>
            <h1>{Heading}</h1>
        </div>
    );
};

export default CommonTitle;