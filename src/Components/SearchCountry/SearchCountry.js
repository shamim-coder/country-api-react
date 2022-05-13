import React, { useEffect, useState } from "react";

const SearchCountry = () => {
    const [country, setCountry] = useState([]);
    const [text, setText] = useState("");
    useEffect(() => {
        const API = `https://restcountries.com/v3.1/name/${text}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCountry(data[0]))
            .catch((err) => console.log(err));
    }, [text]);

    const handleSearch = () => {
        const searchText = document.getElementById("search-text");
        setText(searchText.value);
    };

    return (
        <div>
            <div className="search-box">
                <input type="text" id="search-text" />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h1>Name: {country?.name?.common}</h1> <p>{country?.name?.common}</p>
            <img style={{ border: "1px solid gray", padding: "20px" }} src={country?.flags?.png} alt="" />
        </div>
    );
};

export default SearchCountry;
