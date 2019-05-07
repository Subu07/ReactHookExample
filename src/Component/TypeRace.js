import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const TypeRace = () => {

    const [ userText, setUserText ] = useState('');
    const [ buttonState, setButtonState ] = useState(true );


    const updateUserText = event => {
        setUserText(event.target.value);
        console.log(` current userText ${ userText}`);
    };


    return (
        <div>
            <input value={userText} onChange={updateUserText} />
            <Button variant = "contained" color = "secondary" style={{margin : 10+ "px" ,font: 'Latin'}}
                    onClick = { () => setButtonState( !buttonState )} >
                {buttonState ? 'Click Me plz' : 'Thank You'}
            </Button>
        </div>
    )
};

export default TypeRace;
