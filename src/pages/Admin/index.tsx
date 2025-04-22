import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Orders from "../../components/Orders";
import OrderList from "../../components/OrderList";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("🔒 Token i Admin-sidan:", token);

        if (!token || token === "undefined" || token.length < 10) {
            console.log("⛔️ Ingen giltig token, redirectar till /login");
            navigate("/login");
        } else {
            console.log("✅ Token finns, stannar på Admin");
        }
    }, [navigate]);

    return (
        <>
            <Header />
            <div
                className="flex flex-col items-center justify-center min-h-screen p-6"
                style={{
                    backgroundImage: `url(${backgroundCity})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <OrderList />
            </div>
        </>
    );
};

export default Admin;
