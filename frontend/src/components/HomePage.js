import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';
import InputBox from './InputBox';
import Dropdown from './Dropdown';
import DisplayImage from './DisplayImage';
import catData from "./cat.json";
import filterMaps from './filterMaps';

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

    const colorDict = { "1": "Black", "2": "Blue", "3": "Green", "4": "Red", "5": "White" };
    const brandDict = { "1": "Under Armour", "2": "Nike", "3": "Adidas", "4": "Puma" };
    const typeDict = { "1": "Jackets", "2": "Jeans", "3": "Sweater", "4": "T-shirt", "5": "Dress" };

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

                fetch( 'http://localhost:5000/predict', {
                method: 'GET',
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
        // ... (existing code)

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

    const handleTypeFilter = (ty) => {
        setChosenType(typeDict[ty]);
        filterItems();
    }

    const handleColorFilter = (col) => {
        const temp = Math.floor(Math.random() * 3) + 1
        setChosenBrand(brandDict[temp]);
        setColorChoice(colorDict[col]);
    }

    return (
        <div>
            <InputBox zip="Zip Code" handleZipCode={handleZipCode} />
            <Dropdown field="Color" options={filterMaps[0]} handleColorFilter={handleColorFilter} typeD="Color" />
            <Dropdown field="Clothing" options={filterMaps[1]} handleTypeFilter={handleTypeFilter} typeD="Typer" />
            <DisplayImage sc={chosenImage} />
        </div>
    );
}

export default HomePage;


