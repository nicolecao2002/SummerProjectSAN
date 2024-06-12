import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './css/style.css';

function InputBox({ qfields, handleZipCode }) {
  const [zipCode, setZipCode] = useState("");
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [clothesData, setClothesData] = useState(null);

  const handleSetZipCode = (e) => {
    setZipCode(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Zip Code:", e);
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="search-form"
        style={{ margin: "20px auto", maxWidth: "300px" }}
    >
        <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="Enter Zip Code Here"
            value={zipCode}
            onChange={handleSetZipCode}
            style={{ flex: "4", 
              borderColor: "#000000",
            }}
        />
        <button
            type="submit"
            className="btn btn-secondary"
            style={{
            backgroundColor: "#573AFD",
            // borderColor: "#60755a",
            color: "white",
            }}
        >
            Enter
        </button>
        </div>
    </form>
  );
}

export default InputBox;
