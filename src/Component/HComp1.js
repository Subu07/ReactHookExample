import React from 'react';
import { useSpring, animated } from "react-spring";

const HComp1 = () => {
    const props = useSpring({opacity: 1, from : {opacity: 0}, delay: 2000, duration: 1000});
    return <animated.div style = {props}> Are you searching me? </animated.div>
};

export default HComp1;
