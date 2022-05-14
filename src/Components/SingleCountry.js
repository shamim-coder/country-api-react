import React, { useEffect, useState } from "react";

const SingleCountry = ({ id }) => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        id &&
            fetch(`https://restcountries.com/v3.1/alpha/${id}`)
                .then((res) => res.json())
                .then((data) => setCountry(data));
    }, [id]);

    return (
        <div>
            <p>{country[0]?.name?.common}</p>
            <p>{country[0]?.region}</p>
        </div>
    );
};

export default SingleCountry;
