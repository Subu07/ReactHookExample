import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";

const Counter = (props) => {
    useEffect( () => {
        document.title = `You clicked ${ count } times`;

    });

    const [count, setCount] = useState(0);
    const [ color, setColor ] = useState('green');

    function handleColorChange() {
        const nextColor = color === 'green' ? 'gold' : 'green';
        setColor(nextColor);
    }

    return (
        <div>
            <h2>This is counter :</h2> <h1 style={{color}}>{count}</h1>
            <Button variant = "contained" color = "primary" onClick = { () => setCount( count+1 )} >
                Click
            </Button>
            <Button variant = "contained" color = "secondary" onClick = { () => setCount( 0 )} style={{margin : 10+ "px"}} >
                Reset
            </Button>
            <Button variant = "contained" color = "primary" onClick = { handleColorChange} >
                Color
            </Button>
        </div>
    )
};

export default Counter;
