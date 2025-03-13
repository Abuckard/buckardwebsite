import React from "react";
import Header from "../../components/header";
import PolishSlider from "../../components/PolishPrice";

const Polering = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

                <PolishSlider />
            </div>
        </>
    );
};

export default Polering;