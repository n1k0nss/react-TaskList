import React from 'react';

const MyButton = ({children, className, ...props}) => {
    return (
        <button {...props} className={`btn-default ${className ? className : ''}`}>
            {children}
        </button>
    );
};

export default MyButton;