import React, { useState } from "react";

const Address = () => {
  const [state, setState] = useState({
    city: "",
    country: ""
  });

  const cityChange = event => {
    setState({
      ...state,
      city: event.target.value
    });
  };

  const countryChange = event => {
    setState({
      ...state,
      country: event.target.value
    });
  };

  return (
    <div>
      <form>
        <input
          value={state.city}
          placeholder={"City"}
          type={"text"}
          onChange={cityChange}
        />
        <input
          value={state.country}
          placeholder={"City"}
          type={"text"}
          onChange={countryChange}
        />
      </form>

      <div>
        <h2 style={{ color: "red", textAlign: "left" , marginLeft: 100+ 'px'}}>
          {" "}
          Your current address is: {state.city}, {state.country}
        </h2>
      </div>
    </div>
  );
};

export default Address;
