import React from "react";
import Header from "../../components/Header";
import AdminLogin from "../../components/AdminLogin";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Login = () => {
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

                <AdminLogin />
            </div>
        </>
    );
};

export default Login;