import React, { useState, useEffect } from "react";

const Orders = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const savedOrder = {
            selectedFont: localStorage.getItem("selectedFont") || "Ej valt",
            selectedColor: localStorage.getItem("selectedColor") || "Ej valt",
            selectedGlow: localStorage.getItem("selectedGlow") || "Ej valt",
            text: localStorage.getItem("text") || "Ej valt",
            selectedSize: localStorage.getItem("selectedSize") || "Ej valt",
            dimensions: localStorage.getItem("selectedSize") ? JSON.parse(localStorage.getItem("dimensions")) || "Ej valt" : "Ej valt",
            price: localStorage.getItem("selectedSize") ? JSON.parse(localStorage.getItem("price")) || "Ej valt" : "Ej valt"
        };
        setOrderData(savedOrder);
    }, []);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Sparad Beställning</h1>
            {orderData ? (
                <div className="bg-white p-4 rounded shadow-md w-80">
                    <p><strong>Typsnitt:</strong> {orderData.selectedFont}</p>
                    <p><strong>Färg:</strong> {orderData.selectedColor}</p>
                    <p><strong>Ljuseffekt:</strong> {orderData.selectedGlow}</p>
                    <p><strong>Text:</strong> {orderData.text}</p>
                    <p><strong>Storlek:</strong> {orderData.selectedSize}</p>
                    <p><strong>Mått:</strong> {orderData.dimensions}</p>
                    <p><strong>Pris:</strong> {orderData.price} SEK</p>
                </div>
            ) : (
                <p>Ingen beställning hittades.</p>
            )}
        </div>
    );
};

export default Orders;