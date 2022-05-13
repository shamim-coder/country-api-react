import React from "react";

const Country = ({ country }) => {
    const { population, region, name, flags } = country;
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <p>{name.official}</p>
            <p>{region}</p>
            <p>{population}</p>
        </div>
    );
};
export default Country;
