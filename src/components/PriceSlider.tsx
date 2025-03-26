import React, { useState } from "react";

const PriceCalculator = () => {
    const [value, setValue] = useState(15);
    const [selectedOptions, setSelectedOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    });

    const pricePerUnit = 170;

    // Baspris
    let basePrice = pricePerUnit * 1.05;

    // Öka priset med 1% för varje extra fot
    for (let i = 16; i <= value; i++) {
        basePrice *= 1.01; // Ökar med 1% per fot
    }

    let totalPrice = basePrice * value;

    // Konvertera fot till meter
    const meters = (value * 0.3048).toFixed(2); // Två decimaler

    // Lägg till procentuell ökning från checkboxar
    const percentageOptions = Object.entries(selectedOptions).reduce((acc, [key, isChecked]) => {
        if (isChecked) {
            acc += key === "option4" ? 350 : totalPrice * 0.25;
        }
        return acc;
    }, 0);

    totalPrice += percentageOptions;

    // Hantera checkboxändringar
    const handleCheckboxChange = (option: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white border rounded-lg w-80 mt-20">
            <h2 className="text-xl font-bold mb-4">Prisräknare!</h2>

            {/* 📌 Inputfält som visar aktuellt värde */}
            <label className="mb-2 text-lg">Hur många fot:</label>
            <input
                type="number"
                value={value}
                min="15"
                max="60"
                className="p-2 border rounded text-center w-24 mb-4"
                onChange={(e) => {
                    const newValue = Math.min(60, Math.max(15, Number(e.target.value)));
                    setValue(newValue);
                }}
            />
            <p className="mb-4 text-gray-400">≈ {meters} meter</p>

            {/* 📌 Slider som styr antalet enheter */}
            <input
                type="range"
                min="15"
                max="60"
                step="1"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-64 mb-4 accent-blue-500"
            />

            {/* 📌 Alternativa tillval */}
            <div className="flex flex-col items-start w-full mb-4">
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option1}
                        onChange={() => handleCheckboxChange("option1")}
                        className="mr-2"
                    />
                    Ligger båten i vattnet? (+30%)
                </label>
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option2}
                        onChange={() => handleCheckboxChange("option2")}
                        className="mr-2"
                    />
                    Flybridge (+25%)
                </label>
                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option3}
                        onChange={() => handleCheckboxChange("option3")}
                        className="mr-2"
                    />
                    Segelbåt med masten på (+15%)
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={selectedOptions.option4}
                        onChange={() => handleCheckboxChange("option4")}
                        className="mr-2"
                    />
                    Dörr med dragkedja (75x121cm) (+450)
                </label>
            </div>

            {/* 📌 Renderar ut aktuellt pris */}
            <p className="text-lg font-semibold">
                Pris: <span className="font-bold">{totalPrice.toFixed(2)} SEK</span>
            </p>
        </div>
    );
};

export default PriceCalculator;
