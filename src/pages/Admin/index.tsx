import React from "react";
import Header from "../../components/header";
import Orders from "../../components/Orders";
import OrderList from "../../components/OrderList";

const Admin = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                {/* <Orders /> */}
                <OrderList />
            </div>
        </>
    );
};

export default Admin;