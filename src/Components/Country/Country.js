import React from "react";

const Country = ({ country }) => {
    const { population, region, name, flags, ccn3 } = country;

    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <p>{name.official}</p>
            <p>{region}</p>
            <p>{population}</p>
            <button onClick={() => handleDetails(ccn3)}>Details</button>
        </div>
    );
};
const handleDetails = (id) => {
    console.log(id);
};
export default Country;
