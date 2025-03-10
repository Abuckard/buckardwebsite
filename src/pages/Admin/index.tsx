import React from "react";
import Header from "../../components/header";
import Orders from "../../components/Orders";

const Admin = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <Orders />
            </div>
        </>
    );
};

export default Admin;