import React from "react";
import Header from "../../components/header";
import Orders from "../../components/Orders";
import OrderList from "../../components/OrderList";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Admin = () => {
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