import React from "react";
import Header from "../../components/header";
import PriceSlider from "../../components/PriceSlider";

const Inplastning = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

                <PriceSlider />
            </div>
        </>
    );
};

export default Inplastning;