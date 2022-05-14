import React, { useState } from "react";
import SingleCountry from "../SingleCountry";

const Country = ({ country }) => {
    const handleDetails = (id) => setId(id);

    const { population, region, name, flags, ccn3 } = country;
    const [id, setId] = useState(null);

    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <p>{name.official}</p>
            <p>{region}</p>
            <p>{population}</p>
            <button onClick={() => handleDetails(ccn3)}>Details</button>
            {id && <SingleCountry id={id} />}
        </div>
    );
};

export default Country;
