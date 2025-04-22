import React from "react";
import Header from "../../components/Header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";
import Gallery from "../../components/Gallery";

const Galleri = () => {
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
                <Gallery />
            </div>
        </>
    );
};

export default Galleri;