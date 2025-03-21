import React from "react";

const OrderButton = ({ text, font, color, glow, email, size, price, dimensions }) => {
    const handleOrder = async () => {
        if (!email) {
            alert("Vänligen ange en giltig e-postadress innan du beställer.");
            return;
        }

        const orderData = { text, font, color, glow, email, size, price, dimensions };

        try {
            const response = await fetch("http://localhost:5000/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error("Något gick fel vid beställningen.");
            }

            const data = await response.json();
            alert("Beställning skickad!");
            console.log("Beställning:", data);
        } catch (error) {
            console.error("Fel vid beställning:", error);
            alert("Ett nätverksfel uppstod. Kontrollera din anslutning och försök igen.");
        }
    };

    return (
        <button onClick={handleOrder} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition">
            Beställ
        </button>
    );
};

export default OrderButton;

