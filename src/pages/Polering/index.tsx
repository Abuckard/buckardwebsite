import React from "react";
import Header from "../../components/header";
import PolishSlider from "../../components/PolishPrice";
import backgroundCity from "../../Images/background/backgroundCity.jpg";
import ContactInfo from "../../components/ContactInfo";
const Polering = () => {
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
                <PolishSlider />
                <ContactInfo />
            </div>



        </>
    );
};

export default Polering;