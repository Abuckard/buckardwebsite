import React from "react";
import Header from "../../components/header";
import PriceSlider from "../../components/PriceSlider";
import backgroundCity from "../../Images/background/backgroundCity.jpg"; // 🟢 Importera bilden
import ContactInfo from "../../components/ContactInfo";

const Inplastning = () => {
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
                <PriceSlider />
                <ContactInfo />
            </div>

        </>
    );
};

export default Inplastning;
