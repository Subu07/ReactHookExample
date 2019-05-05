import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import {useSpring, animated } from 'react-spring';

let value = 100;
const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>This is counter : {count}</h2>
            <Button variant = "contained" color = "secondary">
                Click
            </Button>
        </div>
    )
};

export default Counter;
