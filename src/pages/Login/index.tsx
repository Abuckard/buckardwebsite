import React from "react";
import Header from "../../components/header";
import AdminLogin from "../../components/AdminLogin";

const Login = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <AdminLogin />
            </div>
        </>
    );
};

export default Login;