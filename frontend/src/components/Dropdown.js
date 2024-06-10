import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Dropdown({ field, options, handleColorFilter, handleTypeFilter, typeD }) {
    const [drop, setDrop] = useState("");

    const handleSetDrop = (e) => {
        const selectedValue = e.target.value;
        setDrop(selectedValue);
        console.log("Selected Value:", selectedValue);

        if (typeD === "Color") {
            handleColorFilter(selectedValue);
        } else {
            handleTypeFilter(selectedValue);
        }
    };

    return (
        <Form className="row g-3">
            <div className="input-group mb-3">
                <div className="row m-3">
                    <br />
                    <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={drop}
                        onChange={handleSetDrop}
                        style={{ flex: "1" }}
                    >
                        <option selected disabled>{field}</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </Form>
    );
}

export default Dropdown;
