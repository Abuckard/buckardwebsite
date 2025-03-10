import React, { useState, useEffect } from "react";

const priceOptions = {
    small: { dimensions: "30x20 cm", price: 100 },
    medium: { dimensions: "50x30 cm", price: 200 },
    large: { dimensions: "70x50 cm", price: 350 },
    xl: { dimensions: "100x70 cm", price: 500 }
};

const PriceExample = () => {
    const [selectedSize, setSelectedSize] = useState(() => localStorage.getItem("selectedSize") || "small");

    useEffect(() => {
        localStorage.setItem("selectedSize", selectedSize);
        localStorage.setItem("dimensions", JSON.stringify(priceOptions[selectedSize].dimensions));
        localStorage.setItem("price", JSON.stringify(priceOptions[selectedSize].price));
    }, [selectedSize]);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 border rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Prisförslag</h2>

            <label className="mb-2">Välj storlek:</label>
            <select
                className="p-2 border rounded mb-4"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
            >
                {Object.keys(priceOptions).map((size) => (
                    <option key={size} value={size}>
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                    </option>
                ))}
            </select>

            <div className="text-center p-4 border rounded bg-white shadow-md">
                <p className="text-lg font-semibold">Mått: {priceOptions[selectedSize].dimensions}</p>
                <p className="text-lg font-semibold text-green-600">Pris: {priceOptions[selectedSize].price} SEK</p>
            </div>
        </div>
    );
};

export default PriceExample;

