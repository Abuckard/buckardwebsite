import React, { useState, useEffect } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/items"); // 🔹 Ändra om din backend körs på annan port
                if (!response.ok) {
                    throw new Error("Något gick fel vid hämtning av beställningar");
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <p className="text-center">Laddar beställningar...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-gray-100 rounded-lg w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Orderlista</h2>
            {orders.length === 0 ? (
                <p>Inga beställningar ännu.</p>
            ) : (
                <ul className="space-y-4">
                    {orders.map((order, index) => (
                        <li key={order._id} className="p-4 bg-white shadow-md rounded-md">
                            <p className="font-bold">Beställning #{index + 1}</p>
                            <p><strong>Text:</strong> {order.text}</p>
                            <p><strong>Typsnitt:</strong> {order.font}</p>
                            <p><strong>Färg:</strong> {order.color}</p>
                            <p><strong>Glow:</strong> {order.glow}</p>
                            <p><strong>Email:</strong> {order.email}</p>
                            <p><strong>Storlek:</strong> {order.size}</p>
                            <p><strong>Mått:</strong> {order.dimensions}</p>
                            <p><strong>Pris:</strong> {order.price} SEK</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderList;
