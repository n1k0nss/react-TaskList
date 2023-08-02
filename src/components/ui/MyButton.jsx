import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={'btn-default'}>
            {children}
        </button>
    );
};

export default MyButton;