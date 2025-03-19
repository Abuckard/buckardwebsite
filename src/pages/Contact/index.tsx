import React from "react";
import Header from "../../components/header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Contact = () => {
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
            </div>
        </>
    );
};

export default Contact;