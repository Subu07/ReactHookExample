import React from "react";
import { Spring } from "react-spring/renderprops";
const Comp1 = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div>
          <h3>Hey Sujan</h3>
        </div>
      )}
    </Spring>
  );
};

export default Comp1;
