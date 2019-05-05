import React, { Component, useState } from 'react';
import {useSpring, animated } from 'react-spring';


const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>This is counter : {count}</h2>
        </div>
    )
};

export default Counter;
