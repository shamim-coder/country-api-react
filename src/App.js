import "./App.css";
import React from "react";
import Countries from "./Components/Countries/Countries.js";
import Footer from "./Components/Footer/Footer.js";
import SearchCountry from "./Components/SearchCountry/SearchCountry.js";

function App() {
    return (
        <div className="App">
            <SearchCountry></SearchCountry>
            <Countries></Countries>
            <Footer></Footer>
        </div>
    );
}

export default App;
