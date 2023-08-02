import React from 'react';

const MyInput = ({...props}) => {
    return (
        <input {...props} className={'input-default'}/>
    );
};

export default MyInput;