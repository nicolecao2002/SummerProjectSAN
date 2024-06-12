import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import InputBox from './InputBox';
import Dropdown from './Dropdown';
import DisplayImage from './DisplayImage';
import catData from "./cat.json";
import filterMaps from './filterMaps';
import { Row, Col } from 'react-bootstrap'; 

function HomePage() {
    const [clothesData, setClothesData] = useState(null);
    const [colorChoice, setColorChoice] = useState("");
    const [endData, setEndData] = useState(null);
    const [chosenBrand, setChosenBrand] = useState(null);
    const [chosenType, setChosenType] = useState("");
    const [chosenItem, setChosenItem] = useState("");
    const [chosenImage, setChosenImage] = useState("");
    const [chosenZipText, setChosenZipText] = useState("");
    const [chosenWelcome, setChosenWelcome] = useState("");
    const [weatherResponse, setWeatherResponse] = useState(null);
    const [backEndArray, setBackEndArray] = useState(null);

    const colorsList = ["Black", "Blue", "Green", "Red", "White"];
    const brandsList = ["Under Armour", "Nike", "Adidas", "Puma"];
    const typesList = ["Jackets", "Jeans", "Sweater", "T-shirt", "Dress"];

    function filterItems() {
        console.log("chosen type", chosenType);
        console.log("chosen color", colorChoice);
        console.log("chosen brand", chosenBrand);

        const clother = catData[chosenType]?.[chosenBrand]?.[colorChoice] || [];
        const length = clother.length;

        if (length > 0) {
            const randomIndex = Math.floor(Math.random() * length);
            const randomItem = clother[randomIndex];
            console.log("Randomly chosen item:", randomItem);

            setChosenItem(randomItem);
            setChosenImage(randomItem["Image"]);

            const dataToSend = {
                chosenBrand,
                chosenType,
                colorChoice,
            };

            fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Flask response:', data);
                })
                .catch(error => {
                    console.error('Error sending data to Flask', error);
                });
        } else {
            console.log("No items found for the selected criteria.");
        }
    }

    const handleZipCode = (zipCode) => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=ceb4db99cfc5455fa0634034240402&q=${zipCode}&days=2&aqi=no&alerts=no`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setWeatherResponse(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    const handleTypeFilter = (type) => {
        setChosenType(type);
        filterItems();
    }

    const handleColorFilter = (color) => {
        const randomBrand = brandsList[Math.floor(Math.random() * brandsList.length)];
        setChosenBrand(randomBrand);
        setColorChoice(color);
    }

    return (
        <div>
            <InputBox zip="Zip Code" handleZipCode={handleZipCode} />
            <Row className="d-flex justify-content-center dropdown-container">
                <Col xs="auto">
                    <Dropdown field="Color" options={filterMaps[0]} handleColorFilter={handleColorFilter} typeD="Color" />
                </Col>
                <Col xs="auto">
                    <Dropdown field="Clothing" options={filterMaps[1]} handleTypeFilter={handleTypeFilter} typeD="Type" />
                </Col>
            </Row>
            <DisplayImage sc={chosenImage} />
        </div>
    );
}

export default HomePage;
