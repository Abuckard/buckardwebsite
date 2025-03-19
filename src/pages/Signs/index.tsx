import React from "react";
import Header from "../../components/header";
import FontCreate from "../../components/FontCreate";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Signs = () => {
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
                <FontCreate />
            </div>


        </>
    );
};

export default Signs;